import dynamic from "next/dynamic";
import { useEffect, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";

import { FieldText } from "src/components/FieldText";

import { Button } from "src/components/Button";
import { statesOptions } from "src/utils/states";

import { OrgRegisterFormType } from "./types";
import * as S from "./styles";
import { viacep } from "src/services/viacep";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const OrgRegisterForm = () => {
  const { control, watch, register, setValue } = useForm<OrgRegisterFormType>();

  const postalCode = watch("postal_code");

  // const districtOptions: SelectOptions = useMemo(
  //   () =>
  //     data
  //       ? data?.map((district) => {
  //           const { nome } = district;
  //           const option = {
  //             label: nome,
  //             value: nome,
  //           };

  //           return option;
  //         })
  //       : [],
  //   [data]
  // );

  const setFieldsByPostalCode = useCallback(async () => {
    const { logradouro, bairro, uf, localidade } =
      await viacep.getAddressByPostalCode(postalCode);

    setValue("address", logradouro);
    setValue("state", uf);
    setValue("neighborhood", bairro);
    setValue("city", localidade);
  }, [postalCode, setValue]);

  useEffect(() => {
    if (postalCode?.length === 8) {
      setFieldsByPostalCode();
    }
  }, [postalCode, setFieldsByPostalCode]);

  return (
    <S.Form>
      <S.Title>Cadastre sua organização </S.Title>

      <S.FormFields>
        <FieldText
          label="Nome do responsável"
          placeholder="John Doe"
          {...register("responsible_name")}
        />

        <FieldText label="Whatsapp" placeholder="(99) 999999-9999" />

        <FieldText
          label="CEP"
          placeholder="12345-000"
          {...register("postal_code")}
        />

        <S.Grid>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <DynamicSelect
                label="Estado"
                placeholder="Selecione um estado..."
                groups={[
                  {
                    group: "Estados",
                    options: statesOptions,
                  },
                ]}
                triggerProps={{
                  variant: "input",
                  disabled: true,
                }}
                {...field}
              />
            )}
          />

          <FieldText
            label="Cidade"
            placeholder="Cidade"
            disabled
            {...register("city")}
          />
        </S.Grid>

        <FieldText
          label="Bairro"
          placeholder="Bairro dos cães"
          disabled
          {...register("neighborhood")}
        />

        <FieldText
          label="Rua"
          placeholder="7"
          disabled
          {...register("address")}
        />

        <FieldText
          label="Número"
          placeholder="7"
          type="number"
          {...register("number")}
        />

        <FieldText label="E-mail" placeholder="email@org.com" type="email" />
        <FieldText label="Senha" placeholder="*********" type="password" />
        <FieldText
          label="Confirmar Senha"
          placeholder="*********"
          type="password"
        />

        <S.Grid>
          <S.Link href="/org/login">Já possui conta?</S.Link>
          <Button>Cadastrar</Button>
        </S.Grid>
      </S.FormFields>
    </S.Form>
  );
};
