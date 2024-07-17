import noProjectSelectedImg from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectSelectedImg}
        alt="No project selected"
        className="mx-auto h-16 w-16 object-contain"
      />
      <h2 className="mt-4 text-xl font-bold text-stone-500">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
