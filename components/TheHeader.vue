<template>
<!-- <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box p-4 sticky">
    <div class="px-2 mx-2 navbar-start">
        <nuxt-link to="/" class="text-lg font-bold flex flex-row">
            <Logo class="h-8 w-12" />
            <span>Shinpuru-sa</span>
        </nuxt-link>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch">
            <nuxt-link to="/" exact class="btn btn-ghost btn-sm rounded-btn">
                Latest Articles</nuxt-link>
            <nuxt-link to="/topics" class="btn btn-ghost btn-sm rounded-btn">
                Topics</nuxt-link>
            <nuxt-link to="/pages/sample-page" class="btn btn-ghost btn-sm rounded-btn">
                Sample Page
            </nuxt-link>
            <nuxt-link to="/contact" class="btn btn-ghost btn-sm rounded-btn">
                Contact
            </nuxt-link>
        </div>
    </div>
    <div class="navbar-end">
        <TheHeaderSearch class="max-w-xs z-50" />
    </div>
</div> -->
<header class="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
    <!-- logo - start -->
    <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Wabi Sabi
    </a>
    <!-- logo - end -->

    <!-- nav - start -->
    <nav class="sm:hidden lg:flex gap-12">
        <nuxt-link to="/" exact class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
            Home</nuxt-link>
        <nuxt-link to="/topics" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
            Proiecte</nuxt-link>
        <nuxt-link to="/pages/povestea-incerc-proiect" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
            Viziunea Noastra
        </nuxt-link>
        <nuxt-link to="/contact" class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
            Contact
        </nuxt-link>
    </nav>
    <!-- nav - end -->

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
        meta() {
            return this.$store.state.meta;
        }
    },

    mixins: {
        homeScrollTop: Function
    }
};
</script>
