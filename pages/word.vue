<template>
	<div class="card">
		<div class="header">
			<div class="left-group">
				<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"
					@click="returnToHome">
					<path d="M11 2.115L8.90688 0L0 9L8.90688 18L11 15.885L4.20108 9L11 2.115Z" fill="#9094B8" />
				</svg><!-- 返回 -->
				<span class="page">{{ paginationInfo }}</span>
			</div>
			<div class="icon-group">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M9.40217 2.87776C9.59424 2.48864 9.69028 2.29408 9.82065 2.23192C9.93408 2.17784 10.0659 2.17784 10.1793 2.23192C10.3097 2.29408 10.4057 2.48864 10.5978 2.87776L12.42 6.5694C12.4767 6.68427 12.5051 6.74171 12.5465 6.78631C12.5832 6.82579 12.6272 6.85779 12.6761 6.88051C12.7313 6.90618 12.7946 6.91544 12.9214 6.93397L16.9975 7.52975C17.4267 7.59249 17.6413 7.62386 17.7406 7.72869C17.827 7.8199 17.8677 7.94524 17.8512 8.06981C17.8323 8.21298 17.6769 8.36431 17.3662 8.66698L14.4178 11.5387C14.3259 11.6282 14.28 11.673 14.2503 11.7262C14.2241 11.7734 14.2072 11.8252 14.2007 11.8787C14.1934 11.9393 14.2042 12.0025 14.2259 12.1289L14.9216 16.1851C14.995 16.6129 15.0317 16.8268 14.9627 16.9537C14.9027 17.0642 14.7961 17.1416 14.6725 17.1646C14.5305 17.1909 14.3384 17.0899 13.9542 16.8878L10.3103 14.9715C10.1967 14.9118 10.14 14.882 10.0802 14.8702C10.0272 14.8598 9.97274 14.8598 9.91979 14.8702C9.85998 14.882 9.80321 14.9118 9.68967 14.9715L6.04573 16.8878C5.66156 17.0899 5.46947 17.1909 5.32744 17.1646C5.20386 17.1416 5.09723 17.0642 5.03724 16.9537C4.96829 16.8268 5.00498 16.6129 5.07835 16.1851L5.77403 12.1289C5.79572 12.0025 5.80656 11.9393 5.79923 11.8787C5.79273 11.8252 5.77589 11.7734 5.74963 11.7262C5.71998 11.673 5.67402 11.6282 5.58211 11.5387L2.63376 8.66698C2.32301 8.36431 2.16764 8.21298 2.14873 8.06981C2.13228 7.94524 2.17292 7.8199 2.25933 7.72869C2.35866 7.62386 2.57327 7.59249 3.0025 7.52975L7.07855 6.93397C7.20531 6.91544 7.26869 6.90618 7.32389 6.88051C7.37276 6.85779 7.41676 6.82579 7.45345 6.78631C7.49488 6.74171 7.52323 6.68427 7.57994 6.5694L9.40217 2.87776Z"
						stroke="#9094B8" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
				</svg><!-- 收藏 -->
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.0834 5H2.91669M15.6942 7.08333L15.3109 12.8333C15.1634 15.045 15.09 16.1508 14.3692 16.825C13.6484 17.5 12.5392 17.5 10.3225 17.5H9.67752C7.46085 17.5 6.35169 17.5 5.63085 16.825C4.91002 16.1508 4.83585 15.045 4.68919 12.8333L4.30585 7.08333M7.91669 9.16667L8.33335 13.3333M12.0834 9.16667L11.6667 13.3333"
						stroke="#9094B8" stroke-width="1.5" stroke-linecap="round" />
					<path
						d="M5.41669 5H5.50835C5.84373 4.99143 6.1687 4.88185 6.44079 4.68559C6.71287 4.48934 6.9194 4.21553 7.03335 3.9L7.06169 3.81417L7.14252 3.57167C7.21169 3.36417 7.24669 3.26083 7.29252 3.1725C7.38269 2.99949 7.51211 2.84999 7.67042 2.73597C7.82872 2.62194 8.01152 2.54655 8.20419 2.51583C8.30169 2.5 8.41085 2.5 8.62919 2.5H11.3709C11.5892 2.5 11.6984 2.5 11.7959 2.51583C11.9885 2.54655 12.1713 2.62194 12.3296 2.73597C12.4879 2.84999 12.6173 2.99949 12.7075 3.1725C12.7534 3.26083 12.7884 3.36417 12.8575 3.57167L12.9384 3.81417C13.044 4.16523 13.2624 4.47167 13.5598 4.68605C13.8571 4.90043 14.2169 5.01077 14.5834 5"
						stroke="#9094B8" stroke-width="1.5" />
				</svg><!-- 删除 -->
			</div>
		</div>
		<div class="card-body">
			<div class="content">
				<h1 class="word">{{ currentWord.word }}</h1>
				<p class="phonetic">/{{ currentWord.phonetic }}/</p>
				<p class="tip">先回想词义再选择，想不起来看答案</p>
			</div>
			<div class="answers">
				<div class="answer">
					<h5>Translation</h5>
					<span v-for="(line, index) in translationLines" :key="index">
						{{ line }}<br>
					</span>
				</div>
				<div class="answer">
					<h5>Definition</h5>
					<span v-for="(line, index) in definitionLines" :key="index">
						{{ line }}<br>
					</span>
				</div>
			</div>
		</div>
	</div>
	<div class="pagination-buttons">
		<button @click="prevWord">上一个单词</button>
		<button @click="nextWord">下一个单词</button>
	</div>
