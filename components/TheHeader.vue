<template>
<header class="grid auto-rows-auto sm:flex justify-start items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
    <!-- logo - start -->
    <nuxt-link to="/" class="inline-flex items-center justify-center px-4" aria-label="logo">
        <Logo />
    </nuxt-link>
    <!-- logo - end -->

    <div class="flex flex-col">
        <div class="px-4 md:px-8">
            <div class="p-1 flex flex-col md:flex-row items-center">
                <h2 class="text-gray-500 text-2xl">practică arhitecturală </h2>
                <p class="text-gray-700 ml-1 text-lg"> | <a href="mailto:office@inspirescu.com">office@inspirescu.com</a> | <a href="tel:0799264222">0799264222</a></p>
            </div>
        </div>
        <!-- nav - start -->
        <nav class="hidden sm:hidden lg:flex gap-6 ml-4">
            <div v-for="topic in menuTopics" :key="topic.id">
                <div class="dropdown inline-block relative" v-if="topic.subItems">
                    <button class="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 inline-flex items-center">
                        <span class="mr-1">{{topic.name}}</span>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ml-2 text-sm">
                        <li v-for="item in topic.subItems" :key="item.id">
                            <nuxt-link :to="`/topics/${item.slug}`" :class="{'rounded-t':topic.subItems.indexOf(item) == 0}" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">{{item.name}}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <nuxt-link v-else to="/" exact class="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                    {{topic.name}}</nuxt-link>
            </div>

            <div class="dropdown inline-block relative">
                <button class="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 inline-flex items-center">
                    <span class="mr-1">1006 ganduri</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ml-2 text-sm">
                    <!-- <li class="">
                        <nuxt-link to="/pages/echipa" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                            Echipa
                        </nuxt-link>
                    </li> -->
                    <li class="">
                        <nuxt-link to="/pages/promisiunea" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                            Promisiunea
                        </nuxt-link>
                    </li>
                    <li class="">
                        <nuxt-link to="/pages/povestea-incerc-proiect" class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                            Viziunea Noastră
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <nuxt-link to="/pages/fratele-de-temelie" exact class="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                Fratele de temelie</nuxt-link>

            <nuxt-link to="/contact" class="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                Contact
            </nuxt-link>
        </nav>
        <!-- nav - end -->
    </div>
    <!-- buttons - start -->
    <button ref="openButton" @click="open" type="button" class="block absolute right-3 lg:hidden text-gray-600 focus:outline-none focus:text-gray-900" aria-label="Menu">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" />
            <path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" />
            <path d="M4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17H4Z" />
        </svg>
    </button>
    <!-- buttons - end -->
    <div class="lg:hidden">
        <!-- Off-canvas menu background overlay -->
        <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100" leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0" appear>
            <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                <div @click="close" class="absolute inset-0 bg-black opacity-50" tabindex="-1"></div>
            </div>
        </transition>

        <!-- Off-canvas menu -->
        <transition enter-class="translate-x-full" enter-active-class="ease-out transition-slow" enter-to-class="translate-x-0" leave-class="translate-x-0" leave-active-class="ease-in transition-medium" leave-to-class="translate-x-full" appear>
            <div v-show="isOpen" class="z-10 fixed inset-y-0 right-0 max-w-xs w-full bg-white transition-transform overflow-y-auto">
                <div class="relative z-10 bg-white">
                    <div :class="isOpen ? 'block' : 'hidden'" class="absolute top-0 right-0 p-4">
                        <button ref="closeButton" @click="close" type="button" class="text-gray-600 focus:outline-none focus:text-gray-900" aria-label="Close">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L13.4142 12L19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L12 10.5858L5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L10.5858 12L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L12 13.4142L18.2929 19.7071Z" />
                            </svg>
                        </button>
                    </div>
                    <div class="px-4 pt-4 pb-6">
                        <div v-for="topic in menuTopics" :key="topic.id">
                            <div v-if="topic.subItems">
                                <a href="#" class="mt-8 block text-xs font-semibold text-gray-600 uppercase tracking-wider">{{topic.name}}</a>
                                <nuxt-link :to="`/topics/${item.slug}`" v-for="item in topic.subItems" :key="item.id" class="mt-4 block font-medium text-gray-900 hover:text-gray-700">{{item.name}}</nuxt-link>
                            </div>
                            <nuxt-link v-else to="/" exact class="px-2 py-1 mx-2 mt-2 text-base font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                {{topic.name}}</nuxt-link>
                        </div>
                        <a href="#" class="mt-8 block text-xs font-semibold text-gray-600 uppercase tracking-wider">1006 ganduri</a>
                        <nuxt-link to="/pages/promisiunea" class="mt-4 block font-medium text-gray-900 hover:text-gray-700">Promisiunea</nuxt-link>
                        <nuxt-link to="/pages/povestea-incerc-proiect" class="mt-4 block font-medium text-gray-900 hover:text-gray-700">Viziunea Noastră</nuxt-link>
                        <nuxt-link to="/pages/fratele-de-temelie" class="mt-4 block font-medium text-gray-900 hover:text-gray-700">Fratele de temelie</nuxt-link>
                        <nuxt-link to="/contact" class="mt-4 block font-medium text-gray-900 hover:text-gray-700">Contact</nuxt-link>
                    </div>
                </div>
            </div>
        </transition>
    </div>
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
    data() {
        return {
            isOpen: false
        }
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
    watch: {
        $route(to, from) {
            this.close();
        }
    },
    methods: {
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
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
