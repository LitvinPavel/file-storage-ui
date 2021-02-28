<template>
    <fs-header v-model="showSidebar" />
    <div class="flex flex-grow">
      <transition name="slide-in-right">
        <fs-sidebar
          v-show="showSidebar"
          class="layout__sidebar"
          @close="showSidebar = false"
        />
      </transition>
      <main class="layout__content">
        <router-view />
      </main>
    </div>
    <fs-footer />
    <transition name="fade-in">
      <div v-if="showSidebar" class="backdrop lg:hidden z-30" @click="showSidebar = !showSidebar" />
    </transition>
</template>

<script>
import FsHeader from "./fs-header";
import FsFooter from "./fs-footer";
import FsSidebar from "./fs-sidebar";

export default {
    name: "fs-layout",
    components: {
        FsSidebar,
        FsFooter,
        FsHeader
    },
    data() {
    return {
      showSidebar: false
    }
  },
}
</script>