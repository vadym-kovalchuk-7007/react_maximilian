import { useContext } from "react";
import useHttp from "../hooks/useHttp";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import ErrorC from "./ErrorC";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

const requestConfig = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
};
export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const {
		data,
		isLoading: isSending,
		error,
		sendRequest,
		clearData,
	} = useHttp("http://localhost:3000/orders", requestConfig);
	const cartTotal = cartCtx.items.reduce(
		(totalPrice, item) => totalPrice + item.quantity * item.price,
		0,
	);
	const handleClose = () => {
		userProgressCtx.hideCheckout();
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const fd = new FormData(event.target);
		const customerData = Object.fromEntries(fd.entries());
		sendRequest(
			JSON.stringify({
				order: {
					items: cartCtx.items,
					customer: customerData,
				},
			}),
		);
	};
	const handleFinish = () => {
		handleClose();
		cartCtx.clearCart();
		clearData();
	};

	let actions = (
		<>
			<Button textOnly type="button" onClick={handleClose}>
				Close
			</Button>
			<Button>Submit Order</Button>
		</>
	);
	if (isSending) {
		actions = <span>Sending order data...</span>;
	}
	if (data && !error) {
		return (
			<Modal
				open={userProgressCtx.progress === "checkout"}
				onClose={handleFinish}
			>
				<p>All good</p>
				<p className="modal-actions">
					<Button onClick={handleFinish}>Ok</Button>
				</p>
			</Modal>
		);
	}

	return (
		<Modal
			open={userProgressCtx.progress === "checkout"}
			onModalClose={handleClose}
		>
			<form onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
				<Input label="Full name" type="text" id="name" />
				<Input label="E-mail address" id="email" type="email" />
				<Input label="Street" type="text" id="street" />
				<div className="control-row">
					<Input label="Postal Code" type="text" id="postal-code" />
					<Input label="City" type="text" id="city" />
				</div>
				{error && <ErrorC title="Failed to submit order" message={error} />}
				<p className="modal-actions">{actions}</p>
			</form>
		</Modal>
	);
}
