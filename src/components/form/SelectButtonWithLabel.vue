<template>
  <div class="select-button-with-label">
    <label>{{ props.label }}</label>
    <SelectButton
      :model-value="props.selected"
      :options="options"
      option-label="label"
      data-key="value"
      :aria-labelledby="props.label"
      @change="onChange"
    >
      <template #option="slotProps">
        <span>{{ slotProps.option.label }}</span>
      </template>
    </SelectButton>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watchEffect } from 'vue';
import SelectButton from 'primevue/selectbutton';

const props = defineProps({
  optionsKo: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  selected: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['changeValue']);

const map = new Map();
map.set(1, 'ONE');
map.set(2, 'TWO');
map.set(3, 'THREE');
map.set(4, 'FOUR');
map.set(5, 'FIVE');

const makeOptions = labelArr => {
  return labelArr.map((label, index) => ({ label, value: map.get(index + 1) }));
};

const options = ref([]);

watchEffect(() => {
  options.value = makeOptions(props.optionsKo);
});

const onChange = event => {
  emit('changeValue', event.value);
};
</script>

<style scoped>
.select-button-with-label {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }
}
</style>
