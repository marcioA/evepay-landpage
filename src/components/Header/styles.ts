import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  background-color: var(--bs-white);

  @media (max-width: 768px) {
        width: 100%;
    }
`;

export const NavbarContainer = styled.nav`
a {
  font-weight: 500;
}

a:hover {
  cursor: pointer;
}

.logo {
  align-items: flex-start;
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

  #navbarText {
    justify-content: center;
  }
`;

export const ButtonGroup = styled.ul`
  display: flex;
  flex-direction: row;

  li{
    margin: 0.5rem;
    width: 45%;
  }

  button{
    padding: 5px;
    font-size: 1rem;
    text-decoration: none;
    font-family: "Inter",sans-serif;
    font-weight: 600;
    line-height: 32px;
    border-radius: 50px;
    display: inline-block;
    box-sizing: border-box;
    letter-spacing: -.02em;
    cursor: pointer;
    transition: .2s linear;
    margin-left: 10px;

    &:disabled {
        opacity: 0.7 !important;
        cursor: not-allowed !important;
    }
  }

  
`;