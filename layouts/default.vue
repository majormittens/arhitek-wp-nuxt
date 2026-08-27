<template>
  <div class="overflow-hidden pb-6 sm:pb-8 lg:pb-12 blog" id="blog">
    <div class="interface max-w-screen-2xl mx-auto">
      <TheHeader class="mb-8"/>
      <main role="main">
        <nuxt />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<!--  -->
<script>
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
@import '~/assets/css/vars.scss';

.blog * {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-repeat: no-repeat;
  box-sizing: border-box;
  transition-timing-function: cubic-bezier(0.11, 0.89, 0.31, 0.99);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  overflow-y: scroll;
  transition: background-color 0.8s;
  box-sizing: border-box;
  transition-timing-function: cubic-bezier(0.11, 0.89, 0.31, 0.99);
}
body {
  font-size: 0.85rem;
  line-height: 1.765em;
}

html.wf-active #blog,
html.wf-inactive #blog {
  > .interface {
    transition: 0.5s;
    opacity: 1;
  }

  > .spinner {
    display: none;
  }
}

.page-enter-active {
  transition: opacity 0.2s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

pre {
  white-space: pre-wrap;
}

.lazy {
  background-color: #555;
  position: relative;

  img {
    backface-visibility: hidden;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
    width: 100%;
  }

  [lazy='loading'] {
    opacity: 0;
  }

  [lazy='loaded'] {
    opacity: 1;
  }

  [lazy='loading'] + .spinner {
    opacity: 1;
  }

  .spinner {
    left: 50%;
    margin: -20px;
    opacity: 0;
    position: absolute;
    top: 50%;
  }
}

.infinite-loading-container {
  min-height: calc(64px * 2 + 40px) !important;
  padding: 64px;
}

.infinite-status-prompt {
  padding: 0 !important;
  position: relative;

  span {
    display: block;
  }

  svg {
    display: block;
    fill: rgba($primary, 0.45);
    width: 40px;
    height: 40px;
    position: relative;
    margin: auto;
  }

  div {
    bottom: -26px;
    color: rgba($primary, 0.65);
    font-size: 14px;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }
}

.spinner {
  position: relative;
  margin: auto;
}
</style>
