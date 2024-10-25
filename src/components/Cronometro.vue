<template>
    <section class="display">
        <strong >
            {{ tempoDecorrido }}
        </strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App-Cronometro',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },
    computed: { // Treated as data. It is computed data. Pass it simply the name of the function to get the return value
        tempoDecorrido(): string{
            return new Date(this.tempoEmSegundos*1000).toISOString().substr(11,8);
        }
    },
})
</script>

<style scoped>
.display {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>