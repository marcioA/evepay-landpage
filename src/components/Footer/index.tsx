import { CompanyInfo, Container, InfoContainer, MapSite, Section, SocialLogos } from './styles';

interface CardProps {
    title: string;
    paragraphContent: string;
    pathSvg: string;
    colorSvg: string;
}

export function Footer() {
    return (
        <Container>
            <InfoContainer>
                <CompanyInfo>
                    <h3>EVEPAY</h3>
                    <p>All rights reserved to stunning.so</p>
                    <SocialLogos>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Twitter</a>
                        <a href="">Linkedin</a>
                    </SocialLogos>
                </CompanyInfo>
                <MapSite>
                    <Section>
                        <h6>Website</h6>
                        <a>Home</a>
                    </Section>
                    <Section>
                        <h6>Legal</h6>
                        <a>Privacy Policy</a>
                    </Section>
                    <Section>
                        <h6>Resources</h6>
                        <a>Privacy Policy</a>
                    </Section>
                </MapSite>
            </InfoContainer>
        </Container>
    )
}