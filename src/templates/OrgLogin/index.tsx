import { FieldText } from "src/components/FieldText";
import * as S from "./styles";
import { Button } from "src/components/Button";
import { useRouter } from "next/router";

export const OrgLoginTemplate = () => {
  const { push } = useRouter();

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
        <S.FormFields>
          <FieldText label="E-mail" placeholder="email@org.com" type="email" />
          <FieldText label="Senha" placeholder="*********" type="password" />
        </S.FormFields>

        <S.Buttons>
          <Button>Entrar</Button>
          <Button variant="secondary" onClick={() => push("/org/register")}>
            Cadastrar minha organização
          </Button>
        </S.Buttons>
      </S.Form>
    </S.Container>
  );
};
