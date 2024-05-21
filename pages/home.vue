<template>
  <view class="container">
    <view class="header">
      <view class="avatar"></view>
    </view>
    <view class="content">
      <text class="title">Daily Word</text>
      <view class="main-box">
      </view>
      <view class="sub-boxes">
        <view class="sub-box">
          
        </view>
        <view class="sub-box">
          
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Home',
  data(){
  },
  onLoad(){
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  /* 用于头像的占位背景颜色 */
  margin-right: 15px;
}

.title {
  /* Daily Word */
  text-align: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 10%;

  color: #252525;

  mix-blend-mode: normal;

}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  max-height: 60%;
  flex-direction: column;
}

.main-box {
  flex: 1;
  background-color: #ffeded;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 22px;
}

.sub-boxes {
  display: flex;
  justify-content: space-between;
}

.sub-box {
  width: 48%;
  /* 小盒子宽度 */
  background-color: #ffeded;
  /* 小盒子的背景颜色 */
  padding: 10px;
  border-radius: 22px;

}

.footer {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #ddd;
  /* 导航栏的背景颜色 */
}

.nav-item {
  flex: 1;
  text-align: center;
}
</style>