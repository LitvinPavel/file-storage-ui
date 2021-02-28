<template>
  <aside class="flex-shrink-0 bg-gray-100">
    <div class="sticky top-0 pb-2">
      <div class="ba-leading-none">
        <ul>
          <li
            v-for="({ title }, index) in mainNav"
            :key="index"
            @click="onClose"
          >
            <span class="layout__sidebar-item">{{ title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "fs-sidebar",
  data() {
    return {
      mainNav: [
        {
          title: "Главная"
        },
        {
          title: "Услуги и поддержка"
        }
      ]
    };
  },
  methods: {
    onClose() {
      this.$emit("close");
    }
  }
};
</script>
