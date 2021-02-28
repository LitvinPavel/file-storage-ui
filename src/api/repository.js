import configureParamsSerializer from "@/utils/configure-params-serializer";

let axiosInstance = null;

export const configure = axios => {
  configureParamsSerializer(axios)
  axiosInstance = axios
}

export default {
  get instance() {
    if (!axiosInstance) {
      throw new Error("This repository not configured. Call configure method.")
    }

    return axiosInstance
  }
};
