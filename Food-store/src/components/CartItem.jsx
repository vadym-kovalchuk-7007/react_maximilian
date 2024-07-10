import { currencyFormatter } from "../util/formatting";
export default function CartItem({
	quantity,
	name,
	price,
	onIncrease,
	onDecrease,
}) {
	return (
		<li className="cart-item">
			<p>
				{name} - {quantity} x {currencyFormatter.format(price)}
			</p>
			<p className="cart-item-actions">
				<button type="button" onClick={onDecrease}>
					-
				</button>
				<span>{quantity}</span>
				<button type="button" onClick={onIncrease}>
					+
				</button>
			</p>
		</li>
	);
}
