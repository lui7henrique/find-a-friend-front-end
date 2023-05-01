import { OrgRegisterForm } from "./form";
import * as S from "./styles";

export const OrgRegisterTemplate = () => {
  return (
    <S.Container>
      <S.AsideContainer>
        <S.Aside>
          <S.Logo src="/assets/logo.svg" width="174" height="45" alt="Logo" />
          <S.DogsWrapper>
            <S.Dogs src="/assets/dogs.svg" fill alt="dogs" />
          </S.DogsWrapper>
        </S.Aside>
      </S.AsideContainer>

      <OrgRegisterForm />
    </S.Container>
  );
};
