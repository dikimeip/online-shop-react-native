import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../../containers/pages/HomePage";
import CartPage from "../../containers/pages/CartPage";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import HistoryPage from "../../containers/pages/HistoryPage";
import AccountPage from "../../containers/pages/AccountPage";
import LoginPage from "../../containers/pages/LoginPage";
import ProdukPage from "../../containers/pages/ProdukPage";

const HomePages = createStackNavigator(
    {
        dasboard : {
            screen : HomePage
        },
        produkPages : {
            screen:ProdukPage
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

const LoginPages = createStackNavigator(
    {
        Dasboard:{
            screen:LoginPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Dasboard'
    }
)

const Routers = createSwitchNavigator(
    {
        HomePages,
        CartPages,
        HistoryPages,
        AccountPages,
        LoginPages
    },
    {
        initialRouteName:'LoginPages'
    }
)

export default createAppContainer(Routers)