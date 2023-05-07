import styled from 'styled-components';

export const Container = styled.div`
    background: #dcf7f0;
    border-radius: 12px;
    cursor: pointer;
    margin: 12px;
    overflow: hidden;
    padding: 24px;
    position: relative;
    transition: .2s linear;
    width: calc(50% - 24px);

    &::before{
        box-sizing: border-box;
    }

    & :nth-child(1) {
        border-radius: 50%;
    }

    &:hover{
        background: linear-gradient(116.3deg,#15fbbf,#019f77);
        & :nth-child(1) {
            background-color: #fff;
        }
    }
`;

export const BalloonIcon = styled.div`
    width: 50px;
    height: 50px;
    margin-bottom: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    transition: .2s linear;
    background: #24cfa4;
    color: #fff;
    justify-content: center;

    position: relative;
`;

export const SvgIcon = styled.img`
    
    width: 36;
    height: 36;
    fill: none;
    vertical-align: middle;

    &:not(:root) {
        overflow-clip-margin: content-box;
        overflow: hidden;
    }
`;

export const TitleCard = styled.h6`
    display: flex;
    font-size: 20px;
    line-height: 26px;
    transition: .2s linear;
    position: relative;
    font-weight: 600;
    align-items: flex-start;
    margin-left: 0.6rem;
`;

export const CardParagraph = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: .2s linear;
    position: relative;
    margin-bottom: 18px;
`;