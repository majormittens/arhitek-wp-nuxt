<template>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div v-if="title" class="flex justify-between items-end gap-4 mb-6">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">{{title}}</h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
      <!-- product - start -->
      <div v-for="article in articles" :key="article.id">
            <nuxt-link :to="`/${article.slug}`" v-if="getFeaturedImage(article, 'medium')" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">

          <img v-if="article._embedded['wp:featuredmedia']" :alt="article._embedded['wp:featuredmedia'][0].alt_text" v-lazy="
                article._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
              " class="w-full h-full object-contain object-center group-hover:scale-110 transition duration-200" />
            </nuxt-link>

        <div>
            <nuxt-link :to="`/${article.slug}`" v-if="getFeaturedImage(article, 'medium')" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
            {{article.title.rendered}}
            </nuxt-link>
        </div>
      </div>
      <!-- product - end -->
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
