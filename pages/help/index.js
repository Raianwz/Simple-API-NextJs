'use client'
import '@/app/local.css'
import styled from "styled-components"
import Footer from "@/src/components/footer";
import Link from 'next/link'; 

const Container = styled.div`
display: flex;
font-family: 'Roboto';
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
overflow: hidden;
height: 90vh;
font-family: 'Roboto', sans-serif;
`;
const DestaqueSpan = styled.span`
    font-weight: bolder;
`;

const Paragrafo = styled.p`
    marginTop: "15px"
`;

export default function HelpPage() {
    return (
        <>
            <Container>
                <h1>Como utilizar o /moeda/</h1>
                <div>
                    <Paragrafo>/moeda<DestaqueSpan style={{color: 'greenyellow'}}>/USD-BRL/</DestaqueSpan> e /moeda<DestaqueSpan style={{color: 'greenyellow'}} >/usd-brl</DestaqueSpan> — Devolvem o valor atual Dolar Américano em Reais Brasileiros</Paragrafo>
                    <Paragrafo>/moeda/<DestaqueSpan style={{color: '#00b90f'}}>EUR-BRL</DestaqueSpan><DestaqueSpan style={{color: 'yellow'}}>/emote</DestaqueSpan> — Devolve o valor do euro em reais com um emote personalizado 🐸(Twitch/FFZ/7TV/BTTV)</Paragrafo>
                    <Paragrafo>/moeda/<DestaqueSpan style={{color: '#00b90f'}}>JPY-BRL/emote</DestaqueSpan> <span style={{ fontWeight: 'bolder', color: '#00ff00' }}>/true</span> — Devolve o valor do iene em reais com um emote personalizado no formato JSON</Paragrafo>
                </div>
                <div>
                    <Paragrafo style={{fontSize: 22,}}>Para ver todas as <Link style={{textDecoration: 'underline'}} href={'https://json-wz.vercel.app/moedas'}>combinações de moedas clique aqui</Link></Paragrafo>
                </div>
            </Container>
            <Footer />
        </>
    )
}