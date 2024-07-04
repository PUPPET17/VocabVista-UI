<template>
  <div v-if="isVisible" class="custom-modal">
    <div class="modal-content">
      <div class="flip-card__front">
        <select class="flip-card__input" name="dictInfo" id="dictInfo-select" style="color: grey" v-model="dictId">
          <option value="" disabled selected>--请选择你想学习的词书--</option>
          <option value="1">CET4</option>
          <option value="2">CET6</option>
          <option value="3">GRE</option>
          <option value="4">IELTS</option>
          <option value="5">TOEFL</option>
        </select>
        <select class="flip-card__input" name="radius" id="radius-select" style="color: grey" v-model="count">
          <option value="" disabled selected>--请选择单次学习的词数--</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        <div class="button-container">
          <button @click="onCancel" class="flip-card__btn">取消更改</button>
          <button @click="onConfirm" class="flip-card__btn">确认更改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '../utils/axios';

export default {
  name: 'LearningStrategyModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dictId: '',
      count: '',
    };
  },
  methods: {
    onConfirm() {
      service.post('/word/setLearningStrategy', {
        dictId: this.dictId,
        radius: this.count
      })
        .then(response => {
          console.log('Learning strategy set successfully', response.data);
          service.post('/word/getWordList')
            .then(response => {
              this.jsonData = response.data;
              localStorage.removeItem('wordData');
              localStorage.setItem('wordData', JSON.stringify(response.data));
              uni.showToast({
                title: '学习策略设置成功',
                icon: 'success',
                duration: 2000,
              });
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        })
        .catch(error => {
          console.error('Error setting learning strategy:', error);
          uni.showToast({
            title: '学习策略设置失败',
            icon: 'none',
            duration: 2000,
          });
        });
      this.$emit('confirm');
    },
    onCancel() {
      this.$emit('cancel');
    },
  },
};
</script>

<style scoped>
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
  width: 300px;
  padding: 20px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 4px 4px #ff3951;
  border: 2px solid #ff3951;

  /* 添加动画效果 */
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
  border: #ff3951;
  background-color: #ff3951;
  box-shadow: 4px 4px #ff3951;
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

.flip-card__front {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.flip-card__input {
  width: 250px;
  height: 40px;
  border-radius: 13px;
  border: 2px solid #ff3951;
  background-color: #fff;
  box-shadow: 4px 4px #ff3951;
  font-size: 15px;
  font-weight: 600;
  padding: 5px 10px;
  outline: none;
}

.flip-card__input::placeholder {
  color: #ffffff;
  opacity: 0.8;
}

.flip-card__input:focus {
  border: 2px solid #2d8cf0;
}

.flip-card__btn:active {
  box-shadow: 0px 0px #FF3951;
  transform: translate(3px, 3px);
}
</style>