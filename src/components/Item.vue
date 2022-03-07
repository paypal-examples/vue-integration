<script>
export default {
  name: 'Checkout-Item',
};
</script>

<template>
  <div class="item">
    <img
      class="item"
      src="../assets/trinity-nguyen-5r9mk1ngjN8-unsplash.jpg"
      alt="Desk plant"
    />
    <div class="caption">
      Photo by
      <a
        href="https://unsplash.com/@trinwin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Trinity Nguyen</a
      >
      on
      <a
        href="https://unsplash.com/s/photos/desk-plant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Unsplash</a
      >
    </div>
  </div>
</template>

<style scoped>
img {
  border: 1px solid darkgray;
}
.caption {
  font-size: 11px;
}
</style>
