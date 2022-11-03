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

                if(!aside.classList.contains('aside_collapse')){
                    aside.classList.add('aside_collapse')
                }else{
                    aside.classList.remove('aside_collapse')
                }
            }
        }
    }
</script>

<style lang="scss" src="./style.scss" scoped>
    
</style>