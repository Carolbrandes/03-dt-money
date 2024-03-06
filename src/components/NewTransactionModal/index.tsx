import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import * as S from "./styles";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>();

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("🚀 ~ handleCreateNewTransaction ~ data:", data);
  }

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

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
            />
            <input
              type="number"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register("category")}
            />

           <Controller control={control} name="type" render={({field}) => {
            console.log("🚀 ~ NewTransactionModal ~ field:", field)
            
              return (
                <S.TransactionType value={field.value} onValueChange={field.onChange}>
                <S.TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </S.TransactionTypeButton>
   
                <S.TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </S.TransactionTypeButton>
              </S.TransactionType>
              )
           }} />
           

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </S.Content>
      </Dialog.Portal>
    </>
  );
};
