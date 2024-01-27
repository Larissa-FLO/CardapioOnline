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

      <div className='cardapio'>
        <span><img src='https://revistazelo.com.br/wp-content/uploads/2022/04/pascoa-bacalhau-1.jpg'></img></span>
        <span><ul>
          <li>Frango à parmegiana com molho artesanal........35,00</li>
          <li>Cupim assado com legumes.......................40,00</li>
          <li>Surubim assado com alecrim e batatas...........30,00</li>
          <li>Nhoque de batata com molho artesanal...........28,50</li>
          <li>Escondidinho de aipim com charque..............32,50</li>
          <li>Lasanha de berinjela com queijo................25,80</li>
          <li>Salada de grão de bico, tomate cereja e manjericão...22.50</li>
          <br /><br /><br /><br /><br />
          <li>*Todos os pratos acompanham arroz, feijão e salada à escolha*</li>
          </ul></span>
      </div>

      <div className='cardapio'>
        <span><ul>
          <li>Sopa de mandioquinha com costela.............35,00</li>
          <li>Cuscuz com queijo e charque..................40,00</li>
          <li>spaghetti ao molho com almôndegas............30,00</li>
          <li>Risoto de cogumelos..........................28,50</li>
          <li>Wrap de frango com salada....................32,50</li>
          <li>Hambúrguer de quinoa com batata doce frita...25,80</li>
          </ul></span>
          <span><img src='https://s2-casaejardim.glbimg.com/z2K-P5HrGgeBGgz0hLGKcHW_PiU=/0x0:1400x933/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/j/d/zvLOkATPA5B8LEnVYBbw/receita-cuscuz-carne-seca-queijo-coalho-cebola-nina-cafe-sp.jpg'></img></span>
      </div>

      <div className='cardapio'>
        <span><img src='https://nutricao.flormel.com.br/imagens/largeblog/sobremesas-veganas-imagem-destacada.jpg'></img></span>
        <span><ul>
          <li>Taça de morangos com chantilly.............35,00</li>
          <li>Frutas assadas com mel e canela............40,00</li>
          <li>Tigela de sorvete de frutas................30,00</li>
          <li>Torta de maçã..............................28,50</li>
          <li>Torta de chocolate com ganache.............32,50</li>
          <li>Barra de chocolate recheada da casa........25,80</li>
          </ul></span>
      </div>

      <div className='cardapio'>
        <span><ul>
          <li>Refrigerante lata.............35,00</li>
          <li>Refrigerante 1L...............40,00</li>
          <li>Suco natural..................30,00</li>
          <li>Chá gelado de pêssego.........28,50</li>
          <li>Coquetel de frutas citrus.....32,50</li>
          <li>Cerveja longneck..............25,80</li>
          </ul></span>
          <span><img src='https://img.freepik.com/fotos-premium/bebidas-refrescantes-coloridas-para-o-verao-suco-de-limonada-de-morango-gelado-com-cubos-de-gelo-nos-copos-enfeitados-com-limoes-frescos-fatiados_211786-2181.jpg'></img></span>
      </div>
    </>
  )
}

export default App
