<template>
    <main>
        <SidebarComponent/>        
        <content>
            <NavbarComponent/>

            <div class="container">
                <p class="breadcrumb">Home > teste</p>
                <section class="card">
                    <h1>Teste</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil ad laudantium culpa praesentium aspernatur, ipsa eius vero, excepturi repellat illum officiis maxime distinctio accusantium, error possimus quo consequatur similique?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quo repellendus maiores eum, recusandae consequatur, ad error, voluptates nulla aliquid aut. Vero culpa, mollitia necessitatibus illum doloribus dolor molestiae numquam.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum doloribus mollitia necessitatibus modi architecto ipsa repellendus nobis officiis voluptatem. Sunt quos beatae voluptatum cum magnam dicta facere facilis a reprehenderit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod accusantium vero deleniti perferendis. Eaque voluptatem vitae, magni nobis pariatur suscipit eos? Odio dolores, laboriosam iusto consequatur omnis soluta facere?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates magnam labore quaerat laudantium a nam ipsum quia, expedita excepturi reiciendis rerum cum repudiandae dolorem est hic ea! Quibusdam, eum!</p>
                </section>
            </div>
        </content>
    </main>
</template>

<script>
    import NavbarComponent from '../Navbar/NavbarComponent.vue'
    import SidebarComponent from '../Sidebar/SidebarComponent.vue'

    export default {
        name: 'DashboardComponent',

        components: {
            NavbarComponent,
            SidebarComponent
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>