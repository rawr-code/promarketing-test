import { useState } from 'react'
import useSWR from 'swr'

// Utils
import { fetcher } from '@utils'

// Models
import { PromarketingModels } from '@models'

const usePromarketing = () => {
  const { data, isLoading } = useSWR<PromarketingModels.Promarketing[]>(
    '/promarketing',
    fetcher,
  )
  const [search, setSearch] = useState('')

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

  const filteredData = !search
    ? immutableData
    : immutableData.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearch(value)
  }

  return { data: filteredData, isLoading, search, handleSearch }
}

export default usePromarketing