</template>

<script>

export default {
	name: 'FullPage',
	components: {
	},
	data() {
		return {
			// 初始化单词数据数组
			wordData: JSON.parse(localStorage.getItem('wordData') || '[]'),
			// 当前单词的索引
			currentIndex: 0
		};
	},
	computed: {
		// 计算属性用于根据当前索引获取当前单词
		currentWord() {
			return this.wordData[this.currentIndex];
		},
		definitionLines() {
			// 确保 currentWord.definition 存在，并将其分割成数组
			return this.currentWord.definition ? this.currentWord.definition.split('\\n') : [];
		},
		translationLines() {
			return this.currentWord.translation ? this.currentWord.translation.split('\\n') : [];
		},
		paginationInfo() {
			const currentPage = this.currentIndex + 1;
			const totalPages = this.wordData.length;
			return `${currentPage}/${totalPages}`;
		},
	},
	methods: {
		// 切换到下一个单词
		nextWord() {
			if (this.currentIndex < this.wordData.length - 1) {
				this.currentIndex++;
			}
		},
		// 切换到上一个单词
		prevWord() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			}
		},
		returnToHome() {
			uni.switchTab({
				url: '/pages/home'
			})
		}
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

.card-body {
    padding-left: 16px; 
    padding-right: 16px;
}

.content {
	margin-bottom: 20px;
}

.word {
	margin-left: 16px;
	font-size: 24px;
	font-weight: bold;
}

.phonetic {
	margin-left: 16px;
	font-size: 18px;
}

.tip {
	margin-left: 16px;
	font-size: 14px;
}

.answers {
	display: flex;
	flex-direction: column;
	gap: 20px;
	white-space: pre-line;
}

.answer {
	padding: 16px;
	background-color: var(--color-light-red, #fee2e2);
	border-radius: 18px;
	white-space: pre-line;
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

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
}

.left-group {
	margin-left: 16px;
	display: flex;
	align-items: center;
}

.icon-btn {
	color: var(--color-gray, #6b7280);
	background: none;
	border: none;
	padding: 0;
}

.page {
	color: var(--color-gray, #6b7280);
	margin-left: 8px;
}

.icon-group {
	display: flex;
	margin-right: 16px;
	margin-left: 16px;
	gap: 18px;
}

.pagination-buttons {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	padding: 10px 0;
	background-color: #fff;
}
</style>