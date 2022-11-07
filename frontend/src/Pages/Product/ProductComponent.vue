<template>
    <DashboardComponent>
        <div slot="pages" class="">
            <BreadcrumbComponent link="Produtos / Teste" />
            
            <div class="row m-1">
                <CardComponent titulo="Título 1" conteudo="Conteúdo 1">
                    <i slot="icon" class='bi bi-fire'></i>
                </CardComponent>

                <CardComponent titulo="Título 2" conteudo="Conteúdo 2">
                    <i slot="icon" class='bi bi-flag-fill'></i>
                </CardComponent>  

                <CardComponent titulo="Titulo 3" conteudo="Conteúdo 3">
                    <i slot="icon" class='bi bi-gear-fill'></i>
                </CardComponent>  
            </div>
        </div>
    </DashboardComponent>
</template>

<script>
    import DashboardComponent from '../Dashboard/DashboardComponent.vue'
    import BreadcrumbComponent from '../../components/Breadcrumb/BreadcrumbComponent.vue'
    import CardComponent from '../../components/Card/CardComponent.vue'
    
    export default {
        name: 'ProductComponent',

        components: {
            DashboardComponent,
            BreadcrumbComponent,
            CardComponent
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>