<template>
  <div>
    <Button label="전송" icon="pi pi-user" />
    <InputText type="text" v-model="value" />
    
    <Button label="토스트메시지 Success" severity="success" @click="showSuccess('Success', '성공!!')" />
    <Button label="토스트메시지 Warn" severity="warn" @click="showWarning('주의!!', '주의하세요')" />
    <Button label="토스트메시지 Error" severity="danger" @click="showError('에러', '에러!!!')" />
  </div>

  <Toast />
</template>

<script setup>
import { ref } from 'vue';
import useToastMessage from '@/hooks/useToastMessage';

const value = ref("");
const { showSuccess, showError, showWarning } = useToastMessage();

</script>

<style scoped>

</style>