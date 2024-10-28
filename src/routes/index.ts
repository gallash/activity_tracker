import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "@/views/Tarefas.vue";
import Projetos from "@/views/Projetos.vue";
import Lista from "@/views/Projetos/Lista.vue";
import Formulario from "@/views/Projetos/Formulario.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: Formulario
            }
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default roteador;