import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SelectedProject from './components/SelectedProject'
import Sidebar from './components/Sidebar'

function App() {
  const [projectState, setProjectState] = useState({
    projects: [],
    selectedProjectId: undefined,
    tasks: [],
  })

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined, //projectId
        projects: [...prevState.projects, newProject],
      }
    })
  }

  const handleCancel = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined }
    })
  }

  const handleSelectProject = (id) => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id }
    })
  }

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      }
    })
  }

  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const taskId = Math.random()
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text,
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      }
    })
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId,
  )

  let content

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if (projectState.selectedProjectId) {
    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectState.tasks}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    )
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  )
}

export default App
