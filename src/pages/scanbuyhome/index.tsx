import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux'
import * as globalActions from '../../reducers/global/actions'

import './index.scss'

const mapStateToProps = (state: any) => {
    const { global } = state
    return {
        global
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        actions: bindActionCreators({
            ...globalActions
        }, dispatch)
    }
}

// interface ScanBuyHome {
//     props: {
//         version: string,
//         actions: {
//             setVersion: (version?: any) => any
//         }
//     }
// }
interface IProps {
    global: {
        version: string
    },
    actions: {
        setVersion: (version?: any) => any
    }
}
//
// interface ScanBuyHome {
//     props: IProps
// }

@connect(mapStateToProps, mapDispatchToProps)
class ScanBuyHome extends Component<IProps, any> {

    config: Config = {
        navigationBarTitleText: '首页'
    }

    state = {

    }

    setVersion = () => {
        console.log('----setVersion')
        this.props.actions.setVersion('2.0.0')
    }

    componentDidShow() {
        console.log('this.props:', this.props.global.version)
    }

    render() {
        console.log('this.props:', this.props.global.version)
        const { version } = this.props.global;
        return (
            <View className="wrapper">
                <Text className="text">首页</Text>
                <Text className="text">this.props.global.version: {this.props.global.version}</Text>
                <View>
                    <Text className="text">version: {version}</Text>
                </View>
                <Button onClick={this.setVersion}>修改版本号</Button>
            </View>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ScanBuyHome);
export default ScanBuyHome;

