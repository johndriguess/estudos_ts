type buttonProps = {
    text: string;
    evento: () => void;
}

const Button: React.FC<buttonProps> = ({text, evento}) => {
    return <button onClick={evento}>{text}</button>
}

export default Button;