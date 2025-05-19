<template>
    <!-- Растянутый на 100% navbar -->
    <header class="h-16 w-full bg-white shadow-sm fixed top-0 left-0 z-50 transition-all duration-300"
            :class="{ '-translate-y-full': !isNavbarVisible }">
      <div class="w-full px-4 sm:px-6 lg:px-8 ">
        <nav class="flex items-center justify-between h-16">
          <!-- Логотип -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="flex items-center">
              <span class="text-2xl font-extrabold text-rose-600 tracking-tight">Aiqyn</span>
            </router-link>
          </div>
  
          <!-- Меню для десктопа -->
          <div class="hidden md:flex md:items-center md:space-x-8">
            <router-link 
              to="/" 
              class="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'text-rose-600': isActive('/') }"
            >
              Home
            </router-link>
            <router-link 
              to="/profile" 
              class="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'text-rose-600': isActive('/profile') }"
            >
              My Profile
            </router-link>
          </div>
  
          <!-- Авторизация -->
          <div class="hidden md:flex md:items-center md:space-x-4">
            <router-link 
              to="/login" 
              class="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Login
            </router-link>
            <router-link 
              to="/register" 
              class="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
            >
              Register
            </router-link>
          </div>
  
          <!-- Кнопка мобильного меню -->
          <div class="md:hidden">
            <button 
              @click="toggleMobileMenu" 
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rose-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!mobileMenuOpen" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
  
      <!-- Мобильное меню -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden"
        :class="{ 'animate-fade-in': mobileMenuOpen }"
      >
        <div class="w-full px-4 sm:px-6 lg:px-8 pt-2 pb-3 space-y-1 border-t border-gray-200">
          <router-link 
            to="/" 
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50"
            :class="{ 'bg-gray-50 text-rose-600': isActive('/') }"
            @click="mobileMenuOpen = false"
          >
            Home
          </router-link>
          <router-link 
            to="/profile" 
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-gray-50"
            :class="{ 'bg-gray-50 text-rose-600': isActive('/profile') }"
            @click="mobileMenuOpen = false"
          >
            My Profile
          </router-link>
          <div class="pt-4 pb-3 border-t border-gray-200">
            <div class="flex items-center px-3">
              <div class="space-y-2 w-full">
                <router-link 
                  to="/login" 
                  class="block w-full text-center px-4 py-2 text-base font-medium text-gray-700 hover:text-rose-600 border border-gray-300 rounded-md hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  Login
                </router-link>
                <router-link 
                  to="/register" 
                  class="block w-full text-center px-4 py-2 text-base font-medium text-white bg-rose-600 border border-transparent rounded-md hover:bg-rose-700"
                  @click="mobileMenuOpen = false"
                >
                  Register
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { MenuIcon, XIcon } from 'lucide-vue-next'
  
  const mobileMenuOpen = ref(false)
  const isNavbarVisible = ref(true)
    const handleScroll = () => {
        if (window.scrollY > 0) {
        isNavbarVisible.value = false
        } else {
        isNavbarVisible.value = true
        }
    }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  
  const isActive = (path) => window.location.pathname === path
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.2s ease-in-out;
  }
  </style>
  
  