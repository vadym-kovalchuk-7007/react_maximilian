import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals(params) {
	const [loadedMeals, setLoadedMeals] = useState([]);
	useEffect(() => {
		async function fetchMeals() {
			try {
				const response = await fetch("http://localhost:3000/meals");
				if (!response.ok) {
				}
				const meals = await response.json();
				setLoadedMeals(meals);
			} catch (err) {}
		}
		fetchMeals();
	}, []);

	return (
		<ul id="meals">
			{loadedMeals.map((el) => (
				<MealItem meal={el} key={el.id} />
			))}
		</ul>
	);
}
