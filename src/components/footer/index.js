'use client'
import rwz from '@/assets/Raianwz.svg'
import styled from 'styled-components'

const rodapiano = styled.div`
border-top: 1px solid #c9d1d9;
display: flex;
flex-direction: column;
height: 60px;
width: 100%;
justify-content: center;
align-items: center;

`;
const Img = styled.img`
height: 1em;
margin-left: 0.5rem;
filter: brightness(0.5);
transition: ease-in-out 1s;
&:hover {
transition: ease-in-out 1s;
filter: brightness(1);
}
`;

export default function Footer() {
    return (
        <rodapiano>
            <a href="https://github.com/raianwz" target="_blank" rel="noopener noreferrer">
                Powered by{' '}
                <Img src={rwz.src} alt="Raianwz Logo" />
            </a>
            <style jsx>{`
            a{
            padding-top: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            }`}
            </style>
        </rodapiano>
    )
}