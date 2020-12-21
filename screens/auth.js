import React from 'react';
import { Container, Content, Header, Body, Title, Left, Text,
  Right,
  Button,
  Item,
  Label,
  Form,
  Input,
  Icon
} from 'native-base';
import { Auth } from '../services';
import { SignInUser, SignUpUser, SignOutUser } from '../apiServices';

export default function AuthScreen({ navigation }) {

  const [state, setState] = React.useState({
    emailAddress: '',
    password: '',
  });

  const [user, setUser] = React.useState();

  const signUp = () => { SignUpUser(state.emailAddress, state.password)
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert(error);
    });
  };
  const signIn = () => { SignInUser(state.emailAddress, state.password)
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert(error);
    });
  };
  const signOut = () => {SignOutUser(state.emailAddress, state.password)
    .then(data => {
      alert(data);
    })
    .catch(error => {
      alert(error);
    });
  };

  const onAuthStateChanged = user => {
    setUser(user);
  }

  React.useEffect(() => {
    const subscriber=Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <Container>
      <Header> 
        <Left>
          <Button transparent icon onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color='white' />
          </Button>
        </Left>
        <Body>
          <Title>Authentication</Title>
        </Body>
        <Right>
          {user && (
            <Button transparent icon onPress={signOut}>
              <Icon name="log-out" color='white' />
            </Button>
          )}
        </Right>
      </Header>
      <Content>
        <Form>
          <Item>
            <Label>Email Address</Label>
            <Input 
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={text => setState({...state, emailAddress: text })}
            />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input secureTextEntry 
              value={state.password}
              onChangeText={text => setState({...state, password: text })}
            />
          </Item>
          <Button block onPress={signUp}>
            <Text>Sign Up</Text>
          </Button>
        </Form>
        <Form>
          <Item>
            <Label>Email Address</Label>
            <Input 
              keyboardType="email-address"
              value={state.emailAddress}
              onChangeText={text => setState({...state, emailAddress: text })}
            />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input secureTextEntry 
              value={state.password}
              onChangeText={text => setState({...state, password: text })}
            />
          </Item>
          <Button block onPress={signIn}>
            <Text>Sign In</Text>
          </Button>
        </Form>
      </Content>
      </Container>
    );
}