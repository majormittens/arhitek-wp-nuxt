<template>
    <ArticleList :articles="topicArticles.articles" :title="topic.name" />
</template>

<script>
import find from 'lodash/find';
import ArticleList from '~/components/ArticleList';

export default {
  async asyncData({ app, store, params }) {
    if (!store.state.featuredArticles.length) {
      let articles = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=1000000&categories=${process.env.FEATURED_CATEGORY_ID}&_embed`
      );
      store.commit('setFeaturedArticles', articles.data);
    }

    if (!store.state.topics) {
      let topics = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/categories?per_page=1000000`
      );
      store.commit('setTopics', topics.data);
    }

    if (!find(store.state.topicArticles, { slug: params.topic })) {
      let topic = find(store.state.topics, { slug: params.topic });
      let topicArticles = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/posts?orderby=date&per_page=100000&categories=${topic.id}&_embed`
      );
      store.commit('setTopicArticles', {
        slug: params.topic,
        articles: topicArticles.data,
        infiniteLoading: true,
        page: 1
      });
    }
  },

  components: {
    ArticleList
  },

  computed: {
    topic() {
      return find(this.$store.state.topics, {
        slug: this.$route.params.topic
      });
    },
    topicArticles() {
      return find(this.$store.state.topicArticles, {
        slug: this.$route.params.topic
      });
    },
  },

  head() {
    return {
      title: `${this.topic.name} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },
};
</script>
