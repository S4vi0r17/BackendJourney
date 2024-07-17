import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <h3>Auth Header</h3>
      <Outlet />
      <p>Auth Footer</p>
    </>
  )
}

export default AuthLayout
