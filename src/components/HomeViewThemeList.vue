<template>
  <section class="section-home-view">
    <AppTypography type="title3" color="white" class="mb-l">{{ props.sectionTitle }}</AppTypography>
    <ul>
      <li v-for="(theme, index) in props.themes" :key="theme.themeCode">
        <Tag v-if="props.showOrder" :value="index + 1" class="tag-order"></Tag>
        <ThemeCard :theme="theme" next-page="THEME" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import AppTypography from './AppTypography.vue';
import { defineProps } from 'vue';
import ThemeCard from './cards/ThemeCard.vue';

const props = defineProps({
  sectionTitle: {
    type: String,
    required: true,
  },
  themes: {
    type: Array, // ThemeDTO[]
    required: true,
  },
  showOrder: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped>
.section-home-view {
  padding: 20px;
  background-color: #343a40;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;

    li {
      .tag-order {
        margin-bottom: 10px;
      }
    }
  }

  & + & {
    margin-top: 4px;
  }
}
</style>
