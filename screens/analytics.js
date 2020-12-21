import React from 'react'
import { 
  Container,
  Content,
  Header, 
  Body, 
  Title,
  ListItem,
  Button,
  Text,
  Icon,
  Item,
  Input,
  Left,
  Right,
} from 'native-base';

import { analytics } from '../services';

export default function AnalyticsScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent icon onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Firebase Analytics</Title>
        </Body>
        <Right />
      </Header>
      <Content padder >
        <Button 
          block
          onPress={async () =>
            await analytics().logEvent('cart', {
              id: 'shoe_3745092',
              item: 'Nivia Shoes - Sports',
              description: ['Sports', 'Cricket'],
              size: '9',
            })
          }>
          <Text>Add To Cart</Text>
        </Button>
        <Button 
          block
          onPress={async () =>
            await analytics().logJoinGroup({
              group_id: 'whatsapp_12345',
            })
          }>
          <Text>Add To Group</Text>
        </Button>
      </Content>
    </Container>
  )
}