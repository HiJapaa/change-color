import './card.css'

const Card = ({text, color}) => {
    return (
        <p className="text" style={{color: color, textTransform: 'uppercase'}}>{text}</p>
    )
}

Card.defaultProps = {
    color: 'coral',
    text: 'Não foi passado texto como props'
}

export default Card