'use client'
import styled from "styled-components"
import dankLogo from '@/assets/dankapi.svg'
import Footer from "@/src/components/footer";

const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 90vh;
`;

export default function Home() {
  return (
    <>
      <Container>
        <img className='dankLogo' src={dankLogo.src} alt='Dank API' />
        <p style={{ marginTop: "15px" }}>Mantenha seu dispositivo conectado a tomada!</p>
        <img src="https://cdn.7tv.app/emote/6438b85e8b0743b19d1a0ca8/3x.gif" alt="ppDVD" />
      </Container>
      <Footer />
    </>
  )
}
