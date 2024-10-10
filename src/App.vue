<template>
  <div>
    <Button label="전송" icon="pi pi-user" />
    <InputText type="text" v-model="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref("");
</script>

<style scoped>

</style>