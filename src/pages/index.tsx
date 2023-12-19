import { Inter } from 'next/font/google'
import { RandomFox } from '@/components/RandomFox'
import { NextPage } from 'next'
import exp from 'constants'

// const inter = Inter({ subsets: ['latin'] })

// Random number from 1 to 122
const randomImg = (): number => Math.floor(Math.random() * 122) + 1

const Home: NextPage = () =>  {
  return (
    <main>
      <h2>Hola, mundillo ;)</h2>
      <RandomFox image={ `https://randomfox.ca/images/${randomImg()}.jpg` }/> 
    </main>
  )
}

export default Home
