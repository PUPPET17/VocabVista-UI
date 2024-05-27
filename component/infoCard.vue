<template>
  <view :class="cardClasses">
    <span class="title">{{ title }}</span>
    <span class="count">{{ count }}</span>
  </view>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
  },
  data() {
    return {
      cardClasses: 'card', // 使用class绑定
    };
  },
};
</script>

<style scoped>
.card {
  flex-direction: column; /* 子项垂直布局 */
  padding: 15px;
}

.title {
  color: #ef4444; /* 红色文本 */
  font-weight: 600; /* 字体加粗 */
  margin-bottom: 4px; /* 下边距 */
}

.count {
  color: #ef4444; /* 红色文本 */
}
</style>