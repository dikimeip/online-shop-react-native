import { createStackNavigator } from "react-navigation-stack";
import HomePage from "../../containers/pages/HomePage";
import CartPage from "../../containers/pages/CartPage";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HistoryPage from "../../containers/pages/HistoryPage";
import AccountPage from "../../containers/pages/AccountPage";
import LoginPage from "../../containers/pages/LoginPage";
import ProdukPage from "../../containers/pages/ProdukPage";
import PriaPage from "../../containers/pages/PriaPage";
import WanitaPage from "../../containers/pages/WanitaPage";
import AnakPage from "../../containers/pages/AnakPage";
import MuslimahPage from "../../containers/pages/MuslimahPage";
import TasPage from "../../containers/pages/TasPage";
import JaketPage from "../../containers/pages/JaketPage";
import SepatuPage from "../../containers/pages/SepatuPage";
import AksesorisPage from "../../containers/pages/AksesorisPage";
import NewProduks from "../../containers/pages/NewProduks";
import HotProduks from "../../containers/pages/HotProduks";
import DetailPage from "../../containers/pages/DetailPage";

const HomePages = createStackNavigator(
    {
        dasboard: {
            screen: HomePage
        },
        produkPages: {
            screen: ProdukPage
        },
        PriaPages: {
            screen: PriaPage
        },
        WanitaPages: {
            screen: WanitaPage
        },
        AnakPages: {
            screen: AnakPage
        },
        MuslimahPages: {
            screen: MuslimahPage
        },
        TasPages: {
            screen: TasPage
        },
        JaketPages: {
            screen: JaketPage
        },
        SepatuPages: {
            screen: SepatuPage
        },
        AksesorisPages: {
            screen: AksesorisPage
        },
        NewProduksPages: {
            screen: NewProduks
        },
        hotprodukpage: {
            screen: HotProduks
        },
        detailPages: {
            screen: DetailPage
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'dasboard'
    },

)

const CartPages = createStackNavigator(
    {
        cartPage: {
            screen: CartPage
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'cartPage'
    }
)

const HistoryPages = createStackNavigator(
    {
        HomeHistory: {
            screen: HistoryPage
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeHistory'
    }
)

const AccountPages = createStackNavigator(
    {
        HomeAccount: {
            screen: AccountPage
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'HomeAccount'
    }
)

const LoginPages = createStackNavigator(
    {
        Dasboard: {
            screen: LoginPage
        }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Dasboard'
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
        initialRouteName: 'HomePages'
    }
)


export default createAppContainer(Routers)