<template>
  <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <img class="w-full h-auto rounded-t-xl" :src="img" alt="Image Description">
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800 dark:text-white card-title">
        {{ title }}
      </h3>
      <p class="mt-1 text-gray-800 dark:text-gray-400">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
      text: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required: true
      }
  }
}
</script>

<style scoped>
.card-title {
  font-family: Roboto Condensed, sans-serif;
}
</style>