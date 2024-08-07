import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputFieldClasses =
    "w-full p-1 border-b-2 rounded-s-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={inputFieldClasses} {...props} />
      ) : (
        <input ref={ref} className={inputFieldClasses} {...props} />
      )}
    </p>
  );
});

export default Input;
