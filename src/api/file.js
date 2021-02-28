import repository from "./repository";

export default {
    getFiles: async () =>
    (await repository.instance.get(`files`)).data,

    upload: async (data) =>
    (await repository.instance.post(`files`, data)).data,

    delete: async (id) =>
    (await repository.instance.delete(`files/${id}`)).data
}
