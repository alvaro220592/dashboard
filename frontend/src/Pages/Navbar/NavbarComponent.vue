<template>
    <div>
        <nav>
            <button type="button" @click="sidebar_toggle">
                <i class="bi bi-list"></i>
            </button>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavbarComponent',

        methods: {
            sidebar_toggle() {
                let aside = document.querySelector('aside')

                if(!aside.classList.contains('sidebar_collapse')){
                    aside.classList.add('sidebar_collapse')
                }else{
                    aside.classList.remove('sidebar_collapse')
                }
            }
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>