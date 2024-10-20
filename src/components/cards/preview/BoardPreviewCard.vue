<template>
  <Card @click="emit('clickBoardPreview')">
    <template #header>
      <div class="card-header-container">
        <div class="card-profile">
          <Avatar :image="Helper.getImageUrl(post.profile)" class="profile-image" size="large" shape="circle" />
          <div class="profile-nickname">{{ post.nickname }}</div>
        </div>
        <div>{{ formatDate(post.createdAt) }}</div>
      </div>
    </template>
    <template #title>{{ post.title }}</template>
    <template #content>
      <p class="m-0">{{ post.content }}</p>
    </template>
    <template #footer>
      <div class="board-footer">
        <div class="like">
          <i class="pi pi-heart"></i>
          <div class="emoji">{{ countLikes.likeCount }}</div>
        </div>
        <div class="comment">
          <i class="pi pi-comment"></i>
          <div class="emoji">{{ countComments.commentCount }}</div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue';
import { $api } from '@/services/api/api';
import { Helper } from '@/utils/Helper';

const props = defineProps({
  post: {
    type: Object,
    Required: true,
  },
});

const countLikes = ref({
  communityPostCode: props.post.communityPostCode,
  likeCount: 0,
});

const countComments = ref({
  communityPostCode: props.post.communityPostCode,
  commentCount: 0,
});

const emit = defineEmits(['clickBoardPreview']);

// createdAt 배열을 "YYYY-MM-DD HH:mm" 형식으로 변환하는 함수
const formatDate = createdAt => {
  if (!createdAt || createdAt.length < 3) return '';
  const [year, month, day, hour, minute] = createdAt;
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
};

const fetchLikeCount = async () => {
  // console.log(props.post.communityPostCode);
  const response = await $api.postLike.getLikeCount(props.post.communityPostCode);
  countLikes.value = response;
};

const fetchCommentCount = async () => {
  const response = await $api.community.getCommentCount(props.post.communityPostCode);
  countComments.value = response;
};

onMounted(() => {
  fetchLikeCount();
  fetchCommentCount();
});
</script>

<style scoped>
.p-card {
  /* Card */
  padding: 20px;
}

.card-header-container {
  display: flex;
  justify-content: space-between;
}
.card-profile {
  display: flex;
}
.profile-image {
  margin-right: 20px;
}
.profile-nickname {
  display: flex;
  align-items: center;
}

.board-footer {
  display: flex;
  justify-content: flex-end;
}

.like {
  display: flex;
  flex-direction: row;
  margin-right: 20px;
}
.comment {
  display: flex;
  flex-direction: row;
}
.emoji {
  margin-left: 5px;
}
</style>
