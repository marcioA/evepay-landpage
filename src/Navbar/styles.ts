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
`;

export const ButtonGroup = styled.ul`
  li{
    justify-content: space-between;
    margin: 0.5rem;
  }

  a{
    flex: 1;
  }
`;