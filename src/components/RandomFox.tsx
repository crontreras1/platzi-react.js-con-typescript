export const RandomFox = (): JSX.Element => {
    const randomImg = (): number => Math.floor(Math.random() * 123) + 1
    const image: string = `https://randomfox.ca/images/${randomImg()}.jpg`
    return <img src={ image }/>  
}