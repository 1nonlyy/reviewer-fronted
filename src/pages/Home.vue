<template>
    <div class="flex flex-col items-center py-10 bg-gradient-to-r from-blue-100 to-pink-100">
      <div class="flex gap-2 w-full max-w-xl">
        <input type="text" placeholder="Введите название компании или заведение..." class="p-3 rounded-lg border w-full max-w-xl" />
        <button class="p-3 px-6 bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-lg">Найти</button>
      </div>
    </div>

    <!-- Categories -->
    <div class="flex flex-wrap justify-center gap-6 py-8">
      <div v-for="cat in categories" :key="cat" class="w-28 h-28 flex flex-col rounded-2xl items-center justify-center border shadow-md rounded-lg hover:scale-105 hover:shadow-xl hover:bg-gray-50 transition-all duration-400">
        <div class="text-3xl text-purple-500">🏥</div>
        <div class="text-sm text-center mt-2 font-semibold">{{ cat }}</div>
      </div>
    </div>

    <!-- Latest Reviews -->
    <section class="py-10">
      <h2 class="text-3xl font-bold text-center mb-8">Последние отзывы</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div v-for="review in reviews" :key="review.title" class="w-80 p-4 border rounded-lg flex flex-col gap-2 hover:shadow-md transition">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="font-semibold">{{ review.title }}</h3>
              <p class="text-sm text-gray-500">{{ review.category }}</p>
            </div>
            <div class="bg-red-400 text-white rounded-full px-3 py-1 text-sm font-bold">
              {{ review.rating }} ★
            </div>
          </div>
          <p class="text-gray-700 text-sm">{{ review.text }}</p>
          <div class="flex justify-between items-center text-xs text-gray-400">
            <span>{{ review.author }} • {{ review.time }}</span>
            <span class="text-green-500 font-semibold">✓ Проверено</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-10 bg-gradient-to-r from-blue-200 to-pink-200 text-center">
      <div class="flex flex-wrap justify-center gap-12">
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-4xl font-bold">{{ stat.value }}</p>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </section>
</template>


<script>
export default {
  data() {
    return {
      categories: ['Медицина', 'Госуслуги', 'Магазины', 'Отели', 'Автосервис', 'IT-сервисы', 'Рестораны', 'Туризм'],
      reviews: [
        { title: 'МФЦ Москвы', category: 'Госуслуги', rating: 4.5, text: 'Отличный сервис, быстрое обслуживание. Единственный минус — большие очереди в утренние часы.', author: 'Анна К.', time: '2 дня назад' },
        { title: 'Яндекс.Такси', category: 'Транспорт', rating: 4.8, text: 'Пользуюсь регулярно, всегда довольна качеством.', author: 'Иван П.', time: '1 день назад' },
        { title: 'Сбербанк', category: 'Банковские услуги', rating: 4.2, text: 'Удобное мобильное приложение, но долгое ожидание в отделении.', author: 'Михаил С.', time: '3 дня назад' }
      ],
      stats: [
        { value: '1,000,000+', label: 'Отзывов' },
        { value: '250,000+', label: 'Компаний' },
        { value: '500,000+', label: 'Пользователей' },
        { value: '98%', label: 'Достоверность' }
      ]
    }
  }
}
</script>
