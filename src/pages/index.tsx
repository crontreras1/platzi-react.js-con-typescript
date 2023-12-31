import { useState } from 'react'
import { MouseEventHandler } from 'react'
import { RandomFox } from '@/components/RandomFox'
import { NextPage } from 'next'

// Random number from 1 to 122
const randomImg = (): number => Math.floor(Math.random() * 122) + 1

// Generate unique id
const generateId = () => Math.random().toString(36).substr(2, 9)

const Home: NextPage = () =>  {
  const [ images, setImages ] = useState<Array<IFoxImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: IFoxImageItem = {
      id: generateId(), 
      url:`https://randomfox.ca/images/${randomImg()}.jpg`
    }

    setImages([ ...images, newImageItem])
  }

  return (
    <main>
      <h2>Hola, mundillo ;)</h2>
      <button onClick={ addNewFox }>Add new fox</button>
      { images.map(({ id, url }) => (
        <div key={ id } className=' w-screen flex flex-col items-center p-4'>
          <RandomFox src={ url }/> 
        </div>
      ))}
    </main>
  )
}

export default Home
