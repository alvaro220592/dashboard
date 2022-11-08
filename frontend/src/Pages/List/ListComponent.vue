<template>
    <div class="col-md-12 mt-3">
        <strong>{{ description }} <span class="data_length">{{ data.length }}</span></strong>
        <div class="table-responsive">
            <table class="table table-sm table-hover">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in data" :key="client.id">
                        <td>{{ client.id }}</td>
                        <td>{{ client.name }}</td>
                        <td>{{ client.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {

    name: 'ListComponent',

    props: {
        data: Array,
        description: String,
        columns: Array
    }
}
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>