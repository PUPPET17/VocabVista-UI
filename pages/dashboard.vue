<template>
	<el-container>
		<el-header>
			<div class="header">learning data</div>
		</el-header>
		<el-main>
			<el-card class="box-card">
				<template #header>
					<div class="section-title">My archieve</div>
				</template>
				<div>
					<el-progress :percentage="progress" show-text color="#ef4444"></el-progress>
					<div class="progress-text">
						<span>Learned 700</span>
						<span>Total 1000</span>
					</div>
				</div>

				<div slot="header" class="clearfix">
					<button @click="showModal">Change Dict</button>
				</div>
			</el-card>

			<el-card class="box-card">
				<template #header>
					<div class="section-title">My archieve</div>
				</template>
				<div class="archive-container"></div>
			</el-card>
		</el-main>
	</el-container>
	<learning-strategy-modal :is-visible="modalVisible" @confirm="onConfirm" @cancel="onCancel" />
</template>

<script>
import { ElButton, ElCard, ElContainer, ElHeader, ElMain, ElProgress } from 'element-plus';
import LearningStrategyModal from '../component/LearningStrategyModal.vue';

export default {
	name: "Dashboard",
	components: {
		ElButton,
		ElCard,
		ElContainer,
		ElHeader,
		ElMain,
		ElProgress,
		LearningStrategyModal,
	},
	data() {
		return {
			progress: 70,
			modalVisible: false,
			dictId: 0,
			count: 0,
		};
	},
	methods: {
		showModal() {
			this.modalVisible = true;
		},
		onConfirm(data) {
			// 关闭弹窗
			this.modalVisible = false;
		},
		onCancel() {
			this.modalVisible = false;
		}
	},
};
</script>

<style scoped>
.el-header,
.el-main {
	padding: 16px;
	background-color: var(--color-white, #ffffff);
	border-radius: 0.5rem;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
	color: var(--color-dark, #111827);
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
}

.archive-container {
	height: 12px;
}

.progress-text,
.section-title {
	position: relative;
	display: flex;
	font-size: 15px;
	padding-top: 1px;
	margin-top: 5px;
}

.section-title {
	font-weight: bold;
	text-align: left;
}

/* Adjustments for the progress bar to match the overall theme */
.el-progress-bar__outer {
	background-color: #f5f5f5;
}

.el-progress-bar__inner {
	background-color: #FFEDED;
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
	position: center;
	overflow: hidden;
	border: 2px solid var(--color);
	transition: color .5s;
	z-index: 1;
	font-size: 15px;
	border-radius: 6px;
	font-weight: 500;
	color: var(--color);
}

button:before {
	content: "";
	position: absolute;
	z-index: -2;
	background: var(--color);
	height: 150px;
	width: 200px;
	border-radius: 50%;
}

button:hover {
	color: #fff;
}

button:before {
	top: 100%;
	left: 100%;
	transition: all .7s;
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