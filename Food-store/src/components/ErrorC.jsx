export default function ErrorC({ title, message }) {
	return (
		<div className="error">
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
}
