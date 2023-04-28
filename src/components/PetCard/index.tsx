import { Pet } from "src/services/api/types";

import * as S from "./styles";
import { Cat, Dog, PawPrint } from "phosphor-react";

type PetCardProps = {
  pet: Pet;
};

export const PetCard = (props: PetCardProps) => {
  const {
    pet: { name },
  } = props;

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image
          src={`https://source.unsplash.com/random/128${randomIntFromInterval(
            0,
            9
          )}x72${randomIntFromInterval(0, 9)}/?dog`}
          fill
          alt={name}
        />
      </S.ImageContainer>

      <S.Body>
        <S.IconContainer>
          <Dog color="#fff" size={32} weight="fill" />
        </S.IconContainer>
        <S.Name>{name}</S.Name>
      </S.Body>
    </S.Card>
  );
};
