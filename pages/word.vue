<template>
    <div class="card">
        <word-header></word-header>
        <div class="content">
            <h1 class="word">{{ currentWord.word }}</h1>
            <p class="phonetic">{{ currentWord.phonetic }}</p>
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
        <!-- 翻页按钮 -->
        <button @click="prevWord">上一个单词</button>
        <button @click="nextWord">下一个单词</button>
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
            // 初始化单词数据数组
            wordData: JSON.parse(localStorage.getItem('wordData') || '[]'),
            // 当前单词的索引
            currentIndex: 0
        };
    },
    computed: {
        // 计算属性用于根据当前索引获取当前单词
        currentWord() {
			console.log(this.wordData[this.currentIndex])
            return this.wordData[this.currentIndex] ;
        },
		definitionLines() {
            // 确保 currentWord.definition 存在，并将其分割成数组
            return this.currentWord.definition ? this.currentWord.definition.split('\\n') : [];
        },
		translationLines(){
			return this.currentWord.translation ? this.currentWord.translation.split('\\n') : [];
		}
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
</style>