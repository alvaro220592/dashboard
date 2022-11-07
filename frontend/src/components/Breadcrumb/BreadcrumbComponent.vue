<template>
    <div class="row m-1">
        <div class="col-md-12">
            <p class="breadcrumb">{{ link }}</p>
        </div>
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