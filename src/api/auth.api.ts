import { SignupProps } from '../pages/Signup';
import { httpClient } from './http';

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post('/users/join', userData); //데이터 바디로 보내준다
  return response.data;
};

export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post('/users/reset', data); //데이터 바디로 보내준다
  return response.data;
};

export const resetPwd = async (data: SignupProps) => {
  const response = await httpClient.put('/users/reset', data); //데이터 바디로 보내준다
  return response.data;
};

interface LoginResponse {
  token: string;
}

export const login = async (data: SignupProps) => {
  const response = await httpClient.post<LoginResponse>('/users/login', data); //데이터 바디로 보내준다
  return response.data;
};
