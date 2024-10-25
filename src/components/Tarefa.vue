<template>
    <div class="box has-text-weight-bold tarefa">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import type { TTarefa } from '@/types/TTarefa';

export default defineComponent({
    name: 'app-tarefa',
    components: {
        Cronometro
    },
    props: {
        tarefa: {
            type: Object as PropType<TTarefa>,
            required: true
        }
    },
})
</script>

<style scoped>
.tarefa:hover{
  background-color: darkgray;
  color: black;
  transition: 0.5s;
}
/* .box{
    background: #FAF0CA;
} */
</style>