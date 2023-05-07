import styled from 'styled-components';

export const Container = styled.div`
    margin: 12px;
    width: calc(50% - 24px);
    padding: 24px;
    box-sizing: border-box;
    background: #dcf7f0;
    border-radius: 12px;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        transition: .2s linear;
        opacity: 0;
        height: 100%;
        background: linear-gradient(116.3deg,#15fbbf,#019f77);
    }
`;
