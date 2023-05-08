import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: #000;
    padding: 80px 0;
    font-family: "Inter",sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #FFF;
`;

export const InfoContainer = styled.div`
    position: relative;
    max-width: 1740px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: initial;
    padding: 80px 0;
    font-size: 16px;
    line-height: 28px;

    display: flex;
    justify-content: space-between;

    h3{
        margin-bottom: 22px;
        font-size: 26px;
        line-height: 34px;
        letter-spacing: -.02em;
    }

    p{
        font-size: 20px;
        margin-bottom: 30px;
        line-height: 26px;
    }
`;

export const CompanyInfo = styled.div`
    width: 360px;
`;

export const SocialLogos = styled.div`
    display: flex;
    align-items: center;   
    box-sizing: border-box; 
    font-size: 16px;
    line-height: 28px;
    margin: 1rem;
`;

export const MapSite = styled.div`
    width: calc(100% - 380px);
    display: flex;
    justify-content: space-between;
    max-width: 900px;
    font-size: 16px;
    line-height: 28px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(33.3% - 10px);
    font-size: 16px;
    line-height: 28px;

    a{
        &:not(:disabled):hover{
            cursor: pointer;
            text-decoration: underline !important;
            color: "#5e5df0";
        }   

        &:disabled {
            cursor: not-allowed;
            pointer-events: all;
        }
    }
    
`;
