<template>
  <Card>
    <template #title>Simple Card</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque quas!
      </p>
    </template>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  /** rankUser
   * {
   *  id: number,
   *  nickname: string,
   *  profileUrl: string,
   *  point: number,
   *  genres: string "호러,공포,스릴러"
   * }
   */
  rankUser: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
