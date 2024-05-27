<template>
  <view class="card" @click="handleCardClick">
    <span class="title">{{ title }}</span>
    <span class="count">{{ count }}</span>
  </view>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
    targetUrl: String // 新增prop，用于接收跳转的目标页面路径
  },
  methods: {
    handleCardClick() {
      // 使用传入的targetUrl进行跳转
      if (this.targetUrl) {
        uni.navigateTo({
          url: this.targetUrl
        });
      } else {
        console.error('No target URL provided');
      }
    }
  }
};
</script>

<style scoped>
.card {
  display: flex; /* 启用 Flexbox 布局 */
  flex-direction: column; /* 设置子项垂直布局 */
  cursor: pointer; /* 添加鼠标手势提醒用户可以点击 */
  padding: 20px;
}

.title, .count {
  color: #ef4444; /* 红色文本 */
}

.title {
  margin-bottom: 3px; /* title 和 count 之间的下边距 */
  font-weight: 600; /* 字体加粗 */
}
</style>