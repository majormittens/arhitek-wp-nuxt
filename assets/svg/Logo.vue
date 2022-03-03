<template>
    <img style="height: 70px; min-width: 170px;" :src="logo"/>
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