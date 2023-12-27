import useSWR from 'swr'

// Utils
import { fetcher } from '@utils'
import { PromarketingModels } from '@models'

// Models

const usePromarketing = () =>
  useSWR<{
    data: PromarketingModels.Promarketing[]
  }>('/promarketing', fetcher)

export default usePromarketing
