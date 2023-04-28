import { FormProvider, useForm } from "react-hook-form";

import * as S from "./styles";
import { PetsFilters } from "./filters";
import { PetsList } from "./list";

export const PetsTemplates = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <S.Container>
        <PetsFilters />
        <PetsList />
      </S.Container>
    </FormProvider>
  );
};
