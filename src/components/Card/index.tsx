import { ReactNode } from 'react';
import { Icons } from '../Icons';
import { CardParagraph, Container, TitleCard } from './styles';

interface CardProps {
    title: string;
    paragraphContent: string;
    pathSvg: ReactNode;
    colorSvg: string;
}

export function Card({ title, paragraphContent, pathSvg, colorSvg }: CardProps) {
    return (
        <Container>
            {/* <BalloonIcon>
                <SvgIcon src={pathSvg} color={colorSvg} />
            </BalloonIcon> */}
            <Icons SvgImage={pathSvg} />
            <TitleCard>• {title}</TitleCard>
            <CardParagraph>{paragraphContent}</CardParagraph>
        </Container>
    )
}