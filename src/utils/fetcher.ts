import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://demo8881327.mockable.io/',
})

const fetcher = (url: string) => api.get(url).then(res => res.data)

export default fetcher
