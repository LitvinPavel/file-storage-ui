<template>
  <div>
    <ul v-if="files.length">
      <li v-for="{ _id: id, filename } in files" :key="id">
        {{ filename }}
      </li>
    </ul>
    <fs-btn>btn</fs-btn>
  </div>
</template>

<script>
import * as api from "@/api";
export default {
  name: "fs-home-page",
  data() {
    return {
      files: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.files = await api.file.getFiles();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
  },
};
</script>
