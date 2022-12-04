<template>
    <img style="width: 200px" :src="logo"/>
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