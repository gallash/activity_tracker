import http from "@/http";
import type {TProjeto} from "@/types/TProjeto";
import { Estado } from "@/store";
import { OBTER_PROJETOS, CADASTRAR_PROJETO, ALTERAR_PROJETO, REMOVER_PROJETO } from "@/store/tipo-acoes";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, DEFINIR_PROJETOS } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoProjeto {
  projetos: TProjeto[]
}

export const projeto: Module<EstadoProjeto, Estado> = {
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as TProjeto
      state.projetos.push(projeto)
    },
    [ALTERA_PROJETO](state, projeto: TProjeto) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(proj => proj.id != id)
    },
    [DEFINIR_PROJETOS](state, projetos: TProjeto[]) {
      state.projetos = projetos
    },
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http.get('projetos')
        .then(response => commit(DEFINIR_PROJETOS, response.data))
    },
    [CADASTRAR_PROJETO](contexto, nomeDoProjeto: string) {
      return http.post('/projetos', {
        nome: nomeDoProjeto
      })
    },
    [ALTERAR_PROJETO](contexto, projeto: TProjeto) {
      return http.put(`/projetos/${projeto.id}`, projeto)
    },
    [REMOVER_PROJETO]({ commit }, id: string) {
      return http.delete(`/projetos/${id}`)
        .then(() => commit(EXCLUIR_PROJETO, id))
    },
  },
  getters: {
    projetos (state) {
      return state.projetos
    }
  }
}