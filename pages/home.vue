<template>
	<view class="container">
		<view class="header">
			<view class="avatar"></view>
		</view>
		<view class="content">
			<text class="title">Daily Word</text>
			<!-- <view class="main-box">
				<text style="color: black;">{{ jsonData.word }}&nbsp;{{ jsonData.translation }}</text>
				<text>{{ jsonData.phonetic }}</text>
				<text>{{ jsonData.definition }}</text>
			</view> -->
			<view class="main-box">
				<text style="color: #ef4444;font-weight: 700;">{{ jsonData.word }}</text>

				<view v-if="jsonData.definitions && jsonData.definitions.length">
					<text style="color: black;">定义:</text>
					<view v-for="(definition, index) in jsonData.definitions" :key="index">
						<text>{{ index + 1 }}. {{ definition.text }} ({{ definition.partOfSpeech }})</text>
					</view>
				</view>

				<view v-if="jsonData.examples && jsonData.examples.length">
					<text style="color: black;">例句:</text>
					<view v-for="(example, index) in jsonData.examples" :key="index">
						<text v-html="formatExample(example.text, jsonData.word)"></text> - <text
							style="font-style: italic;">{{ example.title }}</text>
					</view>
				</view>
			</view>
			<view class="sub-boxes">
				<info-card class="sub-box" title="Learn" :count="learnCount" targetUrl="/pages/word" />
				<info-card class="sub-box" title="Review" :count="reviewCount" targetUrl="/pages/review" />
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
				learnCount: 1,
				reviewCount: 1
			};
		},
		computed: {
			// // 使用计算属性来格式化JSON数据
			// formattedJson() {
			// 	return JSON.stringify(this.jsonData, null, 2);
			// }
		},
		created() {
			// this.fetchData();
			this.getInterestFromWordNik();
			this.getWordList();
		},
		methods: {
			fetchData() {
				service.get('/interest/getInterestWord')
					.then(response => {
						this.jsonData = response.data;
						console.log('response.data:', response.data)
					})
					.catch(error => {
						console.error('Error fetching data:', error);
					});
			},
			getInterestFromWordNik() {
				service.get('/interest/getInterestWordFromWordNik')
					.then(response => {
						this.jsonData = response.data;
						console.log('response.data:', response.data)
					})
					.catch(error => {
						console.error('Error fetching data:', error);
					});
			},
			getWordList() {
				service.post('/word/getWordList')
					.then(response => {
						this.jsonData = response.data;
						localStorage.setItem('wordData', JSON.stringify(response.data));
						console.log('response.data:', response.data)
					})
					.catch(error => {
						console.error('Error fetching data:', error);
					});
			},
			formatExample(exampleText, word) {
				const boldedWord = `<strong><u>${word}</u></strong>`;
				return exampleText.replace(new RegExp(`\\b${word}\\b`, 'gi'), boldedWord);
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
		background-color: #FFEDED;
		margin-bottom: 10px;
		padding: 10px;
		border-radius: 22px;
	}

	.main-box text {
		display: block;
		color: #ef4444;
		margin-bottom: 10px;
	}

	.sub-boxes {
		display: flex;
		justify-content: space-between;
		gap: 5%;
	}

	.sub-box {
		flex: 1;
		background-color: #ffeded;
		border-radius: 22px;
		padding: 15px;
	}
</style>