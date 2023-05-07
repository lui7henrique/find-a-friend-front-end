import { useAuth } from "src/hooks/useAuth";

import * as S from "./styles";

export const OrgPetRegisterTemplate = () => {
  const auth = useAuth();

  return (
    <S.Container>
      <S.Menu></S.Menu>
      <S.Content>
        <S.Main>
          <S.Header></S.Header>
          <S.Form></S.Form>
        </S.Main>
      </S.Content>
    </S.Container>
  );
};
