import { Inter } from 'next/font/google'
import { RandomFox } from '@/components/RandomFox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h2>Hola, mundillo ;)</h2>
      <RandomFox /> 
    </main>
  )
}
