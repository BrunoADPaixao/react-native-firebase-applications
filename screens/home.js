import React from 'react';
import { 
  Container, 
  Content, 
  Header, 
  Body, 
  Title, 
  ListItem,
  Text } from 'native-base';

export default function HomeScreen({ navigation }) {
  return (
    <Container>
      <Header> 
        <Body>
          <Title>React Native Firebase Tutorials</Title>
        </Body>
      </Header>
      <Content>
        <ListItem onPress={() => navigation.navigate("Auth")}>
          <Text>Authentication</Text>
        </ListItem>
        <ListItem onPress={() => navigation.navigate("Analytics")}>
          <Text>Analytics</Text>
        </ListItem>
        <ListItem>
          <Text>Realtime Database</Text>
        </ListItem>
        <ListItem>
          <Text>Cloud Firestone</Text>
        </ListItem>
        <ListItem>
          <Text>Cloud Storage</Text>
        </ListItem>
        <ListItem>
          <Text>Admob</Text>
        </ListItem>
        <ListItem>
          <Text>Push Notifications</Text>
        </ListItem>
      </Content>
    </Container>
  );
}