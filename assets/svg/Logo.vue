<template>
    <img style="height:60px; width: 100%;" :src="logo"/>
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