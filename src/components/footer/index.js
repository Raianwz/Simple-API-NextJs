'use client'
import rwz from '@/assets/Raianwz.svg'
import styled from 'styled-components'
import Image from 'next/image';

const RodaPiano = styled.div`
border-top: 1px solid #c9d1d9;
display: flex;
flex-direction: column;
height: 60px;
width: 100%;
justify-content: center;
align-items: center;
`;

const Link = styled.a`
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

const ImageWrap = styled.span`
        margin-left: 0.5rem;
        & > img{
            filter: brightness(0.6);
            transition: ease-in-out 1s;
        }
        &:hover > img{
            transition: ease-in-out 1s;
            filter: brightness(1);
        }
`

export default function Footer() {
    return (
        <RodaPiano>
            <Link href="https://github.com/raianwz" target="_blank" rel="noopener noreferrer">
                Powered by{' '}
                <ImageWrap>
                    <Image src={rwz.src} width={100} height={60} alt="Raianwz Logo" />
                </ImageWrap>
            </Link>
        </RodaPiano>
    )
}