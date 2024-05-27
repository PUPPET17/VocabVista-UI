<template>
	<div class="card">
		<word-header></word-header>
		<div class="content">
			<h1 class="word">regent</h1>
			<p class="phonetic">/ˈrējənt/</p>
			<p class="tip">先回想词义再选择，想不起来看答案</p>
		</div>
		<div class="answers">
			<div class="answer">n. 摄政者, 摄政王</div>
			<div class="answer">a. 摄政的</div>
			<div class="answer">a. 偏离正路的, 偏离常轨的, 时变的</div>
			<div class="answer">n. 离开正路, 偏离, 时变, 光行差, 心理失常, 色差</div>
		</div>
	</div>
</template>

<script>
	import WordHeader from '../component/wordHeader.vue';

	export default {
		name: 'FullPage',
		components: {
			WordHeader,
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.card {
		max-width: 28rem;
		margin: auto;
		padding: 16px;
		background-color: var(--color-white, #ffffff);
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
		color: var(--color-dark, #111827);
	}

	.content {
		margin-bottom: 16px;
	}

	.word {
		font-size: 24px;
		font-weight: bold;
	}

	.phonetic {
		font-size: 18px;
	}

	.tip {
		font-size: 14px;
	}

	.answers {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.answer {
		padding: 16px;
		background-color: var(--color-light-red, #fee2e2);
		border-radius: 18px;
	}

	/* Dark mode styles */
	.dark .card {
		background-color: var(--color-dark-bg, #27272a);
	}

	.dark .icon-btn,
	.dark .page {
		color: var(--color-light-gray, #d1d5db);
	}

	.dark .word,
	.dark .phonetic,
	.dark .tip {
		color: var(--color-white, #f9fafb);
	}

	.dark .answer {
		background-color: var(--color-red, #fecaca);
	}
</style>