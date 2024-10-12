<template>
  <FormPageLayout title="커뮤니티 글 등록" @click-save="saveBoard">
    <div class="title-container">
      <label for="title">제목</label>
      <InputText v-model="inputTitle" class="title" type="text" placeholder="제목을 입력해주세요." />
    </div>
    <div class="content-container">
      <label for="content">내용</label>
      <Textarea
        v-model="inputContent"
        class="content"
        rows="5"
        cols="30"
        placeholder="내용을 입력해주세요. &#10;스포일러에 대한 내용을 작성할 경우 법적으로 조치가 들어갈 수 있습니다."
      />
    </div>
  </FormPageLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FormPageLayout from '@/components/layouts/FormPageLayout.vue';
import useToastMessage from '@/hooks/useToastMessage';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { useRouter } from 'vue-router';

const router = useRouter();
const inputTitle = ref('');
const inputContent = ref('');

const { showSuccess, showError, showWarning } = useToastMessage();
const saveBoard = () => {
  console.log('inputTitle.value: ', inputTitle);
  console.log('inputContent.value: ', inputContent);
  showSuccess('작성완료!', '성공적으로 게시글이 등록되었습니다.');
  router.push('/board');
};

onMounted(() => {
  console.log('mounted');
});
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  margin-top: 10px;
}
.content-container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.content {
  width: 100%;
  margin-top: 10px;
  resize: none;
}
</style>
