<script>
import CardView from "./CardView.vue";

export default {
  components: {
    CardView,
  },
};
</script>
<template>
  <div class="game-board">
    <ul class="cards">
      <li>
        <CardView viewType="front" />
        <CardView
          viewType="back"
          :imageUrl="cardInfo.url"
          :imageAltText="cardInfo.altText"
        />
      </li>
    </ul>
  </div>
</template>
