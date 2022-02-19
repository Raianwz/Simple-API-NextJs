import IndexPage from '../src/components/IndexPage'
import chatwzLogo from '../src/assets/chatwz.svg'
import dankLogo from '../src/assets/dankapi.svg'
import rwz from '../src/assets/Raianwz.svg';

function DankHome() {
  return (
    <>
      <div className='container'>
        <img className='logo' src={chatwzLogo.src} alt='ChatWZ Logo' />
        <div style={{ display: 'inline-flex' }}>
          <img src="https://cdn.betterttv.net/emote/5e3ae53cd736527d5cd26e7b/3x" alt="DankHackerMans" className="dankImg" />
          <img className='dankLogo' src={dankLogo.src} alt='Dank API' />
        </div>
          <p style={{marginTop:"15px"}}>Mantenha seu dispositivo conectado a tomada!</p>
          <img src="https://cdn.7tv.app/emote/60af5ab898efcb4f69e3b20d/3x" alt="ppDVD"/>
      </div>

      <style jsx>{`
    .container{
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      flex: 1 1;
      -webkit-flex: 1 1;
    }
    img.logo{ pointer-events: none; }
    img.dankImg{
      width: auto;
      height: 51px;
      position: relative;
      z-index: 1000;
      left: 135px;
    }
    img.dankLogo{
      width: 80%;
    }
    img{
      -moz-user-select: -moz-none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
    h2{
      font-size: 2rem;;
      color: #ffffff;
    }
    `}
      </style>
    </>
  )
}

function Footer() {
  const Raianwz = rwz.src
  return (
    <>
    <div>
      <a href="https://github.com/raianwz" target="_blank" rel="noopener noreferrer">
        Powered by{' '}
        <img src={Raianwz} alt="Raianwz Logo" />
      </a>
    </div>
    <style jsx>{`
        div{
          border-top: 1px solid #c9d1d9;
          display: flex;
          flex-direction: column;
          height: 60px;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 1em;
          margin-left: 0.5rem;
          filter: brightness(60);
          transition: ease-in-out 1s;
        }
        img:hover{
          transition: ease-in-out 1s;
          filter: brightness(1);
        }
        a{
          padding-top: 5px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }

    `}</style>
    </>

  )
}



export default function Home() {
  return (<>
    <IndexPage />
    <div>
      <DankHome />
      <Footer />
    </div>
    <style jsx>{`
    div{
      display: flex;
      flex-direction: column;
    }
    `}</style>
  
  </>)
}
