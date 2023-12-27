'use client'

// Components
import { Card } from '@components'

//Hooks
import { usePromarketing } from '@hooks'

export default function Home() {
  const { data, isLoading, search, handleSearch } = usePromarketing()

  return (
    <main className="flex h-full w-full items-center justify-center">
      {isLoading ? (
        <h1 className="animate-ping text-xl font-bold">Loading...</h1>
      ) : (
        <div className="mx-auto flex w-2/3 flex-col items-center">
          <input
            className="mb-10 w-1/3 rounded-md border px-4 py-2"
            type="text"
            placeholder="Filter..."
            value={search}
            onChange={handleSearch}
          />
          <div className="flex flex-wrap justify-center gap-5">
            {data?.map(item => <Card key={item.id} {...item} />)}
          </div>
        </div>
      )}
    </main>
  )
}
