'use client'
import styled from "styled-components"
import dankLogo from '@/assets/dankapi.svg'
import Footer from "@/src/components/footer";
import Image from "next/image";

const Container = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 90vh;
`;

const Paragrafo = styled.p`
    marginTop: "15px"
`;

export default function Home() {
  return (
    <>
      <Container>
        <Image width={420} height={94} className='dankLogo' src={dankLogo.src} alt='Dank API' />
        <Paragrafo style={{  }}>Mantenha seu dispositivo conectado a tomada!</Paragrafo>
        <Image  width={84} height={84} src="https://cdn.7tv.app/emote/6438b85e8b0743b19d1a0ca8/3x.gif" alt="ppDVD" />
      </Container>
      <Footer />
    </>
  )
}
