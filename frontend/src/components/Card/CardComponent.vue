<template>
  <div class="col-md-4 card_container">
    <div class="card">
      <div class="card-body">
        <header>
            <span class="">{{ titulo }}</span><slot name="icon"></slot>
        </header>
        <section>
            <p class="card-text">{{ conteudo }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",

  props: {
      titulo: String,
      conteudo: String,
  }
};
</script>

<style lang="scss" src="./style.scss" scoped>
</style>