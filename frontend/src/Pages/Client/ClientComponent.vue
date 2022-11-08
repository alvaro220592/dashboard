<template>
    <DashboardComponent>
        <div slot="pages" class="">
            <BreadcrumbComponent link="Clientes / Teste" />
            
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

            <div class="row m-1">
                <ListComponent :data="dados" description="Clients" />
            </div>
        </div>
    </DashboardComponent>
</template>

<script>
    import DashboardComponent from '../Dashboard/DashboardComponent.vue'
    import BreadcrumbComponent from '../../components/Breadcrumb/BreadcrumbComponent.vue'
    import CardComponent from '../../components/Card/CardComponent.vue'
    import ListComponent from '../List/ListComponent.vue'
    
    export default {
        name: 'ClientComponent',

        components: {
            DashboardComponent,
            BreadcrumbComponent,
            CardComponent,
            ListComponent
        },

        data() {
            return {
                dados: []
            }
        },

        mounted() {
            this.getUsersData()
        },

        methods: {
            async getUsersData() {
                // const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const response = await fetch(`http://localhost:8000/api/clients`);

                const data = await response.json();

                this.dados = data;

                console.log(data)
            }
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>