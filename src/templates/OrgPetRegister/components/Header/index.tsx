import { useAuth } from "src/hooks/useAuth";
import * as S from "./styles";
import { useProfile } from "src/hooks/useProfile";

export const OrgPetRegisterTemplateHeader = () => {
  const { profile } = useProfile();
  const { logout } = useAuth();

  if (!profile) {
    return <h1>?</h1>;
  }

  const { address, number, neighborhood, city, state, responsible_name } =
    profile;
  const addressString = `${address}, ${number}, ${neighborhood}, ${city}, ${state}`;

  return (
    <S.Header>
      <S.HeaderOrg>
        <S.HeaderIconContainer>
          <S.HeaderIcon size={30} weight="fill" color="#fff" />
        </S.HeaderIconContainer>
        <S.HeaderOrgInfos>
          <S.HeaderOrgTitle>{responsible_name}</S.HeaderOrgTitle>
          <S.HeaderOrgAddress>{addressString}</S.HeaderOrgAddress>
        </S.HeaderOrgInfos>
      </S.HeaderOrg>

      <S.HeaderLogoutIconContainer onClick={logout}>
        <S.HeaderLogoutIcon color="#fff" size={30}></S.HeaderLogoutIcon>
      </S.HeaderLogoutIconContainer>
    </S.Header>
  );
};
