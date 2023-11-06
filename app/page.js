import Image from 'next/image'
import Filter from './components/Filter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Filter />
    </main>
  )
}
