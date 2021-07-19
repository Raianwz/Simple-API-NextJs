import styled from 'styled-components'
import IndexPage from '../src/components/IndexPage'
import chatwzLogo from '../src/assets/chatwz.svg'
import rwz from '../src/assets/raianwz.svg'
const Main = styled.main`
    .container{
      margin-top: 5em;
      text-align: center;
      justify-content: center;
      align-items: center;
      min-height:71vh;
      flex: 1 1;
      -webkit-flex: 1 1;
    }
    img{
      display: block;
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
    .dankImg{
      margin-left: auto;
      margin-right: auto;
    }
`
const Logo = styled.img`
    width: 40%;
    margin-left: auto;
    margin-right: auto;
`;

const Footer = styled.footer`
    border-top: 1px solid #c9d1d9;
    display: flex;
    height:100px;
    width: 100%;
    justify-content: center;
    align-items: center;
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
`;

export default function Home() {
  const LogoChatWZ = chatwzLogo.src
  const Raianwz = rwz.src
  return (<>
    <IndexPage />
      <Main>
        <div className="container">
          <Logo src={LogoChatWZ} alt="Logo ChatWZ" />
          <h2>Dank APIs</h2>
          <img src="https://cdn.betterttv.net/emote/5e3ae53cd736527d5cd26e7b/3x" alt="DankHackerMans" className="dankImg" />
        </div>
      </Main>
      <Footer>
        <a href="https://github.com/raianwz" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <img src={Raianwz} alt="Raianwz Logo" />
        </a>
      </Footer>
  </>)
}
