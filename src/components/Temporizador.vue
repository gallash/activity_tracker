<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';

export default defineComponent({
    name: 'app-temporizador',
    components: {
        Cronometro
    },
    emits: ['aoTemporizadorFinalizado'],
    data (){
        return {
            cronometro: 0,
            cronometroRodando: false,
            tempoEmSegundos: 0,
        }
    },
    methods: {
        iniciar(){
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos += 1
            }, 1000)
            this.cronometroRodando = true;
        },
        finalizar(){
            clearInterval(this.cronometro);
            this.cronometroRodando = false;
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    },
})
</script>

<style scoped>
</style>