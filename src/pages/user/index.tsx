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
class UserIndex extends Component<IProps, any> {

    config: Config = {
        navigationBarTitleText: '会员中心'
    }

    componentDidMount() {
        console.log('this.props.global.version:', this.props.global.version)
    }

    render() {
        return (
            <View>
                <Text>会员中心</Text>
                <Text>version: {this.props.global.version}</Text>
            </View>
        )
    }
}

export default UserIndex
