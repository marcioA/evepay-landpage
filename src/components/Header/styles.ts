import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  background-color: var(--bs-white);
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
  li{
    justify-content: space-between;
    margin: 0.5rem;
  }

  button{
    flex: 1;
    border-radius: 1.5rem;
    padding: 12px 32px;
    font-size: 1rem;
    line-height: 24px;
    text-decoration: none;
    font-family: "Inter",sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    border-radius: 50px;
    display: inline-block;
    box-sizing: border-box;
    letter-spacing: -.02em;
    cursor: pointer;
    transition: .2s linear;

    &:disabled {
        opacity: 0.7 !important;
        cursor: not-allowed !important;
    }
  }

  
`;