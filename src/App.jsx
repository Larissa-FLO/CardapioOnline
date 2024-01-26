import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>

        <span><img src='./src/img/LogoQuentinhas.png'></img></span>

        <div className='refeicoes'>
          <button><img src='./src/img/almoco.svg' className='icones'/><span>Almoço</span></button>
          <button><img src='./src/img/jantar.svg' className='icones'/><span>Jantar</span></button>
          <button><img src='./src/img/sobremesa.svg' className='icones'/><span>Sobremesas</span></button>
          <button><img src='./src/img/bebidas.svg' className='icones'/><span>Bebidas</span></button>
        </div>

        <div className='contato'>
        <span><img src='./src/img/whatsapp.svg'></img></span>
        <span><img src='./src/img/instagram.svg'></img></span>
        </div>

      </div>

      <div className='cafeDaManha'>

      </div>

      <div className='almoco'>

      </div>

      <div className='jantar'>

      </div>

      <div className='bebidas'>

      </div>
    </>
  )
}

export default App
