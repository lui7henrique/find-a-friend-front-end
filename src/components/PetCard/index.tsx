import { Pet } from "src/services/api/types";
import { ReactNode, useMemo } from "react";

import * as S from "./styles";
import { Cat, Dog } from "phosphor-react";
import { Type } from "src/utils/type";

type PetCardProps = {
  pet: Pet;
};

export const PetCard = (props: PetCardProps) => {
  const {
    pet: { name, type },
  } = props;

  const iconByType = useMemo(() => {
    const icons: Record<Type, ReactNode> = {
      CAT: <Cat color="#fff" size={32} weight="fill" />,
      DOG: <Dog color="#fff" size={32} weight="fill" />,
    };

    return icons[type];
  }, [type]);

  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image
          src={`https://source.unsplash.com/random/128$0x720/?dog`}
          fill
          alt={name}
        />
      </S.ImageContainer>

      <S.Body>
        <S.IconContainer>{iconByType}</S.IconContainer>
        <S.Name>{name}</S.Name>
      </S.Body>
    </S.Card>
  );
};
