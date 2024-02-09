import * as S from "./styles";
import logoImg from "../../assets/logo.svg";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
