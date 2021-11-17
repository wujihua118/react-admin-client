import * as actionType from '../action-type'

export const loginSuccessSyncAction = token => ({
  type: actionType.LOGIN_SUCCESS,
  payload: {
    token
  }
})

export const logoutSyncAction = () => ({
  type: actionType.LOGOUT
})

export const resetUserSyncAction = () => ({
  type: actionType.USER_RESET
})