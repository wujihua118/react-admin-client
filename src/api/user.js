import request from '../utils/request'
import API from './constants'

export const login = user => request.post(API.API_LOGIN, user)
export const register = user => request.post(API.API_REGISTER, user)

export const getUserInfo = id => request.get(`${API.API_USER}/${id}`)
export const updateUserInfo = (id, user) => request.put(`${API.API_USER}/${id}`, user)