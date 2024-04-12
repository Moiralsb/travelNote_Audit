// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 在这里执行登录逻辑，例如发送请求到后端进行验证
    // alert('登录');

    // 假设我们有一个API端点 /loginSym
    const response = await fetch('http://localhost:3000/loginSym', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(response.ok);

    if (response.ok) {
      console.log(data)
      alert(data.auditSymRole);
      localStorage.setItem('userSymToken', data.token);
      // 导航到审核页面
      navigate('/');
    } else {
      // 登录失败处理，比如显示错误消息
      alert(data.message);
    }
  };

  return (
    <div className='loginbody'>
      <div>
        <h3>先登录一下吧</h3>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='loginbutton'
            type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;