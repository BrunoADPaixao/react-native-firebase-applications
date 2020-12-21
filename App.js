import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import AuthScreen from './screens/auth';
import AnalyticsScreen from './screens/analytics';
import { analytics } from './services';

const Stack = createStackNavigator();

 export default function App() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
   <NavigationContainer
    ref={navigationRef}
    onStateChange={async (state) => {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.current.getCurrentRoute().name;
  
        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
          alert(currentRouteName);
        }
      }
    }
   >
     <Stack.Navigator headerMode="none" initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Auth" component={AuthScreen} />
       <Stack.Screen name="Analytics" component={AnalyticsScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};
