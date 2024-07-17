import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 p-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
