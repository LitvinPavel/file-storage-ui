<template>
  <footer>
    <div class="mx-3">{{ yearRange }}</div>
  </footer>
</template>

<script>
export default {
  name: "fs-footer",
  computed: {
    yearRange() {
      const date = new Date();
      return `${date.getFullYear() !== '2021' ? '2021 - ' : ''} ${date.getFullYear()}`;
    }
  }
}
</script>
