<template>
  <div class="w-full">
    <Navbar />
  </div>


  <div class="max-w-8xl mx-auto px-4">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Welcome  Aiqyn</h1>
      <p class="text-gray-700">
        This is the home page content that will be displayed inside the container.
      </p>
    </div>
    <router-view/>

    <!-- Footer -->
    <footer class="border rounded py-8 bg-gray-100 text-sm text-gray-600">
      <div class="max-w-4xl mx-auto flex flex-wrap justify-between">
        <div>
          <h4 class="font-bold mb-2">О проекте</h4>
          <p>О нас</p>
          <p>Как это работает</p>
          <p>Блог</p>
          <p>Вакансии</p>
        </div>
        <div>
          <h4 class="font-bold mb-2">Для пользователей</h4>
          <p>Написать отзыв</p>
          <p>Правила сообщества</p>
          <p>Помощь</p>
          <p>FAQ</p>
        </div>
        <div>
          <h4 class="font-bold mb-2">Для бизнеса</h4>
          <p>Зарегистрировать компанию</p>
          <p>Управление отзывами</p>
          <p>Реклама</p>
          <p>API</p>
        </div>
        <div>
          <h4 class="font-bold mb-2">Контакты</h4>
          <p>support@truereviews.com</p>
          <p>+7 (495) 123-45-67</p>
          <p>Москва, ул. Примерная, 123</p>
        </div>
      </div>
      <div class="text-center mt-6">© 2025 TrueReviews. Все права защищены.</div>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  },
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

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
