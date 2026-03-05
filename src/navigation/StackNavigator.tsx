import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { QuestionScreen, WelcomeScreen } from '../screens'
import { ResultScreen } from '../screens/ResultScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  QuestionScreen: undefined;
  ResultScreen: undefined;  
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const DefaultOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitle: "Mon quizz"
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={WelcomeScreen}
          options={DefaultOptions}
        />

        <Stack.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          options={DefaultOptions}
        />
        
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={DefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
