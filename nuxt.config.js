import axios from 'axios';
require('dotenv').config();

export default {
  mode: 'universal',
  target: "static",
  // purgeCSS: {
  //   enabled: false
  // },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto+Slab:400,500|Roboto:300,400&display=fallback'
      }
    ]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/mixins' }
  ],

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/pwa', '@nuxtjs/sitemap'],

  axios: {},

  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ];
      }
    },
    postcss: {
      plugins: {
        // 'postcss-import': true,
        // 'postcss-nested': true,
        // '@nuxtjs/tailwindcss': true,
        'tailwindcss': true
      }
    }
  },

  sitemap: {
    hostname: 'https://bullcharge.net',
    path: '/sitemap.xml',
    sitemaps: [
      {
        path: '/sitemap-articles.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/posts', {
            params: { orderby: 'date', per_page: 1000000 }
          });
          return data.map(article => ({
            url: `/${article.slug}`,
            lastmod: article.modified
          }));
        }
      },
      {
        path: '/sitemap-pages.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/pages', {
            params: { orderby: 'date', per_page: 1000000 }
          });
          return data.map(page => ({
            url: `/${page.slug}`,
            lastmod: page.modified
          }));
        }
      },
      {
        path: '/sitemap-topics.xml',
        routes: async () => {
          const { data } = await axios.get(process.env.WORDPRESS_API_URL + '/wp/v2/categories', {
            params: { per_page: 1000000 }
          });
          return data.map(topic => ({
            url: `/${topic.slug}`,
            lastmod: topic.modified
          }));
        }
      }
    ]
  },

  generate: {
    async routes() {
      let posts = await axios
        .get(process.env.WORDPRESS_API_URL + '/wp/v2/posts', {
          params: { orderby: 'date', per_page: 1000000, _embed: null }
        })
        .then(res => {
          return res.data.map(post => {
            return {
              route: '/' + post.slug,
              payload: post
            };
          });
        });
      let pages = await axios
        .get(process.env.WORDPRESS_API_URL + '/wp/v2/pages', {
          params: { orderby: 'date', per_page: 1000000, _embed: null }
        })
        .then(res => {
          return res.data.map(page => {
            return {
              route: '/pages/' + page.slug,
              payload: page
            };
          });
        });
      let topics = await axios
        .get(process.env.WORDPRESS_API_URL + '/wp/v2/categories', { params: { per_page: 1000000 } })
        .then(res => {
          return res.data.map(topic => {
            return {
              route: '/topics/' + topic.slug,
              payload: topic
            };
          });
        });
      return Promise.all([posts, pages, topics]).then(values => {
        return [...values[0], ...values[1], ...values[2]];
      });
    }
  }
};
