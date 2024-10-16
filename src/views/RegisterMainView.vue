<template>
  <div class="signup-container">
    <div class="signup-box">
      <h2>회원가입</h2>

      <!-- 아이디 입력 및 중복 확인 -->
      <div class="input-group">
        <label for="id">아이디</label>
        <InputGroup>
          <InputText v-model="id" placeholder="아이디를 입력해주세요" />
          <Button label="중복확인" />
        </InputGroup>
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <InputGroup>
          <InputText v-model="group" placeholder="비밀번호를 입력해주세요" />
        </InputGroup>
      </div>

      <div class="input-group">
        <label for="checkPassword">비밀번호 확인</label>
        <InputGroup>
          <InputText v-model="checkPassword" :invalid="!checkPassword" placeholder="비밀번호를 입력해주세요" />
        </InputGroup>
      </div>

      <div class="input-group">
        <label for="email">이메일</label>
        <InputGroup>
          <InputText v-model="email" placeholder="이메일을 입력해주세요" />
          <Button label="중복확인" />
        </InputGroup>
      </div>

      <div class="input-group">
        <label for="nickname">닉네임</label>
        <InputGroup>
          <InputText v-model="nickname" placeholder="닉네임을 입력해주세요" />
          <Button label="중복확인" />
        </InputGroup>
      </div>

      <!-- 프로필 사진 업로드 -->
      <div class="input-group">
        <label for="profileImage">프로필 사진</label>
        <FileUpload
          name="profilePicture"
          url="./upload"
          accept="image/*"
          mode="basic"
          auto
          choose-label="프로필 사진 업로드"
        />
      </div>

      <!-- 제출 버튼 -->
      <Button label="회원가입" @click="submitForm" />
    </div>
  </div>
</template>

<script></script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.signup-box {
  width: 350px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.p-fileupload-content {
  width: 100%;
}
</style>
