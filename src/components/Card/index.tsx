import { BalloonIcon, CardParagraph, Container, SvgIcon, TitleCard } from './styles';

interface CardProps {
    title: string;
    paragraphContent: string;
    pathSvg: string;
    colorSvg: string;
}

export function Card({ title, paragraphContent, pathSvg, colorSvg }: CardProps) {
    return (
        <Container>
            <BalloonIcon>
                <SvgIcon src={pathSvg} color={colorSvg} />
            </BalloonIcon>
            <TitleCard>• {title}</TitleCard>
            <CardParagraph>{paragraphContent}</CardParagraph>
        </Container>
    )
}