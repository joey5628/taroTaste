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
class Index extends Component<IProps, any> {

    config: Config = {
        navigationBarTitleText: '分类'
    }

    render() {
        return (
            <View className="wrapper">
                <Text className="text">分类</Text>
                <Text>version: {this.props.global.version}</Text>
            </View>
        )
    }
}

export default Index

