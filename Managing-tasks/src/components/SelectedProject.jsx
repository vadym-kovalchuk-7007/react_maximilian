export default function SelectedProject({ project }) {
  const formatedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="mt-16 w-[35rem]">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {project.title}
          </h1>
          <button type="button" className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="whitespace-pre-wrap text-stone-600">
          {project.description}
        </p>
      </header>
    </div>
  );
}
