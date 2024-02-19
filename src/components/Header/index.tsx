import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          {/* o asChild define o Dialog.Trigger nao crie um botao e aproveite o botao passado como filho */}
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
