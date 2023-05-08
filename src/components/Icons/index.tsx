import { ReactNode, useEffect, useState } from 'react';
import { BalloonIcon, SvgIcon } from './styles';

interface IconsProps {
    SvgImage: ReactNode;
    colorSvg?: string;
    margin?: string;
    href?: string;
}

export function Icons({ SvgImage, colorSvg, margin, href }: IconsProps) {
    const [marginElement, setMarginElement] = useState({ 'margin': '0', background: '' });

    useEffect(() => {
        if (margin) setMarginElement({ 'margin': margin, background: '#5e5df0' });
    }, [])
    return (
        <BalloonIcon style={marginElement} href={href} target='_blank'>
            {SvgImage}
        </BalloonIcon>
    )
}