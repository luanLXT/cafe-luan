<template>
  <div>
    <h1>Configurar Pedido</h1>
    <PedidoComponent :cafe="cafeSelecionado" />
  </div>
</template>
<script>
import PedidoComponent from "@/components/PedidoComponent.vue";

export default {
  name: "ConfiguracaoPedidoView",
  components: {
    PedidoComponent,
  },
  data() {
    return {
      cafeSelecionado: null,
    };
  },
  mounted() {
    const cafeJson = this.$route.query.cafe;
    if (cafeJson) {
      try {
        this.cafeSelecionado = JSON.parse(decodeURIComponent(cafeJson));
      } catch (erro) {
        this.cafeSelecionado = null;
      }
    }
  },
};
</script>