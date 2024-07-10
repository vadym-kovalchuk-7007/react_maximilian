import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import CartItem from "./CartItem";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

export default function Cart(params) {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
		return totalPrice + item.quantity * item.price;
	}, 0);
	const closeModalHandler = () => {
		userProgressCtx.hideCart();
	};

	return (
		<Modal className="cart" open={userProgressCtx.progress === "cart"}>
			<h2>Your cart</h2>
			<ul>
				{cartCtx.items.map((item) => (
					<CartItem
						price={item.price}
						quantity={item.quantity}
						name={item.name}
						key={item.id}
						onIncrease={() => {
							cartCtx.addItem(item);
						}}
						onDecrease={() => {
							cartCtx.removeItem(item.id);
						}}
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
			<p className="modal-actions">
				<Button textOnly onClick={closeModalHandler}>
					Close
				</Button>
				{cartCtx.items.length > 0 && <Button>Go to Checkout</Button>}
			</p>
		</Modal>
	);
}
