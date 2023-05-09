import { FieldText } from "src/components/FieldText";
import * as S from "./styles";
import { FieldTextArea } from "src/components/FieldTextArea";
import { DynamicSelect } from "src/components/FieldSelect";
import { SelectProps } from "src/components/FieldSelect/types";
import { ageOptions } from "src/utils/ages";
import { levelOptions } from "src/utils/level";
import { sizeOptions } from "src/utils/size";
import { FieldImages } from "src/components/FieldImages";
import { use, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { RegisterPetSchema } from "./schema";
import { theme } from "src/styles/theme";

const defaultSelectProps: Omit<SelectProps, "placeholder"> = {
  triggerProps: {
    variant: "input",
  },
};

export const OrgRegisterTemplateForm = () => {
  const [images, setImages] = useState<Array<File>>([]);

  const { control, handleSubmit } = useForm<RegisterPetSchema>();
  const { fields, append } = useFieldArray({ control, name: "requirements" });

  const {
    colors: {
      red500: { value: red },
    },
  } = theme;

  const handleChange = (image: File) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  const handleRemoveImage = (image: File) => {
    setImages((prevImages) => [...prevImages.filter((i) => i !== image)]);
  };

  const onSubmit = (data: RegisterPetSchema) => {
    console.log({ data });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormTitle>Adicione um pet</S.FormTitle>
      <S.FormDivider />

      <S.FormFields>
        <FieldText label="Nome" placeholder="Digite o nome do animal" />
        <FieldTextArea
          label="Sobre"
          placeholder="Escreva uma breve descrição sobre o animal"
          maxLength={300}
        />

        <DynamicSelect
          label="Idade"
          placeholder="Selecione a idade"
          groups={[
            {
              group: `Idades (0-30)`,
              options: ageOptions,
            },
          ]}
          {...defaultSelectProps}
        />

        <DynamicSelect
          label="Tamanho"
          placeholder="Selecione o tamanho"
          groups={[
            {
              group: "Tamanho",
              options: sizeOptions,
            },
          ]}
          {...defaultSelectProps}
        />

        <DynamicSelect
          label="Nível de independência"
          placeholder="Selecione o nível de independência"
          groups={[
            {
              group: "Nível de independência",
              options: sizeOptions,
            },
          ]}
          {...defaultSelectProps}
        />

        <DynamicSelect
          label="Nível de energia"
          placeholder="Selecione o nível de energia"
          groups={[
            {
              group: "Nível de energia",
              options: levelOptions,
            },
          ]}
          {...defaultSelectProps}
        />

        <FieldImages
          onChange={handleChange}
          onRemove={handleRemoveImage}
          images={images}
        />
      </S.FormFields>

      <S.FormTitle>Requisitos para adoção</S.FormTitle>
      <S.FormDivider />

      <S.FormFields>
        {fields.map((field, index) => {
          return (
            <FieldText
              label={index === 0 ? "Requisito" : undefined}
              placeholder="Defina um requisito"
              key={field.id}
            />
          );
        })}

        <S.FormAddMoreButton onClick={() => append({ requirement: "" })}>
          <S.FormAddMoreButtonIcon weight="bold" color={red} size={24} />
        </S.FormAddMoreButton>
      </S.FormFields>
    </S.Form>
  );
};
