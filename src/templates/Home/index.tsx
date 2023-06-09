import { useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";

import { IconButton } from "src/components/IconButton";
import { statesOptions } from "src/utils/states";
import { SelectOptions } from "src/components/FieldSelect/types";
import { ibge } from "src/services/ibge";

import * as S from "./styles";
import { SearchPetForm } from "./types";
import { useRouter } from "next/router";
import Link from "next/link";
import { useProfile } from "src/hooks/useProfile";

const DynamicSelect = dynamic(() => import("../../components/FieldSelect"), {
  loading: () => <></>,
  ssr: false,
});

export const HomeTemplate = () => {
  const { push } = useRouter();
  const { profile } = useProfile();

  const { watch, control, handleSubmit } = useForm<SearchPetForm>();
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

  const onSubmit = useCallback(
    async (data: SearchPetForm) => {
      const { city } = data;

      await push(`/pets?state=${state}&city=${city}`);
    },
    [push, state]
  );

  const isDisabledSubmitButton = !districtOptions.some(
    (option) => option.value === watch("city")
  );

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <S.HomeLogo
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="200"
          src="/assets/logo.svg"
          width="215"
          height="56"
          alt="Logo"
        />

        <S.HomeHero>
          <S.HomeTitle
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="200"
          >
            Leve a <br />
            felicidade
            <br /> para o seu lar
          </S.HomeTitle>

          <S.HomeDogsWrapper
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <S.HomeDogs src="/assets/dogs.svg" fill alt="dogs"></S.HomeDogs>
          </S.HomeDogsWrapper>
        </S.HomeHero>

        <S.HomeFooter>
          <S.HomeFooterTexts>
            <S.HomeSubtitle
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="200"
            >
              Encontre o animal de estimação ideal
              <br /> para seu estilo de vida!
            </S.HomeSubtitle>

            <S.HomeSupport
              data-aos="fade-right"
              data-aos-delay="1200"
              data-aos-duration="200"
            >
              <Link href={profile ? "/org/pet/register" : "/org/login"}>
                Ou entre como organização, clicando aqui!
              </Link>
            </S.HomeSupport>
          </S.HomeFooterTexts>

          <S.HomeSearch
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration="200"
            onSubmit={handleSubmit(onSubmit)}
          >
            <S.Label>Busque um amigo:</S.Label>
            <S.Selects>
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
                    {...field}
                  />
                )}
              />

              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <DynamicSelect
                    placeholder="Selecione uma cidade..."
                    inputProps={{
                      placeholder: "Busque pelo nome da cidade...",
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
            </S.Selects>

            <IconButton
              icon={<MagnifyingGlass size={24} color="#0D3B66" weight="bold" />}
              disabled={isDisabledSubmitButton}
              type="submit"
            />
          </S.HomeSearch>
        </S.HomeFooter>
      </S.HomeContent>
    </S.HomeContainer>
  );
};
