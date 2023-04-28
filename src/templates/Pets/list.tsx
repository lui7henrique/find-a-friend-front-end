import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { api } from "src/services/api";
import { PetCard } from "src/components/PetCard";

import { FilterPetForm } from "./types";

import * as S from "./styles";
import { useRouter } from "next/router";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const PetsList = () => {
  const { query } = useRouter();
  const { control, watch } = useFormContext<FilterPetForm>();

  const { type, age, energy_level, independency_level, size } = watch();
  const state = query.state ?? "SP";
  const city = query.city;

  const params = {
    ...(type && type !== "ALL" && { type }),
    ...(age && age !== "ALL" && { age: String(age) }),
    ...(energy_level && energy_level !== "ALL" && { energy_level }),
    ...(independency_level &&
      independency_level !== "ALL" && { independency_level }),
    ...(size && size !== "ALL" && { size }),
    ...(state && state !== "ALL" && { state }),
    ...(city && city !== "ALL" && { city }),
  };

  const { data, isLoading } = useQuery(
    ["pets", type, age, energy_level, independency_level, size, city, state],
    async () => await api.getPets(params)
  );

  const totalMessage = useMemo(() => {
    if (isLoading) {
      return <>Procurando...</>;
    }

    if (!data?.pets.length) {
      return <>Nenhum resultado foi encontrado 😿</>;
    }

    return (
      <>
        Encontre <span>{data?.pets.length} amigos</span> na sua cidade
      </>
    );
  }, [data, isLoading]);

  return (
    <S.Main>
      <S.MainHeader>
        <S.MainTotal>{totalMessage}</S.MainTotal>

        <S.MainSelectContainer>
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <DynamicSelect
                placeholder="Selecione o tipo"
                options={[
                  {
                    label: "Cães e gatos",
                    value: "ALL",
                  },
                  {
                    label: "Cães",
                    value: "DOG",
                  },
                  {
                    label: "Gatos",
                    value: "CAT",
                  },
                ]}
                defaultValue="ALL"
                triggerProps={{
                  size: "small",
                  variant: "filled_tertiary",
                }}
                {...field}
              />
            )}
          />
        </S.MainSelectContainer>
      </S.MainHeader>

      <S.MainList>
        {data?.pets.map((pet) => {
          return <PetCard pet={pet} key={pet.id} />;
        })}
      </S.MainList>
    </S.Main>
  );
};
