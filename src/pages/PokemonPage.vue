<template>
  <h1>Who is this Pokemon?</h1>
  <Picture />

  <Options />
</template>

<script>
import Options from "@/components/Options.vue";
import Picture from "@/components/Picture.vue";
export default {
  components: {
    Options,
    Picture,
  },
};
</script>

<style></style>
