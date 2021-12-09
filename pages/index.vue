<template>
  <div class="home">
    <!-- <div class="articles">
      <TheHero :hero-article="articlesList[0]" />
      <ArticleList :articles="[...articlesList].slice(1)" />
      <client-only>
        <InfiniteLoading ref="infiniteLoading" @infinite="moreArticles">
          <span slot="spinner">
            <Spinner1 />
          </span>
          <span slot="no-results">
            <Logo />
            <div>No more articles!</div>
          </span>
          <span slot="no-more">
            <Logo />
            <div>No more articles!</div>
          </span>
        </InfiniteLoading>
      </client-only>
    </div>
    <TheSidebar /> -->
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="flex justify-between items-end gap-4 mb-6">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">Selected</h2>

      <a href="#" class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Show more</a>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Rachit Tank" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />

          <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Timely Watch</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$15.00</span>
            <span class="text-red-500 line-through mb-0.5">$30.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Galina N" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Fancy Plant</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$9.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by eniko kis" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Elderly Cam</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$45.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Irene Kredenets" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Shiny Shoe</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$29.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Charles Deluvio" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Spiky Plant</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$4.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Fernando Lavin" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Wieldy Film</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$19.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Kiran CK" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
          <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Sturdy Stand</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$12.00</span>
            <span class="text-red-500 line-through mb-0.5">$24.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->

      <!-- product - start -->
      <div>
        <a href="#" class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </a>

        <div>
          <a href="#" class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">Lazy Bottle</a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$9.00</span>
          </div>
        </div>
      </div>
      <!-- product - end -->
    </div>
  </div>
</div>
  </div>
</template>

<script>
import ArticleList from '~/components/ArticleList';
import TheHero from '~/components/TheHero';
import TheSidebar from '~/components/TheSidebar';
import InfiniteLoading from 'vue-infinite-loading';
import Logo from '~/assets/svg/Logo.vue';
import Spinner1 from '~/components/Spinner1.vue';

export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `${process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=10&_embed`
    );
    return { articles: data };
  },

  components: {
    ArticleList,
    TheHero,
    TheSidebar,
    InfiniteLoading,
    Logo,
    Spinner1
  },

  computed: {
    articlesList() {
      return [...this.articles].filter(
        article => !article.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
      );
    }
  },

  data() {
    return {
      infiniteLoadingPage: 1
    };
  },

  head() {
    return {
      title: `Home | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {
    moreArticles($state) {
      this.$axios
        .get(`${process.env.WORDPRESS_API_URL}/wp/v2/posts`, {
          params: {
            orderby: 'date',
            per_page: 10,
            categories_exclude: process.env.FEATURED_CATEGORY_ID,
            page: this.infiniteLoadingPage + 1,
            _embed: true
          }
        })
        .then(response => {
          this.articles = [...this.articles, ...response.data];
          this.infiniteLoadingPage++;
          $state.loaded();
        })
        .catch(() => $state.complete());
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  .hero {
    margin: 0 -32px;
  }

  .articles {
    padding: 0 32px;
    max-width: 900px;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: none;
    }

    @media (max-width: 700px) {
      padding: 0 16px;
    }

    .article-list {
      margin: 32px 0;

      @media (max-width: 700px) {
        margin: 16px 0;
      }
    }
  }
}
</style>
