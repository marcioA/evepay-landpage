import { Card } from '../../components/Card';
import { AboutAside, AsideContainer, CardContainer, Container, IntroButton, IntroParagraph, Introtext } from './styles';
import CheckSvg from '../../../public/check_circle_svg.svg'

export function Home() {
    return (
        <Container>
            <Introtext>Evepay: o futuro do pagamento</Introtext>
            <IntroParagraph>Já aconteceu com você, ir na padaria pela manhã e na hora de pagar, cadê o cartão ? Celular ?
                Sem problemas, com a Evepay você paga com sua digital e nós gerenciamos os meios de pagamento cadastrados por você.
            </IntroParagraph>
            <IntroButton>
                Cadastrar
            </IntroButton>

            <AsideContainer>
                <AboutAside>Teste</AboutAside>
                <CardContainer>
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identificação automatica de transação'
                        pathSvg={CheckSvg}
                        colorSvg='white'
                    />
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identificação automatica de transação'
                        pathSvg={CheckSvg}
                        colorSvg='white'
                    />
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identificação automatica de transação'
                        pathSvg={CheckSvg}
                        colorSvg='white'
                    />
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identificação automatica de transação'
                        pathSvg={CheckSvg}
                        colorSvg='white'
                    />
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identificação automatica de transação'
                        pathSvg={CheckSvg}
                        colorSvg='white'
                    />
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identificação automatica de transação'
                        pathSvg={CheckSvg}
                        colorSvg='white'
                    />
                </CardContainer>
            </AsideContainer>
        </Container>
    );
}