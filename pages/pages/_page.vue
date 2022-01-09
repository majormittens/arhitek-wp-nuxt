<template>
  <Page :data="page" type="page" />
</template>

<script>
import Page from "~/components/ArticleAndPage.vue";

export default {
  async asyncData({ app, store, params }) {
    const { data } = await app.$axios.get(
      `${process.env.WORDPRESS_API_URL}/wp/v2/pages`,
      {
        params: {
          slug: params.page,
          _embed: true,
        },
      }
    );
    if (!store.state.topics) {
      let topics = await app.$axios.get(
        `${process.env.WORDPRESS_API_URL}/wp/v2/categories?per_page=1000000`
      );
      store.commit("setTopics", topics.data);
    }
    return { page: data[0] };
  },

  components: {
    Page,
  },
};
</script>
