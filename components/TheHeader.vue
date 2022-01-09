<template>
<header class="flex justify-start items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
    <!-- logo - start -->
    <nuxt-link to="/" class="inline-flex items-center justify-center px-4" aria-label="logo">
        <Logo />
    </nuxt-link>
    <!-- logo - end -->

<div class="flex flex-col">
  <div class="px-4 md:px-8">
    <div class="p-1 flex flex-row items-center">
        <h2 class="text-gray-500 text-xl">practica arhitecturala </h2>
        <p class="text-gray-700 ml-1"> | contact@domeniu.com | 0234132321</p>
    </div>
  </div>
    <!-- nav - start -->
    <nav class="sm:hidden lg:flex gap-6 ml-4">
        <div v-for="topic in menuTopics" :key="topic.id">
            <div class="dropdown inline-block relative" v-if="topic.subItems">
                <button class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 inline-flex items-center">
                    <span class="mr-1">{{topic.name}}</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ml-2">
                    <li v-for="item in topic.subItems" :key="item.id" >
                        <nuxt-link :to="`/topics/${item.slug}`" :class="{'rounded-t':topic.subItems.indexOf(item) == 0}" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{{item.name}}</nuxt-link>
                    </li>
                </ul>
            </div>
            <nuxt-link v-else to="/" exact class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                {{topic.name}}</nuxt-link>
        </div>

        <div class="dropdown inline-block relative">
            <button class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 inline-flex items-center">
                <span class="mr-1">1006 ganduri</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ml-2">
                <li class="">
                    <nuxt-link to="/pages/echipa" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                        Echipa
                    </nuxt-link>
                </li>
                <li class="">
                    <nuxt-link to="/pages/promisiunea" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                        Promisiunea
                    </nuxt-link>
                </li>
                <li class="">
                    <nuxt-link to="/pages/povestea-incerc-proiect" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                        Viziunea Noastra
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <nuxt-link to="/pages/fratele-de-temelie" exact class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
            Fratele de temelie</nuxt-link>
        <!-- <nuxt-link to="/" exact class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
            Home</nuxt-link> -->

        <nuxt-link to="/contact" class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
            Contact
        </nuxt-link>
    </nav>
    <!-- nav - end -->
</div>
    <!-- buttons - start -->
    <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
    </button>
    <!-- buttons - end -->
</header>
</template>

<script>
import TheHeaderSearch from '~/components/TheHeaderSearch';
import Logo from '~/assets/svg/Logo';
export default {
    components: {
        TheHeaderSearch,
        Logo
    },

    computed: {
        menuTopics() {
            let menuItems = [];
            const topics = this.$store.state.topics;
            if (!topics || !topics.length) {
                return menuItems;
            }
            menuItems = topics.filter(t => t.parent === 0 && !t.slug.includes('uncategorized'));
            menuItems.forEach(item => {
                item.subItems = topics.filter(t => t.parent === item.id);
            });
            return menuItems;
        }
    },

    mixins: {
        homeScrollTop: Function
    }
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
    display: block;
    z-index: 100;
}
</style>
