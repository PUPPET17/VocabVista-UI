<template>
  <view class="container">
    <view class="header">
      <view class="avatar"></view>
    </view>
    <view class="content" v-if="jsonData">
		<text class="title">Daily Word</text>
		<view class="main-box">
			<!-- 显示单词和音标 -->
			<text style="color: black;">{{ jsonData.word }}&nbsp;{{ jsonData.translation }}</text>
			<text>{{ jsonData.phonetic }}</text>
			<!-- 显示定义 -->
			<text>{{ jsonData.definition }}</text>
		</view>
		<view class="sub-boxes">
		    <info-card class="sub-box" title="Learn" :count="learnCount" />
			<p>&nbsp;&nbsp;&nbsp;</p>
		    <info-card class="sub-box" title="Review" :count="reviewCount" />
		</view>
    </view>
  </view>
</template>

<script>
	import service from '../utils/axios';
	import InfoCard from '../component/infoCard';
	
	export default {
		name: 'Home',
		components: {
		    InfoCard,
		},
		data() {
			return {
				jsonData: null, // 初始时jsonData为空，等待数据加载
				learnCount:1,
				reviewCount:1
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
				service.get('/interest/getInterestWord')
					.then(response => {
						this.jsonData = response.data;
						console.log(response.data)
					})
					.catch(error => {
						// 请求失败，打印错误信息
						console.error('Error fetching data:', error);
					});
			},
			learning(){
				uni.navigateTo({
					url:'/pages/word'
				})
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

.main-box text {
  display: block; /* 使 text 元素成为块级元素 */
  color: #ef4444; /* 红色文本 */
  margin-bottom: 10px; /* 在元素之间添加一些空间 */
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
  border-radius: 22px;
  display: flex; /* 使其成为弹性容器 */
  flex-direction: column; /* 子项垂直布局 */
  padding: 15px; /* 内边距 */
}
</style>