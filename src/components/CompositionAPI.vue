<script setup lang="ts">
import { reactive } from 'vue';
import Calculadora from '../domain/entity/Calculadora';
const calculadora = reactive(new Calculadora());
</script>
<template>
    <input type="number" v-model="calculadora.a" />
    <input type="number" v-model="calculadora.b" />
    <input type="number" v-model="calculadora.resultado" />
    <button @click="calculadora.somar()">Somar</button>
</template>
<style></style>