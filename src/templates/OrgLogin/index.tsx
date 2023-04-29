import * as S from "./styles";

export const OrgLoginTemplate = () => {
  return (
    <S.Container>
      <S.Aside>
        <S.Logo src="/assets/logo.svg" width="174" height="45" alt="Logo" />
        <S.DogsWrapper>
          <S.Dogs src="/assets/dogs.svg" fill alt="dogs" />
        </S.DogsWrapper>
      </S.Aside>
      <S.Form>
        <S.Title>Boas-vindas!</S.Title>
      </S.Form>
    </S.Container>
  );
};