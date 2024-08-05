import { resetRequest, login, resetPwd, signup } from '../api/auth.api';
import { LoginProps } from '../pages/Login';
import { SignupProps } from '../pages/Signup';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useAlert } from './useAlert';
import { useState } from 'react';

export const useAuth = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  //상태
  const { storeLogin, storeLogout, isloggedIn } = useAuthStore();

  //메소드
  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        console.log(res.token);
        showAlert('로그인 완료');
        navigate('/');
      },
      (err) => {
        showAlert('로그인 실패');
      },
    );
  };

  const userSignup = (data: SignupProps) => {
    signup(data).then((res) => {
      //성공
      showAlert('회원가입이 완료되었습니다.');
      navigate('/login');
    });
  };

  const userResetPwd = (data: SignupProps) => {
    resetPwd(data).then(() => {
      showAlert('비밀번호가 초기화되었습니다.');
      navigate('/login');
    });
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  //리턴
  return {
    userLogin,
    userSignup,
    userResetPwd,
    userResetRequest,
    resetRequested,
  };
};
