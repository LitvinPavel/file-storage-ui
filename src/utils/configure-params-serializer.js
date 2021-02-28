import qs from "qs"

export default (axios) => {
  axios.defaults.paramsSerializer = params =>
    qs.stringify(params, { arrayFormat: "repeat" })
}
