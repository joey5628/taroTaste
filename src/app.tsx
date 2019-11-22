import '@tarojs/async-await'
import Taro, {Component, Config} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'
import ScanBuyHome from './pages/scanbuyhome'

import store from './reducers'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }



class App extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        permission: {
            "scope.userLocation": {
                "desc": "您的定位信息用于更精准的获取附近可配送门店"
            }
        },
        pages: [
            "pages/scanbuyhome/index",
            'pages/index/index',
            "pages/carts/index",
            "pages/user/index",
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            "color": "#999999",
            "selectedColor": "#FD7622",
            "borderStyle": "black",
            "list": [
                {
                    "pagePath": "pages/scanbuyhome/index",
                    "text": "首页",
                    "iconPath": "images/icon_index.png",
                    "selectedIconPath": "images/icon_index_slt.png"
                },
                {
                    "pagePath": "pages/index/index",
                    "text": "分类",
                    "iconPath": "images/icon_send.png",
                    "selectedIconPath": "images/icon_send_slt.png"
                },
                {
                    "pagePath": "pages/carts/index",
                    "text": "购物车",
                    "iconPath": "images/icon_cart.png",
                    "selectedIconPath": "images/icon_cart_slt.png"
                },
                {
                    "pagePath": "pages/user/index",
                    "text": "会员中心",
                    "iconPath": "images/icon_user.png",
                    "selectedIconPath": "images/icon_user_slt.png"
                }
            ]
        },
    }

    componentDidMount() {
        console.log('store---', store)
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentCatchError() {
    }

    componentDidCatchError() {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <ScanBuyHome />
            </Provider>
        )
    }
}

Taro.render(<App />, document.getElementById('app'))
