'use client'

import { usePromarketing } from '@hooks'

export default function Home() {
  const { data, isLoading, error } = usePromarketing()

  console.log({ data, isLoading, error })
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="mx-auto flex h-96 w-96">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum
        autem, ea consequuntur alias quae cum, ad, voluptas fugiat accusamus
        repellendus non rem iure eligendi. Temporibus nulla incidunt facere
        veniam?
      </div>
    </main>
  )
}
