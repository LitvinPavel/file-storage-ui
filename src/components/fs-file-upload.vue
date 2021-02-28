<template>
  <label :for="`upload-file-${id}`" title="Загрузить файл" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
    <slot name="default" />
    <slot name="file" :file="file" />
  </label>
  <input
    type="file"
    :id="`upload-file-${id}`"
    class="hidden"
    ref="file"
    @change="onUpload"
  />
</template>

<script>
import * as api from "@/api";

export default {
  name: "fs-file-upload",
  data() {
    return {
      id: this._uid,
      loading: false,
      error: false,
      file: null,
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    onUpload({ target }) {
      const file = target.files[0];
      if (file) {
        this.file = file;
        let data = new FormData();
        data.append("file", file);
        this.upload(data);
      }
    },
    async upload(data) {
      try {
        await api.file.upload(data);
        this.$emit("uploaded");
        this.reset();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    reset() {
      this.file = null;
      this.$refs.file.value = "";
    },
  },
};
</script>