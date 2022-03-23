import React from 'react'

import { Container, Table, Row, Head, Labels, Body, Data, Edge, TButton } from './styles/tables'

export default function Tables({ children, ...restProps }) {
    return <Container{...restProps}>{children}</Container>
}

Tables.Table = function TablesTable({ children, ...restProps}) {
    return <Table {...restProps}>{children}</Table>
}

Tables.Row = function TablesRow({ onClick, children, ...restProps}) {
    return <Row onClick={onClick} {...restProps}>{children}</Row>
}

Tables.Head = function TablesHead({ children, ...restProps}) {
    return <Head {...restProps}>{children}</Head>
}

Tables.Labels = function TablesLabels({ children, ...restProps}) {
    return <Labels {...restProps}>{children}</Labels>
}

Tables.Body = function TablesBody({ children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>
}

Tables.Data = function TablesData({ children, ...restProps}) {
    return <Data {...restProps}>{children}</Data>
}

Tables.Edge = function TablesEdge({ children, ...restProps}) {
    return <Edge {...restProps}>{children}</Edge>
}

Tables.Button = function TablesButton({ onClick, children, ...restProps}) {
    return <TButton onClick={onClick} {...restProps}>{children}</TButton>
}