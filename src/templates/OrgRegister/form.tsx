import dynamic from "next/dynamic";
import { useEffect, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FieldText } from "src/components/FieldText";

import { Button } from "src/components/Button";
import { statesOptions } from "src/utils/states";

import * as S from "./styles";
import { viacep } from "src/services/viacep";
import { RegisterSchema, registerSchema } from "./schema";
import { OrgRegisterBody } from "src/services/api/types";
import { api } from "src/services/api";
import { useRouter } from "next/router";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const OrgRegisterForm = () => {
  const {
    control,
    watch,
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });
  const { push } = useRouter();

  const postalCode = watch("postal_code");

  const setFieldsByPostalCode = useCallback(
    async (postalCode: string) => {
      const { logradouro, uf, bairro, localidade, erro } =
        await viacep.getAddressByPostalCode(postalCode);

      if (erro) {
        reset({
          address: "",
          state: "",
          neighborhood: "",
          city: "",
        });

        return;
      }

      setValue("address", logradouro);
      setValue("state", uf);
      setValue("neighborhood", bairro);
      setValue("city", localidade);
    },
    [reset, setValue]
  );

  useEffect(() => {
    const formattedPostalCode = postalCode?.replace(/[-, _]/g, "");

    if (formattedPostalCode?.length >= 8) {
      setFieldsByPostalCode(formattedPostalCode);
    }
  }, [postalCode, setFieldsByPostalCode]);

  const onSubmit = useCallback(
    async (data: OrgRegisterBody) => {
      try {
        await api.createOrg(data);
        await push("/org/login");
      } catch {}
    },
    [push]
  );

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Cadastre sua organização </S.Title>

      <S.FormFields>
        <FieldText
          label="Nome do responsável"
          placeholder="John Doe"
          error={errors.responsible_name}
          {...register("responsible_name")}
        />

        <FieldText
          label="Whatsapp"
          placeholder="(99) 99999-9999"
          mask="(99) 99999-9999"
          error={errors.whatsapp_number}
          {...register("whatsapp_number")}
        />

        <FieldText
          label="CEP"
          placeholder="12345-000"
          mask="99999-999"
          error={errors.postal_code}
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
            error={errors.city}
            {...register("city")}
          />
        </S.Grid>

        <FieldText
          label="Bairro"
          placeholder="Bairro dos cães"
          disabled
          error={errors.neighborhood}
          {...register("neighborhood")}
        />

        <FieldText
          label="Rua"
          placeholder="Rua dos Gatos"
          disabled
          error={errors.address}
          {...register("address")}
        />

        <FieldText
          label="Número"
          placeholder="7"
          type="number"
          error={errors.number}
          {...register("number")}
        />

        <FieldText
          label="E-mail"
          placeholder="email@org.com"
          type="email"
          error={errors.email}
          {...register("email")}
        />

        <FieldText
          label="Senha"
          placeholder="*********"
          type="password"
          error={errors.password}
          {...register("password")}
        />

        <FieldText
          label="Confirmar Senha"
          placeholder="*********"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <S.Grid>
          <S.Link href="/org/login">Já possui conta?</S.Link>
          <Button type="submit">Cadastrar</Button>
        </S.Grid>
      </S.FormFields>
    </S.Form>
  );
};
