import styled from 'styled-components';

export const main = styled.div`
    display: flex;
    justify-content: center;
`

export const building = styled.div`
    margin-top: 2rem;
    width: 50vw;
    height: 80vh;
    background-color: rgb(88, 88, 88);
    display: grid;
    justify-items: center;
    align-items: center;

    grid-template-columns: 1fr 1fr;

    @media (min-width: 700px) {
        width: 25vw;
    }
`

export const footer = styled.footer`

    background-color: rgb(172, 172, 172);
    height: 15vh;
    display: flex;
    width: 100vw;
    align-items: center;
`;

export const button = styled.button`
    width: 15vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
`