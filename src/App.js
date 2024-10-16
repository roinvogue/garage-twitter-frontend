import LoginForm from './Components/LoginForm/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPW from './Components/LoginForm/ForgotPW';
import Register from './Components/LoginForm/Register';

function App() {
  return (
    <div>
      <LoginForm />
    </div>

  );
}

export default function Appp() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginForm/>} />
          <Route path="/ForgotPW" element={<ForgotPW/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
  }


