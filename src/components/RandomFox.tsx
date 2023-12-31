import { useEffect, useRef, useState } from "react"
import type { ImgHTMLAttributes } from "react"

type LazyImageProsps = {
    src: string;
}

type Props = ImgHTMLAttributes<HTMLImageElement> & LazyImageProsps

export const RandomFox = ({ src, ...imgProps }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)

    const [currentSrc, setCurrentSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || !node.current) {
                    return
                }

                setCurrentSrc(src)
            })
        })

        if (node.current) {
            observer.observe(node.current)
        }

        return () => {observer.disconnect()}
    }, [src])

    return <img ref={ node } src={ src } className="w-96 h-auto rounded-none bg-gray-300"/>  
}