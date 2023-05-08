import styled from 'styled-components';

export const BalloonIcon = styled.a`
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

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
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