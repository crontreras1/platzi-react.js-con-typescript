type Props = {
    image: string;
}

export const RandomFox = ({ image }: Props): JSX.Element => {
    return <img src={ image } className="w-96 h-auto"/>  
}