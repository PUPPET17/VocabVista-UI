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
					<el-button @click="setLearningStrategy" type="primary" size="small" class="btn-change-dict" round plain>
						换本词书
					</el-button>
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
</template>

<script>
import { ElButton, ElCard, ElContainer, ElHeader, ElMain, ElProgress } from 'element-plus';

export default {
	name: "Dashboard",
	components: {
		ElButton,
		ElCard,
		ElContainer,
		ElHeader,
		ElMain,
		ElProgress,
	},
	data() {
		return {
			dictInfo: null,
			progress: 70,
		};
	},
	methods: {
		setLearningStrategy(){

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

.btn-change-dict {
	margin-bottom: 3px;
	float: right;
	background-color: #ef4444;
	color: #ffffff;
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
</style>