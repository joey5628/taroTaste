import Taro, { Component, Config } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import { connect } from '@tarojs/redux'
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

interface IProps {
    global: any,
    actions: {
        setVersion: (version?: string) => any
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Carts extends Component<IProps, any> {

    config: Config = {
        navigationBarTitleText: '购物车'
    }

    render() {
        return (
            <View>
                <Text>购物车</Text>
                <Text>version: {this.props.global.version}</Text>
            </View>
        )
    }
}

export default Carts
