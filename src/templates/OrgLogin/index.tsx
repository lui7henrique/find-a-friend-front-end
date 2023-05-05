import { useForm } from "react-hook-form";
import { useMemo, useCallback } from "react";

import { FieldText } from "src/components/FieldText";
import * as S from "./styles";
import { Button } from "src/components/Button";
import { useRouter } from "next/router";
import { OrgLoginBody } from "src/services/api/types";

import { z } from "zod";
import { api } from "src/services/api";

const schema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(8),
});

export const OrgLoginTemplate = () => {
  const { register, watch, handleSubmit } = useForm<OrgLoginBody>();
  const { push } = useRouter();
  const fields = watch();

  const isSubmitButtonEnabled = useMemo(() => {
    const { success } = schema.safeParse(fields);

    return success;
  }, [fields]);

  const onSubmit = useCallback(async (data: OrgLoginBody) => {
    try {
      await api.login(data);
    } catch {}
  }, []);

  return (
    <S.Container>
      <S.Aside>
        <S.Logo src="/assets/logo.svg" width="174" height="45" alt="Logo" />
        <S.DogsWrapper>
          <S.Dogs src="/assets/dogs.svg" fill alt="dogs" />
        </S.DogsWrapper>
      </S.Aside>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Boas-vindas!</S.Title>
        <S.FormFields>
          <FieldText
            label="E-mail"
            placeholder="email@org.com"
            type="email"
            {...register("email")}
          />

          <FieldText
            label="Senha"
            placeholder="*********"
            type="password"
            {...register("password")}
          />
        </S.FormFields>

        <S.Buttons>
          <Button disabled={!isSubmitButtonEnabled}>Entrar</Button>

          <Button variant="secondary" onClick={() => push("/org/register")}>
            Cadastrar minha organização
          </Button>
        </S.Buttons>
      </S.Form>
    </S.Container>
  );
};
