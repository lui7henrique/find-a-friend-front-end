import { useAuth } from "src/hooks/useAuth";

import * as S from "./styles";
import { OrgPetRegisterTemplateHeader } from "./components/Header";
import { OrgRegisterTemplateForm } from "./components/Form";
import { BasicLogo } from "src/components/BasicLogo";

export const OrgPetRegisterTemplate = () => {
  const auth = useAuth();

  return (
    <S.Container>
      <S.Menu>
        <BasicLogo />
      </S.Menu>

      <S.Content>
        <S.Main>
          <OrgPetRegisterTemplateHeader />
          <OrgRegisterTemplateForm />
        </S.Main>
      </S.Content>
    </S.Container>
  );
};
