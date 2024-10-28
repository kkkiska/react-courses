import './CostItem.css' 

export default function CostItem({price, description, date}) {
    console.log(price);
    return (
    <div className="cost-item">
        <div className="cost-item__description">
            <h2>{description}</h2>
            <div className="cost-item__price">${price}</div>
        </div>
    </div>
    )
}