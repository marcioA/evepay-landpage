import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  background-color: var(--bs-white);
  align-self: center;
  margin: 2rem;
  padding: 2rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
        width: 100%;
    }
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

    @media (max-width: 768px) {
        width: 100%;
    }
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

    @media (max-width: 768px) {
        width: 100%;
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

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

export const AboutAside = styled.div`
    width: 30%;
    box-sizing: border-box;
    align-self: center;

    h2 {
        line-height: 1;
        font-size: 36px;
        margin-bottom: 24px;
        font-weight: 700;
        letter-spacing: -.02em;
        color: #020202;
    }

    p {
        line-height: 1;
        font-size: 20px;
        margin-top: 0;
    }

    @media (max-width: 768px) {
            width: 100%;
        }
`;

export const CardsAside = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 -12px;
    max-width: 1100px;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;