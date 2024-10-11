<template>
    <div class="container">
        <h1>{{ props.title }}</h1>
        
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.container {
    padding: 32px;
}
</style>