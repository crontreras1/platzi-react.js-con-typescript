import { useState } from 'react'
import { RandomFox } from '@/components/RandomFox'
import { NextPage } from 'next'

// Random number from 1 to 122
const randomImg = (): number => Math.floor(Math.random() * 122) + 1

// Generate unique id
const generateId = () => Math.random().toString(36).substr(2, 9)

type imageItem = { id: string, url: string }

const Home: NextPage = () =>  {
  const [ images, setImages ] = useState<Array<imageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${randomImg()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${randomImg()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${randomImg()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${randomImg()}.jpg` },
  ])
  return (
    <main>
      <h2>Hola, mundillo ;)</h2>
      { images.map((image) => (
        <div key={ image.id } className=' w-screen flex flex-col items-center p-4'>
          <RandomFox image={ image.url }/> 
        </div>
      ))}
    </main>
  )
}

export default Home
