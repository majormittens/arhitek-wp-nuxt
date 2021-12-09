<template>
<div class="article-list">
    <div class="card lg:card-side bordered shadow-2xl my-4" v-for="article in articles" :key="article.id">
        <figure v-if="article._embedded['wp:featuredmedia']" class="m-2">
            <img :alt="article._embedded['wp:featuredmedia'][0].alt_text" v-lazy="
                article._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
              " class="rounded-xl" />
            <!-- <img
              :alt="article._embedded['wp:featuredmedia'][0].alt_text"
              v-lazy="
                article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
              "
            />
            <Spinner1 class="spinner" /> -->
        </figure>
        <div class="card-body">
            <div class="date">
                <span v-html="shortTimestamp(article.date)"></span>
                &nbsp;–&nbsp;
                <span class="link link-accent" v-for="topic in article._embedded['wp:term'][0]" :key="topic.id">
                    <nuxt-link class="fancy" :to="`/topics/${topic.slug}`" :key="topic.id" v-html="topic.name"></nuxt-link>
                </span>
            </div>
            <nuxt-link :to="`/${article.slug}`">

                <div class="content">
                    <h2 v-html="article.title.rendered" class="card-title"></h2>
                    <div class="excerpt" v-html="article.excerpt.rendered"></div>
                </div>
            </nuxt-link>

            <!-- <div class="card-actions">
      <button class="btn btn-primary">Get Started</button> 
      <button class="btn btn-ghost">More info</button>
    </div> -->
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
        articles: Array
    },
    mixins: {
        shortTimestamp: Function
    }
};
</script>

<style lang="scss" scoped>
@import '~/assets/css/vars.scss';

.date {
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 12px;
    text-transform: uppercase;

    .topic:not(:last-child) {
        margin-right: 4px;
    }
}

.content {
    transition: 0.2s;

    &:hover {
        transform: translateX(4px);

        .excerpt {
            color: $accent;
        }
    }
}
</style>
