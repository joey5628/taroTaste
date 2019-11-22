import {Record} from 'immutable'
import pack from '../../../package.json'

/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
const InitialState = Record({
    // isMobile: false,
    // platform: '',
    version: pack.version
})

export default InitialState
