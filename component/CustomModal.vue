<template>
  <view v-if="isVisible" class="custom-modal">
    <view class="flip-card__front modal-content">
      <text class="modalContent">{{ modalContent }}</text>
      <view class="button-container">
        <button @click="onCancel" class="flip-card__btn">取消</button>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <button @click="onConfirm" class="flip-card__btn">确定</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'CustomModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    modalContent: String
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
.modalContent {
  font-size: 17px;
  font-weight: 600;
  position: flex;
}

.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.modal-content {
  animation: modal-fade-in 0.3s;
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.flip-card__btn {
  margin: 20px 0;
  width: 120px;
  height: 40px;
  border-radius: 13px;
  border: #FF3951;
  background-color: #FF3951;
  box-shadow: 4px 4px #FF3951;
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

.flip-card__front {
  padding: 20px;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  background: #fff;
  gap: 20px;
  border-radius: 13px;
  border: 2px solid #FF3951;
  box-shadow: 4px 4px #FF3951;
  text-align: center;
}

.flip-card__btn:active {
  box-shadow: 0px 0px #FF3951;
  transform: translate(3px, 3px);
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>