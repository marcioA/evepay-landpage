import { Card } from '../../components/Card';
import { AboutAside, AsideContainer, CardContainer, Container, IntroButton, IntroParagraph, Introtext } from './styles';
import PaidIcon from '@mui/icons-material/Paid';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ScoreIcon from '@mui/icons-material/Score';

export function Home() {
    return (
        <Container>
            <h1 style={{ justifyContent: "center", textAlign: "center", color: "red" }}>Em Construção</h1>
            <Introtext>Evepay: o futuro do pagamento</Introtext>
            <IntroParagraph>Já aconteceu com você, ir na padaria pela manhã e na hora de pagar, cadê o cartão ? Celular ?
                Sem problemas, com a Evepay você paga com sua digital e nós gerenciamos os meios de pagamento cadastrados por você.
            </IntroParagraph>
            <IntroButton>
                Cadastrar
            </IntroButton>

            <AsideContainer>
                <AboutAside>
                    <h2>Evepay - Soluções Financeiras Inovadoras</h2>
                    <p>O site FinTech da Evepay oferece aos usuários uma experiência bancária digital segura e simplificada, facilitando
                        o acesso a serviços financeiros, como transferências de dinheiro, pagamentos de contas e orçamentos. Além disso,
                        os usuários podem aproveitar nossos recursos de monitoramento de contas em tempo real para manter o controle de suas finanças.
                    </p>
                </AboutAside>
                <CardContainer>
                    <Card
                        title='Identificador de transação'
                        paragraphContent='Identifique, categorize e classifique automaticamente transações financeiras'
                        pathSvg={<PaidIcon />}
                        colorSvg='white'
                    />
                    <Card
                        title='Monitoramento de cartão de crédito'
                        paragraphContent='Rastreie e visualize a atividade mensal do cartão de crédito'
                        pathSvg={<CreditCardIcon />}
                        colorSvg='white'
                    />
                    <Card
                        title='Gerenciamento de despesas'
                        paragraphContent='Gerenciar, rastrear e reembolsar despesas'
                        pathSvg={<ReceiptLongIcon />}
                        colorSvg='white'
                    />
                    <Card
                        title='Análise Automatizada'
                        paragraphContent='Use algoritmos e tecnologias avançadas para analisar dados financeiros'
                        pathSvg={<AnalyticsIcon />}
                        colorSvg='white'
                    />
                    <Card
                        title='Planejamento financeiro'
                        paragraphContent='Crie orçamentos personalizados e planos de poupança'
                        pathSvg={<ScoreIcon />}
                        colorSvg='white'
                    />
                    <Card
                        title='Pagamentos inteligentes'
                        paragraphContent='Faça pagamentos da melhor maneira possivel e sem perder beneficios.'
                        pathSvg={<FingerprintIcon />}
                        colorSvg='white'
                    />
                </CardContainer>
            </AsideContainer>
        </Container>
    );
}