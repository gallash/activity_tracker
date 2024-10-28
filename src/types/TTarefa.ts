import { TProjeto } from "./TProjeto";

export type TTarefa = {
    duracaoEmSegundos: number;
    descricao: string;
    projeto: TProjeto;
    id: number
};