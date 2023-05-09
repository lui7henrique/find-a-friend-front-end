import { useRef } from "react";
import { Field } from "../Field";

import * as S from "./styles";
import { FieldImagesProps } from "./types";
import { ButtonRemove } from "../ButtonRemove";

export const FieldImages = (props: FieldImagesProps) => {
  const { images, onChange, onRemove } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Field label="Imagens">
      <S.Container onClick={() => inputRef.current?.click()}>
        <S.UploadIcon size={24} color="#0D3B66" />
        <S.UploadLabel>Arraste e solte o arquivo da imagem.</S.UploadLabel>
        <S.UploadInput
          ref={inputRef}
          type="file"
          accept=".png,.jpeg,.jpg"
          onChange={(e) => {
            console.log({ a: e.target.files });
            e.target.files?.length && onChange(e.target.files[0]);
          }}
        />
      </S.Container>

      {images.map((image) => {
        return (
          <S.Image key={JSON.stringify(image)}>
            <S.ImageInfos>
              <S.ImageIcon size={30} color="#D3E2E5" weight="fill" />
              <S.ImageName>{image.name}</S.ImageName>
            </S.ImageInfos>

            <ButtonRemove onClick={() => onRemove(image)} />
          </S.Image>
        );
      })}
    </Field>
  );
};
