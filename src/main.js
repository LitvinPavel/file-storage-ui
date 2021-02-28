import "./utils/setup/polyfills";
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import axios from 'axios';
import "./utils/setup/base-views";
import * as api from "./api"

// configure filestorageApi
const fileStorageApiInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
  })
  api.configure(fileStorageApiInstance)

createApp(App).use(router).mount('#app');
