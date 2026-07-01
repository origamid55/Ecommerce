import { createContext, useState, useEffect, useContext } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider ({children}) {

    const [itens, setItens] = useState(() => {
        const salvo = localStorage.getItem('carrinho');
        return salvo ? JSON.parse(salvo) : [];
    });

    useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens));
    }, [itens])

    const adicionarAoCarrinho = (produto) => {
        setItens((itensAtuais) => {
            const index = itensAtuais.findIndex((item) => item.id === produto.id);

            if (index === -1) {
                return [...itensAtuais, {...produto, quantidade:1}]
            }

            const novoCarrinho = [...itensAtuais];
            novoCarrinho[index] = {...novoCarrinho[index], quantidade: novoCarrinho[index].quantidade + 1};
            return novoCarrinho;

        });
    };
        return (
            <CarrinhoContext.Provider value={{ itens, adicionarAoCarrinho }}>
                {children}
            </CarrinhoContext.Provider>
        );

    }
export const useCarrinho = () => useContext(CarrinhoContext);




