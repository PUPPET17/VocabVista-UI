<template>
	<div class="container">
		<header class="header">
			<div>learning data</div>
		</header>
		<main class="main">
			<div class="box-card">
				<div class="section-title">My archive</div>
				<div>
					<div class="progress-bar">
						<div class="progress" :style="{ width: computedProgress + '%' }"></div>
					</div>
					<div class="progress-text">
						<span>Learned</br> {{ learned }}</span>
						<span>Total</br> {{ Total }}</span>
					</div>
				</div>
				<div class="clearfix">
					<button @click="showModal">Change Dict</button>
				</div>
			</div>
			<div class="box-card">
				<div class="section-title">My archive</div>
				<div class="archive-container">
					待开发
				</div>
			</div>
		</main>
		<learning-strategy-modal :is-visible="modalVisible" @confirm="onConfirm" @cancel="onCancel" />
	</div>
</template>

<script>
import LearningStrategyModal from '../component/LearningStrategyModal.vue';
import service from '../utils/axios';
import {localStorage} from '@system.storage'

export default {
	name: "Dashboard",
	components: {
		LearningStrategyModal,
	},
	data() {
		return {
			modalVisible: false,
			dictId: 0,
			count: 0,
			learned: localStorage.getItem('learnCount'),
			Total: JSON.parse(localStorage.getItem('dictInfo'))[JSON.parse(localStorage.getItem('wordData'))[0].dictId].diceSize
		};
	},
	computed: {
		computedProgress() {
			const a = localStorage.getItem('learnCount') /
				JSON.parse(localStorage.getItem('dictInfo'))[JSON.parse(localStorage.getItem('wordData'))[0].dictId].diceSize * 100;
			return a.toFixed(2);
		}
	},
	methods: {
		showModal() {
			this.modalVisible = true;
		},
		onConfirm(data) {
			// 关闭弹窗
			this.modalVisible = false;
			this.getBasicInfo();
			setTimeout(() => {
				location.reload();
			}, 200);
		},
		onCancel() {
			this.modalVisible = false;
		},
		getBasicInfo() {
			service.post('/basic/getBasicInfo')
				.then(response => {
					this.learnCount = response.data.remainCount;
					this.reviewCount = response.data.tobeReviewedCount;
					localStorage.removeItem('learnCount');
					localStorage.setItem('learnCount', this.learnCount);
				})
				.catch(error => {
					console.error('Error fetching data:', error);
				});
		},
	},
};
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

.header,
.main {
	padding: 16px;
	background-color: #ffffff;
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
	color: #111827;
}

.header {
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 40px;
}

.box-card {
	margin-bottom: 20px;
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
	padding: 16px;
}

.archive-container {
	height: 12px;
}

.progress-bar {
	width: 100%;
	background-color: #f5f5f5;
	border-radius: 6px;
	overflow: hidden;
	margin-top: 10px;
}

.progress {
	height: 24px;
	background-color: #ef4444;
}

.progress-text,
.section-title {
	position: relative;
	display: flex;
	justify-content: space-between;
	font-size: 15px;
	padding-top: 1px;
	margin-top: 5px;
}

.section-title {
	font-weight: bold;
	text-align: left;
}

button {
	--color: #ef4444;
	background-color: #ffffff;
	font-family: inherit;
	display: inline-flex;
	width: 8em;
	height: 2em;
	line-height: 1.9em;
	margin: 7px;
	overflow: hidden;
	border: 2px solid var(--color);
	transition: color .5s;
	z-index: 1;
	font-size: 15px;
	border-radius: 6px;
	font-weight: 500;
	color: var(--color);
	position: relative;
}

button:before {
	content: "";
	position: absolute;
	z-index: -2;
	background: var(--color);
	height: 150px;
	width: 200px;
	border-radius: 50%;
	transition: all .7s;
	top: 100%;
	left: 100%;
}

button:hover {
	color: #fff;
}

button:hover:before {
	top: -30px;
	left: -30px;
}

button:active:before {
	background: #ef4444;
	transition: background 0s;
}
</style>