<template>
    
    <!-- <aside class="sidebar_collapse"> -->
    <aside class="">
        <ul class="sidebar_avatar">
            <li>
                <i class="bi bi-shop avatar"></i>
            </li>
        </ul>

        <ul class="sidebar_links">
            <li>
                <router-link :to="{name: 'home'}" class="nav-link">
                    <i class="bi bi-house"></i>
                    <span>Início</span>
                </router-link>
            </li>
            
            <li>
                <router-link :to="{name: 'clients'}" class="nav-link">
                    <i class="bi bi-people"></i>
                    <span>Clientes</span>
                </router-link>
            </li>

            <li>
                <router-link :to="{name: 'products'}" class="nav-link">
                    <i class="bi bi-cart3"></i>
                    <span>Produtos</span>
                </router-link>
            </li>

            <li @click.prevent="logout">
                <!-- <a href="/#/login" class="nav-link"> -->
                <a href="" class="nav-link">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>Sair</span>
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: 'SidebarComponent',

        methods: {
            logout() {
                this.$router.push({name: 'login'})
            },

            sidebarExpand() {
                alert('entrou')
            },

            sidebarCollapse() {
                alert('saiu')
            }
        },

        mounted() {
            
            // Dinâmica de hover na sidebar
            let sidebar = document.querySelector('aside')
            let eventos = ['mouseenter', 'click']
            
            // sidebar.addEventListener('mouseenter', () => {
            //     if(sidebar.classList.contains('sidebar_collapse')){
            //         sidebar.classList.remove('sidebar_collapse')
            //     }
            // })

            eventos.forEach( evento => {
                sidebar.addEventListener(evento, () => {
                    if(sidebar.classList.contains('sidebar_collapse')){
                        sidebar.classList.remove('sidebar_collapse')
                    }
                })
            })

            // sidebar.addEventListener('mouseleave', () => {
            //     if(!sidebar.classList.contains('sidebar_collapse')){
            //         sidebar.classList.add('sidebar_collapse')
            //     }
            // })
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>