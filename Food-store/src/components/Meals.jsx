import useHttp from "../hooks/useHttp";
import ErrorC from "./ErrorC";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
	const {
		data: loadedMeals,
		isLoading,
		error,
	} = useHttp("http://localhost:3000/meals", requestConfig, []);

	if (isLoading) return <p className="center">Fetching data</p>;
	if (error) return <ErrorC title="Failed fetch meals" message={error} />;
	return (
		<ul id="meals">
			{loadedMeals.map((el) => (
				<MealItem meal={el} key={el.id} />
			))}
		</ul>
	);
}
