<template>
  <div class="text-gray-900">
    <div class="p-4 flex">
      <h1 class="text-3xl">Files</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-gray-100 shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">Name</th>
            <th class="text-left p-3 px-5">Extension</th>
            <th class="text-left p-3 px-5">Size</th>
            <th class="text-left p-3 px-5">Date</th>
            <th class="p-3 px-5 flex justify-end">
              <fs-file-upload @uploaded="reloadData" class="ml-auto">
                <template v-slot="{ file }">
                  <span>Добавить</span>
                  <span>{{ getFileName(file) }}</span>
                </template>
              </fs-file-upload>
            </th>
          </tr>
          <tr v-for="{ _id: id, filename, metadata, chunkSize, uploadDate } in files" :key="id" class="border-b hover:bg-orange-100 bg-gray-100">
            <td class="p-3 px-5">
              <span class="bg-transparent">{{ filename }}</span>
            </td>
            <td class="p-3 px-5">
              <span class="bg-transparent">{{ metadata.extension }}</span>
            </td>
            <td class="p-3 px-5">
              <span class="bg-transparent">{{ chunkSize }}</span>
            </td>
            <td class="p-3 px-5">
              <span class="bg-transparent">{{ uploadDate }}</span>
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="onRemove(id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as api from "@/api";
import FsFileUpload from "@/components/fs-file-upload";

export default {
  name: "fs-home-page",
  components: {
    FsFileUpload,
  },
  data() {
    return {
      files: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    reloadData() {
      this.fetchData();
    },
    onRemove(id) {
      if (id) this.remove(id);
    },
    async fetchData() {
      try {
        this.files = await api.file.getFiles();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async remove(id) {
      try {
        await api.file.delete(id);
        this.reloadData();
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    getFileName(file) {
      return (file || {}).name || null;
    },
  },
};
</script>
