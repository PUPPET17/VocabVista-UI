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
  display: flex;
  flex-direction: column;
  cursor: pointer; 
  padding: 20px;
}

.title, .count {
  color: #ef4444;
}

.title {
  margin-bottom: 3px; 
  font-weight: 600;
}
</style>