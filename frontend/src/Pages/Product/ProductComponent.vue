<template>
    <DashboardComponent>
        <div slot="pages">
            <BreadcrumbComponent link="Produtos / Teste" />
            <section class="card">
                <h3 class="text-danger">Teste</h3>
                <p class="text-danger">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vero nulla suscipit esse quasi, quas corrupti sint tempore dolor beatae ut. Unde, ea? Praesentium maiores voluptates suscipit adipisci? Perferendis, architecto.
                </p>
            </section>
        </div>
    </DashboardComponent>
</template>

<script>
    import DashboardComponent from '../Dashboard/DashboardComponent.vue'
    import BreadcrumbComponent from '../Breadcrumb/BreadcrumbComponent.vue'
    
    export default {
        name: 'ProductComponent',

        components: {
            DashboardComponent,
            BreadcrumbComponent
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>