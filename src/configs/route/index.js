import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../../containers/pages/HomePage";
import CartPage from "../../containers/pages/CartPage";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import HistoryPage from "../../containers/pages/HistoryPage";
import AccountPage from "../../containers/pages/AccountPage";

const HomePages = createStackNavigator(
    {
        dasboard : {
            screen : HomePage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'dasboard'
    }
)

const CartPages = createStackNavigator(
    {
        cartPage : {
            screen:CartPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'cartPage'
    }
)

const HistoryPages = createStackNavigator(
    {
        HomeHistory : {
            screen : HistoryPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'HomeHistory'
    }
)

const AccountPages = createStackNavigator(
    {
        HomeAccount : {
            screen:AccountPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'HomeAccount'
    }
)

const Routers = createSwitchNavigator(
    {
        HomePages,
        CartPages,
        HistoryPages,
        AccountPages
    },
    {
        initialRouteName:'HomePages'
    }
)

export default createAppContainer(Routers)