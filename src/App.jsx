import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { ProjectCard } from './components/project card/ProjectCard';

function App() {
  return (
    <>
      <Navbar/>
      <ProjectCard title={"Snake on CMD"}/>
      <ProjectCard title={"WrireShip"}/>
    </>
  )
}

export default App
