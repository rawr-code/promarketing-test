import useSWR from 'swr'

// Utils
import { fetcher } from '@utils'

// Models
import { PromarketingModels } from '@models'

const usePromarketing = () => {
  const { data } = useSWR<PromarketingModels.Promarketing[]>(
    '/promarketing',
    fetcher,
  )

  const immutableData = [...(data ?? [])]

  const convertPercentToNumber = (value: string) =>
    Number(value.replace('%', ''))

  // Sort by RTP
  immutableData?.sort(
    (a, b) =>
      convertPercentToNumber(a.info.rtp) - convertPercentToNumber(b.info.rtp),
  )
  // Sort by Status
  immutableData?.sort((a, b) => Number(a.disabled) - Number(b.disabled))

  return { data: immutableData }
}

export default usePromarketing
