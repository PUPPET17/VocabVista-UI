<template>
  <div class="max-w-md mx-auto p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <button class="text-zinc-500 dark:text-zinc-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="text-zinc-500 dark:text-zinc-300">1/30</span>
      <div class="flex space-x-2">
        <button class="text-zinc-500 dark:text-zinc-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        <button class="text-zinc-500 dark:text-zinc-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100">regent</h1>
      <p class="text-lg text-zinc-500 dark:text-zinc-400">/ˈrējənt/</p>
      <p class="text-sm text-zinc-500 dark:text-zinc-400">先回想词义再选择，想不起来看答案</p>
    </div>

    <!-- Answers -->
    <div class="space-y-4">
      <div class="p-4 bg-red-100 dark:bg-red-200 rounded-lg">
        <p class="text-zinc-900 dark:text-zinc-800">n. 摄政者, 摄政王</p>
      </div>
      <div class="p-4 bg-red-100 dark:bg-red-200 rounded-lg">
        <p class="text-zinc-900 dark:text-zinc-800">a. 摄政的</p>
      </div>
      <div class="p-4 bg-red-100 dark:bg-red-200 rounded-lg">
        <p class="text-zinc-900 dark:text-zinc-800">a. 偏离正路的, 偏离常轨的, 时变的</p>
      </div>
      <div class="p-4 bg-red-100 dark:bg-red-200 rounded-lg">
        <p class="text-zinc-900 dark:text-zinc-800">n. 离开正路, 偏离, 时变, 光行差, 心理失常, 色差</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullPage'
}
</script>

<style scoped>
	/* Container */
	.max-w-md {
	  max-width: 28rem; /* 约等于 448px */
	}
	.mx-auto {
	  margin-left: auto;
	  margin-right: auto;
	}
	.p-4 {
	  padding: 1rem; /* 16px */
	}
	.bg-white {
	  background-color: #ffffff;
	}
	.dark .bg-zinc-800 {
	  background-color: #27272a; /* 深色模式下背景色 */
	}
	.rounded-lg {
	  border-radius: 0.5rem; /* 8px */
	}
	.shadow-md {
	  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
	}
	
	/* Header */
	.flex {
	  display: flex;
	}
	.justify-between {
	  justify-content: space-between;
	}
	.items-center {
	  align-items: center;
	}
	.mb-4 {
	  margin-bottom: 1rem; /* 16px */
	}
	.space-x-2 > * + * {
	  margin-left: 0.5rem; /* 8px */
	}
	
	/* Text and Icons */
	.text-zinc-500 {
	  color: #6b7280;
	}
	.dark .text-zinc-300 {
	  color: #d1d5db; /* 深色模式下文本颜色 */
	}
	.h-6 {
	  height: 1.5rem; /* 24px */
	}
	.w-6 {
	  width: 1.5rem; /* 24px */
	}
	
	/* Content */
	.text-2xl {
	  font-size: 1.5rem; /* 24px */
	}
	.font-bold {
	  font-weight: bold;
	}
	.text-zinc-900 {
	  color: #111827;
	}
	.dark .text-zinc-100 {
	  color: #f9fafb; /* 深色模式下亮色文本 */
	}
	.text-lg {
	  font-size: 1.125rem; /* 18px */
	}
	.text-sm {
	  font-size: 0.875rem; /* 14px */
	}
	
	/* Answers */
	.space-y-4 > * + * {
	  margin-top: 1rem; /* 16px */
	}
	.bg-red-100 {
	  background-color: #fee2e2;
	}
	.dark .bg-red-200 {
	  background-color: #fecaca; /* 深色模式下背景色 */
	}
	.rounded-lg {
	  border-radius: 0.5rem; /* 8px, 已经定义过，但在这里再次提醒 */
	}
</style>