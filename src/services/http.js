import axios from "axios";

// Config
const API_URL     = import.meta.env.VITE_API_URL;
const API_VERSION = import.meta.env.VITE_API_VERSION;
const IS_DEV_MODE = import.meta.env.DEV;

// From data methods
// const form_data_methods = ['post', 'put','delete'];

// Create a instance of axios
const $axios = axios.create({baseURL: `${API_URL}/${API_VERSION}/`});

/**
 * Pre config of axios request
 */
$axios.interceptors.request.use((config) => {
    return config;
  },
  error => Promise.reject(error),
);

/**
 * Pre config of axios response
 */
$axios.interceptors.response.use((response) =>
  response,
  async (error) => {
    if (IS_DEV_MODE) {
      console.log(error);
    }
    return Promise.reject(error);
  },
);

const { get, post, put, patch, delete: remove } = $axios;
export { get, post, put, patch, remove };
