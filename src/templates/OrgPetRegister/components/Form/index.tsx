import { useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";

import { FieldText } from "src/components/FieldText";
import { FieldTextArea } from "src/components/FieldTextArea";
import { DynamicSelect } from "src/components/FieldSelect";
import { SelectProps } from "src/components/FieldSelect/types";
import { Button } from "src/components/Button";
import { ButtonRemove } from "src/components/ButtonRemove";
import { FieldImages } from "src/components/FieldImages";

import { ageOptions } from "src/utils/ages";
import { levelOptions } from "src/utils/level";
import { sizeOptions } from "src/utils/size";

import { RegisterPetSchema, registerPetSchema } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";

import { theme } from "src/styles/theme";
import * as S from "./styles";
import { api } from "src/services/api";
import { typeOptions } from "src/utils/type";

const defaultSelectProps: Omit<SelectProps, "placeholder"> = {
  triggerProps: {
    variant: "input",
  },
};

const {
  colors: {
    red500: { value: red },
  },
} = theme;

export const OrgRegisterTemplateForm = () => {
  const [images, setImages] = useState<Array<File>>([]);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<RegisterPetSchema>({
    resolver: zodResolver(registerPetSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "requirements",
  });

  const handleChangeImage = (image: File) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  const handleRemoveImage = (image: File) => {
    setImages((prevImages) => [...prevImages.filter((i) => i !== image)]);
  };

  const onSubmit = async (data: RegisterPetSchema) => {
    await api.registerPet({
      ...data,
      age: Number(data.age),
    });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormTitle>Adicione um pet</S.FormTitle>
      <S.FormDivider />

      <S.FormFields>
        <FieldText
          label="Nome"
          placeholder="Digite o nome do animal"
          error={errors.name}
          {...register("name")}
        />

        <FieldTextArea
          label="Descrição"
          placeholder="Escreva uma breve descrição sobre o animal"
          maxLength={300}
          error={errors.description}
          {...register("description")}
        />

        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <DynamicSelect
              label="Idade"
              placeholder="Selecione a idade"
              groups={[
                {
                  group: `Idades (0-30)`,
                  options: ageOptions,
                },
              ]}
              error={errors.age}
              {...field}
              {...defaultSelectProps}
            />
          )}
        />

        <Controller
          control={control}
          name="size"
          render={({ field }) => (
            <DynamicSelect
              label="Tamanho"
              placeholder="Selecione o tamanho"
              groups={[
                {
                  group: "Tamanho",
                  options: sizeOptions,
                },
              ]}
              error={errors.size}
              {...field}
              {...defaultSelectProps}
            />
          )}
        />

        <Controller
          control={control}
          name="independency_level"
          render={({ field }) => (
            <DynamicSelect
              label="Nível de independência"
              placeholder="Selecione o nível de independência"
              groups={[
                {
                  group: "Nível de independência",
                  options: levelOptions,
                },
              ]}
              error={errors.independency_level}
              {...field}
              {...defaultSelectProps}
            />
          )}
        />

        <Controller
          control={control}
          name="energy_level"
          render={({ field }) => (
            <DynamicSelect
              label="Nível de energia"
              placeholder="Selecione o nível de energia"
              groups={[
                {
                  group: "Nível de energia",
                  options: levelOptions,
                },
              ]}
              error={errors.energy_level}
              {...field}
              {...defaultSelectProps}
            />
          )}
        />

        <Controller
          control={control}
          name="ambient"
          render={({ field }) => (
            <DynamicSelect
              label="Ambiente"
              placeholder="Selecione o tamanho do ambiente"
              groups={[
                {
                  group: "Tamanho do ambiente",
                  options: sizeOptions,
                },
              ]}
              error={errors.ambient}
              {...field}
              {...defaultSelectProps}
            />
          )}
        />

        <Controller
          control={control}
          name="type"
          render={({ field }) => (
            <DynamicSelect
              label="Tipo"
              placeholder="Selecione o tipo do animal"
              groups={[
                {
                  group: "Tipo do animal",
                  options: typeOptions,
                },
              ]}
              error={errors.type}
              {...field}
              {...defaultSelectProps}
            />
          )}
        />

        <FieldImages
          onChange={handleChangeImage}
          onRemove={handleRemoveImage}
          images={images}
        />
      </S.FormFields>

      <S.FormTitle>Requisitos para adoção</S.FormTitle>
      <S.FormDivider />

      <S.FormFields>
        {fields.map((field, index) => {
          const error = errors?.requirements?.[index]?.value;

          return (
            <FieldText
              label={index === 0 ? "Requisito" : undefined}
              placeholder="Defina um requisito"
              key={field.id}
              rightElement={<ButtonRemove onClick={() => remove(index)} />}
              error={error}
              {...register(`requirements.${index}.value`)}
            />
          );
        })}

        <S.FormAddMoreButton onClick={() => append({ value: "" })}>
          <S.FormAddMoreButtonIcon weight="bold" color={red} size={20} />
        </S.FormAddMoreButton>

        <Button variant="tertiary" type="submit" loading={isSubmitting}>
          Confirmar
        </Button>
      </S.FormFields>
    </S.Form>
  );
};
