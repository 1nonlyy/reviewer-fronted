<template>
    <div class="bg-white p-4 rounded-lg shadow max-w-xl mx-auto mt-8">
      <h2 class="text-xl font-semibold mb-4">Оставить отзыв</h2>
  
      <div class="flex items-center mb-3">
        <button
          v-for="star in 5"
          :key="star"
          @click="rating = star"
          @mouseenter="hover = star"
          @mouseleave="hover = 0"
          class="w-10 h-10 flex items-center justify-center text-2xl font-bold transition hover:scale-110"
          :class="(hover || rating) >= star ? 'bg-orange-400' : 'bg-gray-200'"
        >
          ★
        </button>
        <span class="ml-2 text-sm text-gray-700">
            {{ currentPhrase }}
        </span>
      </div>
  
      <textarea
        v-model="text"
        placeholder="Поделитесь своим опытом..."
        class="w-full h-28 p-2 border border-gray-300 rounded resize-none mb-2"
      ></textarea>
  
      <div class="text-right text-sm text-gray-500 mb-3">
        {{ text.length }} / 1000 символов
      </div>
  
      <button
        @click="submitReview"
        class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
      >
        Отправить отзыв
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const rating = ref(0)
  const hover = ref(0)
  const text = ref('')
  const phrases = ['Ужасно', 'Плохо', 'Окей', 'Хорошо', 'Отлично']
  const currentPhrase = computed(() => {
        const index = (hover.value || rating.value) - 1
        return index >= 0 ? phrases[index] : 'Без оценки'
    })
  function submitReview() {
    if (text.value.length < 85) {
      alert('Отзыв должен содержать минимум 85 символов.')
      return
    }
  
    // 👇 здесь отправка отзыва на backend через fetch/axios
    console.log('Отправка отзыва:', {
      rating: rating.value,
      text: text.value
    })
  
    // Очистка формы
    rating.value = 0
    text.value = ''
  }
  </script>
  