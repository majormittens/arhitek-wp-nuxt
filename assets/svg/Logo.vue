<template>
    <img style="width: 140px" :src="logo"/>
</template>

<script>
export default {
    data() {
        return {
            logo: require('./logo.png')
        };
    },
};
</script>P