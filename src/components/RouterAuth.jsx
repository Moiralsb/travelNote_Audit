import { Navigate } from 'react-router-dom'

// 路由守卫，检查是否登录存在token
export default function RouterAuth(props) {
  // const token = "token";
  const token = localStorage.getItem('userSymToken');

  if (token) {
    return (
      <>{props.children}</>
    )
  } else {
    return (
      <Navigate to='/login' />
    )
  }
}
