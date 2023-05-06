import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  background-color: var(--bs-white);
`;

export const Introtext = styled.div`
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 4rem;
    line-height: 110px;
    letter-spacing: -.03em;
    color: #020202;
`;

export const IntroParagraph = styled.p`
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: -.03em;
    color: #475467;
`;

export const IntroButton = styled.button`
    padding: 12px 32px;
    font-size: 1rem;
    line-height: 24px;
    font-family: "Inter",sans-serif;
    font-weight: 600;
    border-radius: 50px;
    display: inline-block;
    box-sizing: border-box;
    letter-spacing: -.02em;
    cursor: pointer;
    transition: .2s linear;
    color: #fff;
    background: #fa9e35;
    box-shadow: 0 10px 20px rgba(250,158,53,.4);
    border: transparent;

    &:hover {
        opacity: 0.9;
        transform: scale(1.01);
    }
`;

export const AsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 160px;
    font-family: "Inter",sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #475467;
    justify-content: space-between;
    align-self: center;
`;

export const AboutAside = styled.div`
    width: 50%;
    box-sizing: border-box;
    align-self: center;
`;

export const CardsAside = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    margin: 0 -12px;
    max-width: 1100px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;