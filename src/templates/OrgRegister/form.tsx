import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";

import { FieldText } from "src/components/FieldText";
import * as S from "./styles";
import { Button } from "src/components/Button";
import { statesOptions } from "src/utils/states";
import { SelectOptions } from "src/components/Select/types";

import { OrgRegisterFormType } from "./types";
import { useQuery } from "react-query";
import { ibge } from "src/services/ibge";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const OrgRegisterForm = () => {
  const { control, watch } = useForm<OrgRegisterFormType>();

  const state = watch("state") ?? "SP";

  const { data } = useQuery(["districts", state], async () => {
    const data = await ibge.getDistrictsByUF(state);

    return data;
  });

  const districtOptions: SelectOptions = data
    ? data?.map((district) => {
        const { nome } = district;
        const option = {
          label: nome,
          value: nome,
        };

        return option;
      })
    : [];

  return (
    <S.Form>
      <S.Title>Cadastre sua organização </S.Title>

      <S.FormFields>
        <FieldText label="Nome do responsável" placeholder="John Doe" />
        <FieldText label="Whatsapp" placeholder="(99) 999999-9999" />
        <FieldText label="CEP" placeholder="12345-000" />
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
                }}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <DynamicSelect
                label="Cidade"
                placeholder="Selecione uma cidade..."
                inputProps={{
                  placeholder: "Busque pelo nome da cidade...",
                }}
                triggerProps={{
                  variant: "input",
                }}
                groups={[
                  {
                    group: `Cidades (${state})`,
                    options: districtOptions,
                  },
                ]}
                {...field}
              />
            )}
          />
        </S.Grid>
        <FieldText label="Bairro" placeholder="Bairro dos cães" />
        <FieldText label="Rua" placeholder="7" />
        <FieldText
          label="Número"
          placeholder="Rua Dos Gatos Malhados"
          type="number"
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
