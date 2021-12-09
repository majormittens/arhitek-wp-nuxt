<template>
<nuxt-link :to="`/${this.heroArticle.slug}`">
    <div class="flex items-center w-full px-4 md:px-8 py-10 bg-cover card" v-lazy:backgroundImage="'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'">
        <!-- <Spinner1 /> -->
        <div class="card glass lg:card-side text-neutral-content flex flex-col">
            <figure class="p-6">
                <img v-if="heroArticle" :src="getFeaturedImage(heroArticle, 'medium').source_url" class="rounded-lg shadow-lg">
            </figure>
            <div class="max-w-md card-body">
                <h2 class="card-title" v-html="this.heroArticle.title.rendered"></h2>
                <div class="date">
                    <span v-html="shortTimestamp(heroArticle.date)"></span>
                    &nbsp;–&nbsp;
                    <span v-for="topic in topics" class="topic fancy" :key="topic.id" v-html="topic.name"></span>
                </div>
                <div class="overflow-ellipsis excerpt" v-html="this.heroArticle.excerpt.rendered"></div>
                <!-- <div class="card-actions">
                <button class="btn glass rounded-full">Read more</button>
            </div> -->
            </div>
        </div>
    </div>

</nuxt-link>
</template>

<script>
import Spinner1 from '~/components/Spinner1';

export default {
    components: {
        Spinner1
    },
    props: {
        heroArticle: Object
    },
    mixins: {
        shortTimestamp: Function,
        getFeaturedImage: Function,
    },
    computed: {
        paddingTop() {
            return {
                paddingTop: (this.featuredImage.height / this.featuredImage.width) * 100 + '%'
            };
        },
        topics() {
            return this.heroArticle._embedded['wp:term'][0];
        },
        featuredImage() {
            let featuredImage = this.heroArticle._embedded['wp:featuredmedia'];

            if (featuredImage) {
                return (
                    featuredImage[0].media_details.sizes.large ||
                    featuredImage[0].media_details.sizes.full ||
                    false
                );
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.excerpt {
    transition: 0.2s;

    &:hover {
        transform: translateX(4px);

    }
}
</style>
