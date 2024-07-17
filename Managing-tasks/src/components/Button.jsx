export default function Button({ children, ...props }) {
  return (
    <button
      type="button"
      className="rounded-md bg-stone-700 px-4 py-2 text-xs text-stone-400 hover:bg-stone-600 hover:text-stone-100 md:text-base"
      {...props}
    >
      {children}
    </button>
  );
}
