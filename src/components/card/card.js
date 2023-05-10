import './card.css'

const Card = ({text, color}) => {
    return (
        <p className="text" style={{color: color, textTransform: 'uppercase'}}>{text}</p>
    )
}

export default Card