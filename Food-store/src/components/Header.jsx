import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";

export default function Header() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const totalCartItems = cartCtx.items.reduce(
		(totalNumber, item) => totalNumber + item.quantity,
		0,
	);
	const handleShowCart = () => {
		userProgressCtx.showCart();
	};
	return (
		<header id="main-header">
			<div id="title">
				<img alt="Img" src={logoImg} />
				<h1>Some header</h1>
			</div>
			<nav>
				<Button type="button" textOnly onClick={handleShowCart}>
					Cart ({totalCartItems})
				</Button>
			</nav>
		</header>
	);
}
