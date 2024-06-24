<template>
	<div class="container">
		<div class="header">learning data</div>

		<div class="learning-section">
			<div class="section-header">
				<div class="title">Learning</div>
				<button class="btn-change-dict">change dict</button>
			</div>
			<div class="progress-container">
				<div class="progress-bar">
					<div class="progress-bar-fill" style="width: 70%;"></div>
				</div>
				<div class="progress-text">
					<span>Learned 700</span>
					<span>Total 1000</span>
				</div>
			</div>
		</div>

		<div class="achieve-section">
			<div class="section-title">My archieve</div>
			<div class="archive-container"></div>
		</div>
	</div>
</template>

<script>
	import service from '../utils/axios';

	export default {
		name: "Dashboard",
		data() {
			return {
				dictInfo: null
			}
		},
		created() {
			this.getDictInfo()
		},
		methods: {
			getDictInfo() {
				service.get('/word/getDictInfo')
					.then(response => {
						this.dictInfo = response.data;
						console.log('response.data:', response.data)
					})
					.catch(error => {
						console.error('Error fetching data:', error);
					});
			}
		}
	}
</script>

<style>
	.container {
		padding: 16px;
	}

	.header {
		text-align: center;
		font-size: 1.125rem;
		/* Tailwind's lg font size */
		font-weight: 600;
		/* Tailwind's font-semibold */
		margin-bottom: 16px;
		/* Tailwind's mb-4 */
	}

	.learning-section .section-header,
	.achieve-section .section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
		/* Tailwind's mb-2 */
	}

	.title {
		color: black;
	}

	.btn-change-dict {
		background-color: #fee2e2;
		/* Tailwind's bg-red-100 */
		color: #ef4444;
		/* Tailwind's text-red-500 */
		padding: 4px 8px;
		/* Tailwind's px-2 py-1 */
		border-radius: 9999px;
		/* Tailwind's rounded-full */
		font-size: 0.875rem;
		/* Tailwind's text-sm */
	}

	.progress-container {
		background-color: #fef2f2;
		/* Tailwind's bg-red-50 */
		padding: 16px;
		/* Tailwind's p-4 */
		border-radius: 8px;
		/* Tailwind's rounded-lg */
		margin-bottom: 16px;
		/* Tailwind's mb-4 */
	}

	.progress-bar {
		position: relative;
		height: 8px;
		/* Tailwind's h-2 */
		background-color: #fed7d7;
		/* Tailwind's bg-red-200 */
		border-radius: 9999px;
		/* Tailwind's rounded-full */
		margin-bottom: 8px;
		/* Tailwind's mb-2 */
	}

	.progress-bar-fill {
		position: absolute;
		top: 0;
		left: 0;
		height: 8px;
		/* Tailwind's h-2 */
		background-color: #ef4444;
		/* Tailwind's bg-red-500 */
		border-radius: 9999px;
		/* Tailwind's rounded-full */
	}

	.progress-text {
		display: flex;
		justify-content: space-between;
		color: #ef4444;
		/* Tailwind's text-red-500 */
		font-size: 0.875rem;
		/* Tailwind's text-sm */
	}

	.section-title {
		color: black;
		margin-bottom: 8px;
		/* Tailwind's mb-2 */
	}

	.archive-container {
		background-color: #fef2f2;
		/* Tailwind's bg-red-50 */
		padding: 16px;
		/* Tailwind's p-4 */
		border-radius: 8px;
		/* Tailwind's rounded-lg */
		height: 128px;
		/* Tailwind's h-32 */
	}
</style>