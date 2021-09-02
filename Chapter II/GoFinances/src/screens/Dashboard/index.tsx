import React from 'react';
import {
    Text,
} from "react-native"

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreering,
    UserName,

} from './styles';

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: "https://avatars.githubusercontent.com/u/82000177?v=4" }}
                        />
                        <User>
                            <UserGreering>Olá,</UserGreering>
                            <UserName>Washington</UserName>
                        </User>
                    </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
    );
}

