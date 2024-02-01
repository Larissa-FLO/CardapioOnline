import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>

        <span><img src="https://document-export.canva.com/T_2nk/DAF7AoT_2nk/10/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T053135Z&X-Amz-Expires=45585&X-Amz-Signature=293c97c899252ce3ddcb8469a4278323cfb83c52f0ebbc39675905fb60ffaecc&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2001%20Feb%202024%2018%3A11%3A20%20GMT"></img></span>

        <div className='menu'>
          <button><img src='https://i.imgur.com/FUqpQKI.png/img/almoco.svg'/><span>Almoço</span></button>
          <button><img src='https://i.imgur.com/AanIUT4.png'/><span>Jantar</span></button>
          <button><img src='https://i.imgur.com/TOXovgR.png'/><span>Sobremesas</span></button>
          <button><img src='https://i.imgur.com/QKscECH.png'/><span>Bebidas</span></button>
        </div>

        <div className='contato'>
        <span><img src='https://www.svgrepo.com/show/452133/whatsapp.svg'></img></span>
        <span><img src='https://www.svgrepo.com/show/303154/instagram-2016-logo.svg'></img></span>
        </div>

      </div>

      <hr />

    <div className='boxMaior'>
      <div className='container1'>
        <div className='cardapio1'>
          <span><img src='https://document-export.canva.com/URK0I/DAF7gaURK0I/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T004920Z&X-Amz-Expires=65437&X-Amz-Signature=c77cd4861573da1dd2a9c7defef1b1b56563d6a0ab5c4cefa6149cdfed5a1ae4&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2001%20Feb%202024%2018%3A59%3A57%20GMT'></img></span>
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
          <span><img src='https://document-export.canva.com/EPrPs/DAF7gREPrPs/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240131T212345Z&X-Amz-Expires=76563&X-Amz-Signature=f18dcfc27142fbdf4c75e5ae8e8981e8b24a2fa56dddbb1b63704475cd358949&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2001%20Feb%202024%2018%3A39%3A48%20GMT'></img></span>
        </div>
      </div>

      <div className='container1'>
        <div className='cardapio1'>
          <span><img src='https://document-export.canva.com/6vg8E/DAF7gB6vg8E/21/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T101223Z&X-Amz-Expires=30099&X-Amz-Signature=5668836aa8ead68bced86c0baaca8f1dfd76bfb6ffc7552786f8aecf3738d4cc&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2001%20Feb%202024%2018%3A34%3A02%20GMT'></img></span>
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
          <span><img src='https://document-export.canva.com/7K8og/DAF7gS7K8og/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T063342Z&X-Amz-Expires=43970&X-Amz-Signature=c20912edb3c3a9ce267ada4654ba79b97f64b17d74cfb1333de331e57bf52071&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2001%20Feb%202024%2018%3A46%3A32%20GMT'></img></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
