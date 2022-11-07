<template>
    <div class="col-md-12">
        <ul v-for="user in users" :key="user.id">
            <div class="card">
                <li>id: {{ user.id }}</li>
                <li>Nome: {{ user.name }}</li>
                <li>Usuário: {{ user.username }}</li>
                <li>Email: {{ user.email }}</li>
            </div>
        </ul>
    </div>
</template>

<script>

export default {

    name: 'ListComponent',

    props: {
        users: Array
    }
}
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>