import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './Layout';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
  <BrowserRouter> 
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
    </Route>
    </Routes>
  </BrowserRouter>
  // <HomePage/>
  );
}

export default App;

// function HomePage(){
//   return (    <main>
//     <Post/>
//     <Post/>
//   </main>)
// }