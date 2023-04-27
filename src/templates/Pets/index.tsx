import { useQuery } from "react-query";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";

import { SelectOptions } from "src/components/Select/types";
import { ibge } from "src/services/ibge";
import { statesOptions } from "src/utils/states";

import * as S from "./styles";
import { FilterPetForm } from "./types";
import { IconButton } from "src/components/IconButton";
import { MagnifyingGlass } from "phosphor-react";
import { ageOptions } from "src/utils/ages";
import { levelOptions } from "src/utils/level";
import { sizeOptions } from "src/utils/size";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const PetsTemplates = () => {
  const { watch, control, resetField, handleSubmit } = useForm<FilterPetForm>();
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

  return (
    <S.Container>
      <S.Aside>
        <S.AsideHeader>
          <S.AsideLogo
            src="/assets/minimal_logo.svg"
            width="46"
            height="46"
            alt="Logo"
          />

          <S.AsideHeaderFilters>
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
                  defaultValue="SP"
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
                  isSearchable
                  inputProps={{
                    placeholder: "Busque pelo nome da cidade...",
                  }}
                  groups={[
                    {
                      group: `Cidades (${state})`,
                      options: districtOptions,
                    },
                  ]}
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
                  isSearchable
                  groups={[
                    {
                      group: `Idades (0-30)`,
                      options: ageOptions,
                    },
                  ]}
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
              name="energyLevel"
              render={({ field }) => (
                <DynamicSelect
                  label="Nível de energia"
                  placeholder="Nível de energia"
                  isSearchable
                  groups={[
                    {
                      group: "Nível de energia",
                      options: levelOptions,
                    },
                  ]}
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
              name="independencyLevel"
              render={({ field }) => (
                <DynamicSelect
                  label="Nível de independência"
                  placeholder="Nível de independência"
                  isSearchable
                  groups={[
                    {
                      group: "Nível de independência",
                      options: levelOptions,
                    },
                  ]}
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
                  isSearchable
                  groups={[
                    {
                      group: "Tamanho",
                      options: sizeOptions,
                    },
                  ]}
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

      <S.Main>
        <S.MainHeader>
          <S.MainTotal>
            Encontre <span>324 amigos</span> na sua cidade
          </S.MainTotal>
        </S.MainHeader>
      </S.Main>
    </S.Container>
  );
};
