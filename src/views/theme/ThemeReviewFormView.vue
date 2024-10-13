<template>
  <FormPageLayout title="리뷰 작성">
    <Panel header="참여한 테마">
      <div>{{ themeName }}</div>
    </Panel>

    <div>
      <h5>참가 인원</h5>
      <InputNumber v-model="peopleNum" suffix="명" />
    </div>

    <div>
      <h5>소요 시간</h5>
      <InputNumber v-model="time" suffix="분" />
    </div>

    <div>
      <h5>문제 구성</h5>
      <SelectButton v-model="quizQuality" :options="quizQualityOptions" aria-labelledby="문제 구성" />
    </div>

    <div>
      <h5>체감 난이도</h5>
      <SelectButton v-model="level" :options="levelOptions" aria-labelledby="체감 난이도" />
    </div>

    <div>
      <h5>체감 공포도</h5>
      <SelectButton v-model="scary" :options="scaryOptions" aria-labelledby="체감 공포도" />
    </div>

    <div>
      <h5>체감 활동성</h5>
      <SelectButton v-model="activity" :options="activityOptions" aria-labelledby="체감 활동성" />
    </div>

    <div>
      <h5>인테리어</h5>
      <SelectButton v-model="interior" :options="interiorOptions" aria-labelledby="인테리어" />
    </div>

    <div>
      <h5>개연성</h5>
      <SelectButton v-model="probability" :options="probabilityOptions" aria-labelledby="개연성" />
    </div>

    <div>
      <h5>리뷰 내용</h5>
      <Textarea
        v-model="reviewContent"
        auto-resize
        rows="6"
        cols="100"
        placeholder="개성 넘치는 리뷰를 작성해주세요!"
      />
    </div>
  </FormPageLayout>
</template>

<script setup>
import FormPageLayout from '@/components/layouts/FormPageLayout.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Panel from 'primevue/panel';
import InputNumber from 'primevue/inputnumber';
import SelectButton from 'primevue/selectbutton';

const route = useRoute();
const { themeId } = route.params;

const themeName = ref('');
const peopleNum = ref(null);
const time = ref(null);
const quizQuality = ref('');
const quizQualityOptions = ref([
  '문제가 엉성해요',
  '문제가 별로예요',
  '보통이에요',
  '잘 구성되어 있어요',
  '매우 잘 구성되어 있어요',
]);
const level = ref('');
const levelOptions = ref(['아주 쉬워요', '쉬워요', '보통이에요', '어려워요', '아주 어려워요']);
const scary = ref('');
const scaryOptions = ref(['하나도 안무서워요', '안무서워요', '보통이에요', '무서워요', '아주 무서워요']);
const activity = ref('');
const activityOptions = ref([
  '전혀 활동적이지 않아요',
  '활동이 거의 없어요',
  '보통이에요',
  '활동적이에요',
  '매우 활동적이에요',
]);
const interior = ref('');
const interiorOptions = ref([
  '전혀 신경 안 쓴 인테리어예요',
  '아쉬워요',
  '보통이에요',
  '신경을 많이 썼어요',
  '매우 훌륭해요',
]);
const probability = ref('');
const probabilityOptions = ref([
  '전혀 개연성이 없어요',
  '개연성이 아쉬워요',
  '보통이에요',
  '개연성이 있어요',
  '매우 개연성 있어요',
]);
const reviewContent = ref('');

onMounted(() => {
  // TODO:: themeId 테마 정보 조회
  themeName.value = '검은 조직';
});
</script>

<style scoped></style>
