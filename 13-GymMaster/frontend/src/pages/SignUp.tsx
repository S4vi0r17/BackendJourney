import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from "../components/Alert";
import { AlertInterface } from '../interfaces/alert.interface'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [alert, setAlert] = useState<AlertInterface>({ message: null, type: null })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if ([name, email, password, confirmPassword].includes('')) {
      setAlert({ message: 'Please fill in all fields', type: 'error' })
      return
    }

    if (password !== confirmPassword) {
      setAlert({ message: 'Passwords do not match', type: 'error' })
      return
    }

    setAlert({ message: 'Account created successfully', type: 'success' })

    setInterval(() => {
      setAlert({ message: null, type: null })
    }, 3000)
  }

  return (
    <div className="flex h-[650px] relative">
      {alert.message && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full max-w-md z-10">
          <Alert message={alert.message} type={alert.type} />
        </div>
      )}
      <div className="w-3/5 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Create Account</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition duration-300">
            <i className="bx bxl-google text-xl"></i>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition duration-300">
            <i className="bx bxl-facebook text-xl"></i>
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition duration-300">
            <i className="bx bxl-twitter text-xl"></i>
          </button>
        </div>
        <p className="text-center mb-8">or use your email for registration</p>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="relative">
            <i className="bx bx-user absolute text-gray-500 top-3 left-4"></i>
            <input
              type="text"
              placeholder="Name"
              className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <i className="bx bx-envelope absolute text-gray-500 top-3 left-4"></i>
            <input
              type="email"
              placeholder="Email"
              autoComplete="username"
              className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <i className="bx bx-lock-alt absolute text-gray-500 top-3 left-4"></i>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="relative">
            <i className="bx bx-lock-alt absolute text-gray-500 top-3 left-4"></i>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-2/5 bg-blue-600 text-white p-8 flex flex-col justify-center items-center rounded-r-3xl">
        <h2 className="text-3xl font-bold mb-4">Already a member?</h2>
        <p className="text-center mb-8">Access your account and continue your fitness journey</p>
        <Link to="/" className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUp
