import repository from "./repository";

export default {
    getFiles: async () =>
    (await repository.instance.get(`files`)).data
}
