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
	import service from '../utils/axios';
	
	
	export default {
		name: 'Home',
		data() {
			return {
				jsonData: null, // 初始时jsonData为空，等待数据加载
			};
		},
		computed: {
			// 使用计算属性来格式化JSON数据
			formattedJson() {
				return JSON.stringify(this.jsonData, null, 2);
			}
		},
		// 在组件创建后立刻发起请求
		created() {
			this.fetchData();
		},
		methods: {
			// 定义一个方法来获取数据
			fetchData() {
				service.get('/your-api-endpoint') // 替换成你的API端点
					.then(response => {
						this.jsonData = response.data;
					})
					.catch(error => {
						// 请求失败，打印错误信息
						console.error('Error fetching data:', error);
					});
			}
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