import React from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTrasaction,

} from './styles';


export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title></Title>
                <Icon name="arrow-up-circle" />
            </Header>

            <Footer>
                <Amount>R$ 17.000,40</Amount>
                <LastTrasaction>Última entrada dia 13 de abril</LastTrasaction>
            </Footer>
        </Container>
    );
}