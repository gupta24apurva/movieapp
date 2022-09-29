import logo from './logo.svg';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SingleMovie from './components/SingleMovie';
import { AppProvider } from './components/Context';
function App() {
  return (
    <>
    <AppProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/:id" element={<SingleMovie/>}/>
    </Routes>
    </BrowserRouter>
    </AppProvider>
    </>
  );
}

export default App;
