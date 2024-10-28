<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo" class="">
        </h1>
        <button class="button" @click="alterarTema" >
            <span>{{textoBotao}} tema claro</span>
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                <router-link to="/" class="link">
                    <i class="fas fa-tasks"></i>
                    tarefas
                </router-link>
                </li>
                <li>
                <router-link to="/projetos" class="link">
                    <i class="fas fa-project-diagram"></i>
                    projetos
                </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data(){
        return ({
            temaClaro: false,  // Por padrão, colocar o tema escuro. Configurado aqui
        })
    },
    computed: {
        textoBotao() : string{
            if (this.temaClaro){
                return "Desativar"
            }else{
                return "Ativar"
            }
        }
    },
    methods: {
        alterarTema(){
            this.temaClaro = !this.temaClaro;
            this.$emit('aoTemaAlterado', this.temaClaro);
        },
    }
})
</script>

<style scoped>
header{
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}
@media only screen and (max-width: 768px) {
    header{
        padding: 2.5rem;
        height: auto;
    }
}
</style>