import React from 'react';
import axios from 'axios';
import config from '../../../config'
import useAuth from 'hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const SignUp = () => {
  const { login, loginWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { register: registerAction } = useAuth();

  const onsubmit = (data) => {
    const { fullname, email, username, password } = data;
    registerAction(fullname, email, username, password);
  };

  const responseGoogle = async (response) => {
    console.log(response);
    try {
      const res = await axios.post(`${config.url}/auth/google`, { tokenId: response.tokenId });
      loginWithGoogle(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const responseFacebook = async (response) => {
    const { accessToken, userID } = response;
    const res = await axios.post(`${config.url}/auth/facebook`, { accessToken, userID });

    loginWithGoogle(res.data);
  };

  return (
    <div className="login-form">
      <div className="auth-form-title">
        Đăng <span>Ký</span>
      </div>
      <form className="form-wrapper" onSubmit={handleSubmit(onsubmit)}>
        <div className="custom-input">
          <label className="custom-input-label">
            Tên người dùng
            <span className="icon-require-mark"></span>
          </label>
          <input
            name={'fullname'}
            type="text"
            placeholder={'Enter your full name'}
            className="custom-input-field"
            {...register('fullname', {
              required: 'Đây là trường bắt buộc'
            })}
          />
          {errors['fullname'] && <p className="error-msg">{errors.fullname.message}</p>}
        </div>
        <div className="custom-input">
          <label className="custom-input-label">
            Email
            <span className="icon-require-mark"></span>
          </label>
          <input
            name={'Email'}
            type="email"
            placeholder={'Enter your email'}
            className="custom-input-field"
            {...register('email', {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, //eslint-disable-line
              required: 'Đây là trường bắt buộc'
            })}
          />
          {errors['email'] && <p className="error-msg">{errors.email.message}</p>}
        </div>
        <div className="custom-input">
          <label className="custom-input-label">
            Họ và tên
            <span className="icon-require-mark"></span>
          </label>
          <input
            name={'username'}
            type="text"
            placeholder={'Enter your username'}
            className="custom-input-field"
            {...register('username', {
              required: 'Đây là trường bắt buộc'
            })}
          />
          {errors['username'] && <p className="error-msg">{errors.username.message}</p>}
        </div>
        <div className="custom-input">
          <label className="custom-input-label">
            Mật khẩu <span className="icon-require-mark"></span>
          </label>
          <input
            type={'password'}
            placeholder={'Enter your password'}
            className="custom-input-field"
            name={'password'}
            {...register('password', {
              required: 'Đây là trường bắt buộc',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'Nhập mật khẩu không dưới 8 ký tự, chứa ít nhất 1 chữ số và 1 chữ cái'
              }
            })}
          />
          {errors['password'] && <p className="error-msg">{errors.password.message}</p>}
        </div>
        <button className="btn btn-primary btn-submit hover-effect" type="submit">
          Đăng ký
        </button>
      </form>
      <div className="auth-option-wrapper">
        <div className="auth-option-title">
          <span>Hoặc đăng ký bằng</span>
        </div>
        <div className="auth-option-list">
          <FacebookLogin
            appId="388735613092166"
            textButton={"Facebook"}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            icon={<span className='icon icon-facebook'></span>}
            onClick={responseFacebook}
          />
          <p>Hoặc</p>
          <GoogleLogin
            clientId="552476244389-i27g7s11jkoo862j4e7oh1dmukkmhto9.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            // uxMode={'redirect'}
            // redirectUri={'http://localhost:3000'}
          />
        </div>
        <div className="text-center mt-4">
          Bạn đã có tài khoản?{' '}
          <Link to="/login" className="main-color">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
