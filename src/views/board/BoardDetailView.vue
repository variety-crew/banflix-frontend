<template>
  <div class="board-detail-container">
    <Card v-if="boardDetail">
      <template #header>
        <div class="card-header-container">
          <div class="start">
            <Avatar :image="boardDetail.profileImage" class="profile-image" size="large" shape="circle" />
            <div class="profile-nickname">{{ boardDetail.writer }}</div>
          </div>
          <div class="end">
            <div class="created-at">{{ boardDetail.createdAt }}</div>
            <i class="pi pi-exclamation-triangle" @click="handleReport"> 신고하기</i>
            <div class="button-overlay">
              <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" />
              <Menu id="overlay_menu" ref="menu" :model="menuItems" :popup="true" />
            </div>
          </div>
        </div>
      </template>
      <template #title>{{ boardDetail.title }}</template>
      <template #content>
        <div class="content-container">
          <div class="content">{{ boardDetail.content }}</div>
          <div class="content-image-container">
            <template v-if="boardDetail.images">
              <template v-for="(image, index) in boardDetail.images" :key="index">
                <img :src="image" alt="보드 이미지" class="content-image" />
              </template>
            </template>
          </div>
        </div>
        <div class="content-footer">
          <div class="like">
            <i class="pi pi-heart"></i>
            <div class="emoji">{{ boardDetail.like }}</div>
          </div>
          <div class="comment">
            <i class="pi pi-comment"></i>
            <div class="emoji">{{ boardDetail.comment }}</div>
          </div>
        </div>
        <Divider type="solid" />
      </template>
      <template #footer>
        <div class="comment-container">
          <Textarea v-model="inputComment" class="input-comment" placeholder="여기에 댓글 작성" />
          <Button class="enter-comment">작성</Button>
        </div>
      </template>
    </Card>

    <template v-else> 게시글이 존재하지 않습니다.</template>
  </div>
  <div>{{ boardDetail }}</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const boardId = ref(route.params.boardId);

const inputComment = ref('');
const menu = ref();
const boardDetail = ref({
  id: boardId,
  profileImage: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
  writer: '닉네임',

  title: '제목',
  content:
    '내용 오늘 다녀온 따끈따끈한 방탈출 리뷰 남겨보겠습니다. 총 인원은...3명이었구요! 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 어쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 어쩌구 ......이러쿵 저러쿵',
  images: [
    'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
    'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
    'https://github.com/user-attachments/assets/04e68ff8-44ad-4b43-b5f0-9fa1c6704842',
  ],
  like: 0,
  comment: 0,
  comments: [],
  createdAt: '오후 8:33',
});

const menuItems = ref([]);

const setMenuItems = () => {
  menuItems.value = [
    {
      items: [
        {
          label: '구독하기',
          icon: 'pi pi-bell',
        },
        {
          label: '수정하기',
          icon: 'pi pi-pencil',
        },
        {
          label: '삭제하기',
          icon: 'pi pi-trash',
        },
      ],
    },
  ];
};

const toggle = event => {
  menu.value.toggle(event);
};
const handleReport = () => {
  console.log('신고하기');
};

onMounted(() => {
  setMenuItems();
});
</script>

<style scoped>
.board-detail-container {
  display: flex;
  justify-content: center;
}
.p-card {
  padding: 30px;
  margin-top: 50px;
  width: 80%;
}

.card-header-container {
  display: flex;
  justify-content: space-between;
}

.start {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profile-image {
  margin-right: 20px;
}

.end {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.created-at {
  margin-right: 20px;
}
.pi-exclamation-triangle {
  margin-right: 20px;
  cursor: pointer;
}

/* content */
.content-container {
  margin-top: 30px;
}

/* content-image */
.content-image-container {
  margin-top: 50px;
}
.content-image {
  width: 100px;
  height: 100px;
  margin-inline: 10px;
}

/* content-footer */
.content-footer {
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

/* comment input */
.comment-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
.input-comment {
  resize: none;
  width: 100%;
  margin-right: 10px;
}
.enter-comment {
  width: 60px;
}
</style>
