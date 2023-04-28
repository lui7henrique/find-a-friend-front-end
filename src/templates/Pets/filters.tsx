import { useQuery } from "react-query";
import { useFormContext, Controller } from "react-hook-form";
import { useCallback } from "react";
import dynamic from "next/dynamic";

import * as S from "./styles";

import { SelectOptions } from "src/components/Select/types";
import { IconButton } from "src/components/IconButton";

import { ibge } from "src/services/ibge";
import { statesOptions } from "src/utils/states";
import { levelOptions } from "src/utils/level";
import { ageOptions } from "src/utils/ages";
import { sizeOptions } from "src/utils/size";

import { FilterPetForm } from "./types";
import { MagnifyingGlass } from "phosphor-react";
import { useRouter } from "next/router";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const PetsFilters = () => {
  const { query, push } = useRouter();
  const { watch, control, handleSubmit } = useFormContext<FilterPetForm>();
  const state = watch("state") ?? "SP";
  const isDisabledSubmitButton = !watch("city");

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

  const queryState = String(query.state || "SP");
  const queryCity = String(query.city || districtOptions[0]?.value);

  const onSubmit = useCallback(
    async (data: FilterPetForm) => {
      const { city, state } = data;

      await push(`/pets?state=${state ?? queryState}&city=${city}`);
    },
    [push, queryState]
  );

  return (
    <S.Aside>
      <S.AsideHeader>
        <S.AsideLogo
          src="/assets/minimal_logo.svg"
          width="46"
          height="46"
          alt="Logo"
        />

        <S.AsideHeaderFilters onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <DynamicSelect
                placeholder="Estado"
                groups={[
                  {
                    group: "Estados",
                    options: statesOptions,
                  },
                ]}
                defaultValue={queryState}
                triggerProps={{
                  size: "small",
                  variant: "outline",
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
                placeholder="Cidade"
                inputProps={{
                  placeholder: "Busque pelo nome da cidade...",
                }}
                groups={[
                  {
                    group: `Cidades (${state})`,
                    options: districtOptions,
                  },
                ]}
                defaultValue={queryCity}
                triggerProps={{
                  size: "small",
                  variant: "outline",
                }}
                {...field}
              />
            )}
          />

          <IconButton
            icon={<MagnifyingGlass size={20} color="#0D3B66" weight="bold" />}
            disabled={isDisabledSubmitButton}
            size="small"
            type="submit"
          />
        </S.AsideHeaderFilters>
      </S.AsideHeader>

      <S.AsideBody>
        <S.AsideBodyTitle>Filtros</S.AsideBodyTitle>
        <S.AsideBodyFilters>
          <Controller
            control={control}
            name="age"
            render={({ field }) => (
              <DynamicSelect
                label="Idade"
                placeholder="Idade"
                groups={[
                  {
                    group: `Idades (0-30)`,
                    options: [
                      {
                        label: "Todas",
                        value: "ALL",
                      },
                      ...ageOptions,
                    ],
                  },
                ]}
                defaultValue="ALL"
                triggerProps={{
                  size: "small",
                  variant: "filled_secondary",
                }}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="energy_level"
            render={({ field }) => (
              <DynamicSelect
                label="Nível de energia"
                placeholder="Nível de energia"
                groups={[
                  {
                    group: "Nível de energia",
                    options: [
                      {
                        label: "Todas",
                        value: "ALL",
                      },
                      ...levelOptions,
                    ],
                  },
                ]}
                defaultValue="ALL"
                triggerProps={{
                  size: "small",
                  variant: "filled_secondary",
                }}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="independency_level"
            render={({ field }) => (
              <DynamicSelect
                label="Nível de independência"
                placeholder="Nível de independência"
                groups={[
                  {
                    group: "Nível de independência",
                    options: [
                      {
                        label: "Todos",
                        value: "ALL",
                      },
                      ...levelOptions,
                    ],
                  },
                ]}
                defaultValue="ALL"
                triggerProps={{
                  size: "small",
                  variant: "filled_secondary",
                }}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="size"
            render={({ field }) => (
              <DynamicSelect
                label="Tamanho do animal"
                placeholder="Tamanho do animal"
                groups={[
                  {
                    group: "Tamanho",
                    options: [
                      {
                        label: "Todos",
                        value: "ALL",
                      },
                      ...sizeOptions,
                    ],
                  },
                ]}
                defaultValue="ALL"
                triggerProps={{
                  size: "small",
                  variant: "filled_secondary",
                }}
                {...field}
              />
            )}
          />
        </S.AsideBodyFilters>
      </S.AsideBody>
    </S.Aside>
  );
};
