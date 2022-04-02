import useAuth from 'hooks/useAuth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
  return (
    <div className="login-form">
      <div className="auth-form-title">
        Sign <span>Up</span>
      </div>
      <form className="form-wrapper" onSubmit={handleSubmit(onsubmit)}>
        <div className="custom-input">
          <label className="custom-input-label">
            Full Name
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
            Full Name
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
            Password <span className="icon-require-mark"></span>
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
          Sign Up
        </button>
      </form>
      <div className="auth-option-wrapper">
        <div className="auth-option-title">
          <span>Or Sign Up Via</span>
        </div>
        <div className="auth-option-list">
          <div className="auth-option-item connect-via-facebook hover-effect">
            <span className="icon-facebook"></span>
            <span>Facebook</span>
          </div>
          <div className="auth-option-item connect-via-google hover-effect">
            <span className="icon-google"></span>
            <span>Google</span>
          </div>
        </div>
        <div className="text-center mt-4">
          Have You Already An Account?{' '}
          <Link to="/login" className="main-color">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
