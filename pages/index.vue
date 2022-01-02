<template>
    <ArticleList :articles="articlesList" />
</template>

<script>
import ArticleList from '~/components/ArticleList';

export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `${process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=10&_embed`
    );
    return { articles: data };
  },

  components: {
    ArticleList,
  },

    mixins: {
        getFeaturedImage: Function
    },

  computed: {
    articlesList() {
      return [...this.articles].filter(
        article => !article.categories.includes(parseInt(process.env.FEATURED_CATEGORY_ID))
      );
    }
  },

  head() {
    return {
      title: `Home | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },
};
</script>
