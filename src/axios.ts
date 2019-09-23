import { AxiosInstance } from "./types";
import Axios from "./core";
import { extend } from "./helpers/utli";

function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios