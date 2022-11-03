<template>
    <main>
        <!-- <header class="nav">
            <ul>
                <li>
                    <a href="/#/login" class="nav-link">Sair</a>
                </li>
            </ul>
        </header> -->
        <DashboardComponent/>
    </main>
</template>

<script>

import DashboardComponent from '../Dashboard/DashboardComponent.vue'

export default {
    name: 'HomeComponent',
    components: {
        DashboardComponent
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped>

</style>