import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";

import * as S from "./styles";
import { useQuery } from "react-query";
import { api } from "src/services/api";
import { PetCard } from "src/components/PetCard";

const DynamicSelect = dynamic(() => import("../../components/Select"), {
  loading: () => <></>,
  ssr: false,
});

export const PetsList = () => {
  const { data } = useQuery(["pets"], async () => await api.getPets());
  const { control } = useForm();

  return (
    <S.Main>
      <S.MainHeader>
        <S.MainTotal>
          Encontre <span>324 amigos</span> na sua cidade
        </S.MainTotal>

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
                    value: "DOGS",
                  },
                  {
                    label: "Gatos",
                    value: "CATS",
                  },
                ]}
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
