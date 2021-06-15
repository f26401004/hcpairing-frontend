import axios from 'axios'
// Import the type defined in axios itself
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// Define the custom axios option type
type CustomAxiosOption = {
  baseURL: string,
  headers: {
    [key: string]: string
  },
  withCredentials: boolean,
}

// Define the parameter for truncated exponential backoff
const maxRetryTime = 3
const retryDelay = 1000

// Define the option for axios instance
const option: CustomAxiosOption = {
  baseURL: `${process.env.REACT_APP_API_SERVICE_URL}/${process.env.REACT_APP_API_SERVICE_VERSION}`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false,
}

const instance: AxiosInstance = axios.create(option)

// Set up the default timeout threshold
instance.defaults.timeout = 10000

instance.interceptors.request.use((request: AxiosRequestConfig): AxiosRequestConfig => {
  return request
})

instance.interceptors.response.use((response: AxiosResponse<any>): AxiosResponse<any> => {
  return response
}, async (error: any): Promise<any> => {
  const { config } = error
  // Reject if there is no config field
  if (!config) {
    return Promise.reject(error)
  }
  if (!error.response) {
    error.response = { data: 'Network Error' }
  }
  // Reject if the error is not caused at server side
  if (error.response.status !== 500) {
    return Promise.reject(error)
  }

  config.headers['x-retry-count'] = config.headers['x-retry-count'] || 0
  if (config.headers['x-retry-count'] >= maxRetryTime) {
    return Promise.reject(error)
  }

  config.headers['x-retry-count'] += 1

  // Create a new promise to handle exponential backoff
  const backoffDelay = (1 / 2) * Math.pow(2, config.headers['x-retry-count']) * retryDelay + Math.floor(Math.random() * 150 + 50)
  await new Promise((resolve) => {
    setTimeout(resolve, backoffDelay)
  })
  return instance(config)
})

export default instance
