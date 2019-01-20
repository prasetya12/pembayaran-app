import { createStackNavigator, createAppContainer } from "react-navigation";
import Intro from './app/screen/IntroScreen'
import Login from './app/screen/LoginScreen'
import Register from './app/screen/RegisterScreen'
import MainScreen from './app/screen/MainScreen'


const AppNavigator = createStackNavigator({
  Intro: {
    screen: Intro
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  MainScreen:{
    screen:MainScreen
  }

},{
  initialRouteName: "Intro"
})

export default createAppContainer(AppNavigator)

