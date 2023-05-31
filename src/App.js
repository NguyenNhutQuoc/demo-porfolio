import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Poster from './components/Poster/Poster';
import Header from './components/Header';
import ContentChoose from './components/Content/ContentChoose';
import ProjectList from './components/Content/ProjectList';

function App() {
  return (
    <>
      <Navbar />
      <Poster />
      <ContentChoose />
      <ProjectList />
    </>
  );
}

export default App;
