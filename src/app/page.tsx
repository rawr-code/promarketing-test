'use client'

import { Card } from '@components'
//Hooks
import { usePromarketing } from '@hooks'

export default function Home() {
  const { data } = usePromarketing()

  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="mx-auto flex w-2/3 flex-col items-center">
        <input
          className="mb-10 w-1/3 rounded-md border px-4 py-2"
          type="text"
          placeholder="Filter..."
        />
        <div className="flex flex-wrap justify-center gap-5">
          {data?.map(item => <Card key={item.id} {...item} />)}
        </div>
      </div>
    </main>
  )
}
