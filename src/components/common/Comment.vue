<template>
  <div class="card">
    <Fieldset>
      <template #legend>
        <div class="profile-container">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
          <span class="nickname">{{ props.comment.writer }}</span>
        </div>
      </template>
      <div class="comment-content-container">
        <div class="created-at">{{ props.comment.createdAt }}</div>
        <div class="comment-content">{{ props.comment.comment }}</div>
      </div>
      <div class="comment-footer">
        <div class="footer-start">
          <i v-if="props.isWriter" class="pi pi-pencil"> 수정</i>
          <i v-if="props.isWriter" class="pi pi-trash"> 삭제</i>
          <i v-if="props.isAdmin" class="pi pi-power-off"> 비활성화</i>
        </div>
        <div class="footer-end">
          <i v-if="comment" class="pi pi-exclamation-triangle"> 신고</i>
        </div>
      </div>
    </Fieldset>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
  isWriter: {
    type: Boolean,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['clickSave']);
</script>

<style scoped>
/* legend profile */
.profile-container {
  display: flex;
  align-items: center;
}
.nickname {
  margin-left: 10px;
}

/* content-container */
.created-at {
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
}

/* footer */
.comment-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
i {
  margin-right: 15px;
}
</style>
