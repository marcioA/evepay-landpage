import { Icons } from '../Icons';
import { CompanyInfo, Container, InfoContainer, MapSite, Section, SocialLogos } from './styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function Footer() {
    return (
        <Container>
            <InfoContainer>
                <CompanyInfo>
                    <h3>EVEPAY</h3>
                    <p>Todos direitos reservados para Evepay</p>
                    <SocialLogos>
                        <Icons href="https://www.facebook.com" SvgImage={<FacebookIcon />} margin='0.5rem' />
                        <Icons href="https://www.instagram.com" SvgImage={<InstagramIcon />} margin='0.5rem' />
                        <Icons href="https://www.twitter.com" SvgImage={<TwitterIcon />} margin='0.5rem' />
                        <Icons href="https://www.linkedin.com" SvgImage={<LinkedInIcon />} margin='0.5rem' />
                    </SocialLogos>
                </CompanyInfo>
                <MapSite>
                    <Section>
                        <h6>Website</h6>
                        <a>Inicio</a>
                        <a>Como funciona</a>
                        <a aria-disabled={true}>Locais aceitos</a>
                        <a>Na mídia</a>
                    </Section>
                    <Section>
                        <h6>Legal</h6>
                        <a>Política de privacidade</a>
                        <a>Termos e condições</a>
                        <a>Faça parte do time</a>
                        <a>Contatos</a>
                    </Section>
                    <Section>
                        <h6>Transparência</h6>
                        <a>Teste</a>
                    </Section>
                </MapSite>
            </InfoContainer>
        </Container>
    )
}