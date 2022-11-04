<template>
    <main>
        <section id="login-card" class="card">
            <header class="login-header">
                <h1>Login</h1>
            </header>

            <form action="" method="post">
                <input type="text" placeholder="Usuário" class="input-text form-control">
                <input type="password" placeholder="********" class="input-text form-control">
                <button type="submit" @click.prevent="login" class="btn btn-login form-control">Entrar</button>
            </form>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'LoginComponent',

        data() {
            return {
                
            }
        },

        methods: {
            login() {
                this.$router.push({name: 'home'})
            }
        }
        
    }
</script>

<style lang="scss" src="./style.scss" scoped>

</style>
