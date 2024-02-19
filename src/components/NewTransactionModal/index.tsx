import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import * as S from "./styles";

export const NewTransactionModal = () => {
  return (
    <>
      {/* o Dialog.Portal ajuda a tirar o modal desse contexto do header e ficar fora sobrepondo a aplicação */}
      <Dialog.Portal>
        <S.Overlay />

        <S.Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <S.CloseButton>
            <X size={24} />
          </S.CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <button type="submit">Cadastrar</button>
          </form>
        </S.Content>
      </Dialog.Portal>
    </>
  );
};
