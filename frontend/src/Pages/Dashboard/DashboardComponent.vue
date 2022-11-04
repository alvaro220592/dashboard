<template>
    <main>
        <SidebarComponent/>        
        <content>
            <NavbarComponent/>

            <div class="container">

                <slot name="pages"/>

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
            SidebarComponent,
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>