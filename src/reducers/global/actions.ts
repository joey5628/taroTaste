import { SET_VERSION } from '../types'

export function setVersion(version: string) {
    return {
        type: SET_VERSION,
        payload: version
    }
}
