import React from 'react';
import { Case, ANC, BSpan } from './styles/button';

export default function BTest({ children, ...restProps }) {
    return <Case { ...restProps }>{ children }</Case>
};

BTest.Anchor = function BTAnchor({children, ...restProps }) {
    return <ANC href="#" {...restProps}>{children}</ANC>
}

BTest.Span = function BTSpan({children, ...restProps}){
    return <BSpan {...restProps}>{children}</BSpan>
}