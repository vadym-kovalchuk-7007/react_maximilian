import { createContext, useState } from "react";
const UserProgressContext = createContext({
	progress: "",
	hideCart: () => {},
	hideCheckout: () => {},
	showCart: () => {},
	showCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
	const [userProgress, setUserProgress] = useState("");
	const showCart = () => {
		setUserProgress("cart");
	};
	const hideCart = () => {
		setUserProgress("");
	};
	const showCheckout = () => {
		setUserProgress("checkout");
	};
	const hideCheckout = () => {
		setUserProgress("");
	};
	const userProgressContext = {
		progress: userProgress,
		hideCart,
		hideCheckout,
		showCart,
		showCheckout,
	};
	return (
		<UserProgressContext.Provider value={userProgressContext}>
			{children}
		</UserProgressContext.Provider>
	);
}

export default UserProgressContext;
