import { SignupProps } from '../pages/Signup';
import { httpClient } from './http';

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post('/users/join', userData); //데이터 바디로 보내준다
  return response.data;
};
