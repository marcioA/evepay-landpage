import { Link } from 'react-router-dom';
import { Container, NavbarContainer, ButtonGroup } from './styles';

export function Header() {
    return (
        <Container className='container-fluid'>

            <NavbarContainer className='navbar navbar-expand-lg'>
                <a className="navbar-brand logo" href="/">
                    <img src="./" alt="" />
                    <h4>EVEPAY</h4>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>

                            <a className="nav-link">Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link">Como funciona</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link">Locais aceitos</a>
                        </li>
                        <li className='nav-item'>
                            <a className="nav-link">Na mídia</a>
                        </li>
                    </ul>
                </div>


                <ButtonGroup className="nav navbar-nav ml-auto">
                    <Link to="/cadastrar">
                        <li className="nav-item" >
                            <button type="button" style={{ backgroundColor: "#181c32" }}><span className="fas fa-user"></span>Cadastrar</button>
                        </li>
                    </Link>
                    {/* <li className="nav-item">
                        <button disabled={true} type="button" style={{ backgroundColor: "#5e5df0" }}><span className="fas fa-sign-in-alt"></span> Login</button>
                    </li> */}
                </ButtonGroup>

            </NavbarContainer>
        </Container>
    )
}