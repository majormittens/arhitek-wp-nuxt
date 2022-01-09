<template>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div v-if="title" class="flex justify-between items-end gap-4 mb-6">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">{{title}}</h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 xl:gap-8">
      <!-- article - start -->
      <nuxt-link v-for="article in articles" :key="article.id" :to="`/${article.slug}`" class="group h-32 md:h-32 lg:h-48 xl:h-64 flex justify-center items-center flex-1 flex-shrink-0 overflow-hidden relative">
        <img v-if="article._embedded['wp:featuredmedia']" :alt="article._embedded['wp:featuredmedia'][0].alt_text" v-lazy="
                article._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
              " class="w-full h-full object-contain object-center absolute inset-0 transform group-hover:scale-110 transition duration-200 group-hover:opacity-10" />

        <!-- <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div> -->

        <div class="flex flex-col items-center relative group-hover:opacity-100 opacity-0">
          <span class="block text-gray-800 text-md">{{article.title.rendered}}</span>
        </div>
      </nuxt-link>
      <!-- article - end -->
    </div>
  </div>
</div>
</template>

<script>
import Spinner1 from '~/components/Spinner1';

export default {
    components: {
        Spinner1
    },
    props: {
        articles: Array,
        title: String
    },
    mixins: {
        shortTimestamp: Function,
        getFeaturedImage: Function
    }
};
</script>
