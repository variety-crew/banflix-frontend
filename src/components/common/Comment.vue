<template>
  <div class="card">
    <Fieldset>
      <template #legend>
        <div class="profile-container">
          <Avatar :image="Helper.getImageUrl(props.comments.profile)" shape="circle" />
          <span class="nickname">{{ props.comments.nickname }}</span>
        </div>
      </template>
      <div class="comment-content-container">
        <div class="created-at">{{ props.comments.createdAt }}</div>
        <div class="comment-content">{{ props.comments.content }}</div>
      </div>
      <div class="comment-footer">
        <div class="footer-start">
          <i v-if="isWriter" class="pi pi-pencil" @click="handleCommentUpdate(props.comments.commentCode)">
            수정</i
          >
          <i v-if="isWriter" class="pi pi-trash" @click="handleCommentDelete(props.comments.commentCode)">
            삭제</i
          >
          <i v-if="isAdmin" class="pi pi-power-off" @click="handleCommentDeactivate(props.comments.commentCode)">
            비활성화
          </i>
        </div>
        <div class="footer-end">
          <i
            v-if="props.comments"
            class="pi pi-exclamation-triangle"
            @click="handleCommentReport(props.comments.commentCode)"
          >
            신고</i
          >
        </div>
      </div>
    </Fieldset>
  </div>
</template>

<script setup>
import useToastMessage from '@/hooks/useToastMessage';
import { Helper } from '@/utils/Helper';
import { defineProps, onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/user';

const { showSuccess } = useToastMessage();
const props = defineProps({
  comments: {
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

const userStore = useUserStore(); // Pinia 스토어 인스턴스 가져오기
const currentUserNickname = userStore.nickname; // 현재 로그인한 사용자의 닉네임
const currentUserIsAdmin = userStore.isAdmin;

// 댓글 작성자와 현재 사용자의 닉네임 비교
const isWriter = computed(() => props.comments.nickname === currentUserNickname);

const handleCommentUpdate = commentId => {
  // TODO: 댓글 수정
  showSuccess('updated', 'successfully');
};
const handleCommentDelete = commentId => {
  // TODO: 댓글 삭제
  showSuccess('deleted', 'successfully');
};
const handleCommentDeactivate = commentId => {
  // TODO: 댓글 비활성화
  showSuccess('deactivated', 'successfully');
};
const handleCommentReport = commentId => {
  // TODO: 댓글 신고
  showSuccess('reported', 'successfully');
};

onMounted(() => {});
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
  cursor: pointer;
}
</style>
