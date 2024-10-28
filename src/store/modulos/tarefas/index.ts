import http from "@/http";
import type {TTarefa} from "@/types/TTarefa";
import { Estado } from "@/store";
import { OBTER_TAREFAS, CADASTRAR_TAREFA, ALTERAR_TAREFA } from "@/store/tipo-acoes";
import { DEFINIR_TAREFAS, ADICIONA_TAREFA, ALTERA_TAREFA } from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoTarefa {
  tarefas: TTarefa[]
}

export const tarefa: Module<EstadoTarefa, Estado> = {
  state: {
    tarefas: [],
  },
  mutations: {
    [DEFINIR_TAREFAS](state, tarefas: TTarefa[]) {
      state.tarefas = tarefas
    },
    [ADICIONA_TAREFA](state, tarefa: TTarefa) {
      state.tarefas.push(tarefa)
    },
    [ALTERA_TAREFA](state, tarefa: TTarefa) {
      const index = state.tarefas.findIndex(t => t.id == tarefa.id)
      state.tarefas[index] = tarefa
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }, filtro: string) {
      let url ='tarefas'

      if (filtro) {
        url += '?descricao=' + filtro
      }

      http.get(url)
        .then(response => commit(DEFINIR_TAREFAS, response.data))
    },
    [CADASTRAR_TAREFA]({ commit }, tarefa: TTarefa) {
      return http.post('/tarefas', tarefa)
        .then(resposta => commit(ADICIONA_TAREFA, resposta.data))
    },
    [ALTERAR_TAREFA]({ commit }, tarefa: TTarefa) {
      return http.put(`/tarefas/${tarefa.id}`, tarefa)
        .then(() => commit(ALTERA_TAREFA, tarefa))

    },
  }
}