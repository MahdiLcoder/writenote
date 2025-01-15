import Header from './Components/Header'
import Footer from './Components/Footer'
import AllRoutes from './routes/AllRoutes'
import './App.css'
import { useState } from 'react';

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
      <AllRoutes isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Footer />
    </>
  )
}
