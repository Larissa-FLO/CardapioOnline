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

        <div className='menu'>
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

    <div className='boxMaior'>
      <div className='container1'>
        <div className='cardapio1'>
          <span><img src='./src/img/almoco.png'></img></span>
          <div className='refeicoes'>
              <span><ul>
                <li>Frango à parmegiana com molho artesanal.....35,00</li>
                <li>Cupim assado com legumes....................40,00</li>
                <li>Surubim assado com alecrim e batatas........30,00</li>
                <li>Nhoque de batata com molho artesanal........28,50</li>
                <li>Escondidinho de aipim com charque...........32,50</li>
                <li>Lasanha de berinjela com queijo.............25,80</li>
                <li>Salada de grão de bico......................22.50</li>
                <br /><br /><br /><br /><br />
                <li className='aviso'>*Todos os pratos acompanham arroz, feijão e salada à escolha*</li>
                </ul></span>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='cardapio2'>
          <div className='refeicoes'>
            <span><ul>
              <li>Sopa de mandioquinha com costela.............35,00</li>
              <li>Cuscuz com queijo e charque..................40,00</li>
              <li>spaghetti ao molho com almôndegas............30,00</li>
              <li>Risoto de cogumelos..........................28,50</li>
              <li>Wrap de frango com salada....................32,50</li>
              <li>Hambúrguer de quinoa com batata doce frita...25,80</li>
              </ul></span>
          </div>
          <span><img src='./src/img/jantar.png'></img></span>
        </div>
      </div>

      <div className='container1'>
        <div className='cardapio1'>
          <span><img src='./src/img/sobremesa.png'></img></span>
          <div className='refeicoes'>
            <span><ul>
              <li>Taça de morangos com chantilly.............35,00</li>
              <li>Frutas assadas com mel e canela............40,00</li>
              <li>Tigela de sorvete de frutas................30,00</li>
              <li>Torta de maçã..............................28,50</li>
              <li>Torta de chocolate com ganache.............32,50</li>
              <li>Barra de chocolate recheada da casa........25,80</li>
              </ul></span>
          </div>
        </div>
      </div>

      <div className='container2'>
        <div className='cardapio2'>
          <div className='refeicoes'>
            <span><ul>
              <li>Refrigerante lata............................35,00</li>
              <li>Refrigerante 1L..............................40,00</li>
              <li>Suco natural.................................30,00</li>
              <li>Chá gelado de pêssego........................28,50</li>
              <li>Coquetel de frutas citrus....................32,50</li>
              <li>Cerveja longneck.............................25,80</li>
              </ul></span>
          </div>
          <span><img src='./src/img/bebidas.png'></img></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
