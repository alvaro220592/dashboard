<template>
    <div>
        <p class="breadcrumb">{{ link }}</p>
    </div>
</template>

<script>
export default {
    name: 'BreadcrumbComponent',

    props: {
        link: String
    }
}
</script>

<style lang="scss" src="./style.scss" scoped>
</style>