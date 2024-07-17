import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="flex h-[600px]">
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
        <form className="space-y-6">
          <div className="relative">
            <i className="bx bx-user absolute text-gray-500 top-3 left-4"></i>
            <input type="text" placeholder="Name" className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="relative">
            <i className="bx bx-envelope absolute text-gray-500 top-3 left-4"></i>
            <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" />
          </div>
          <div className="relative">
            <i className="bx bx-lock-alt absolute text-gray-500 top-3 left-4"></i>
            <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </form>
      </div>
      <div className="w-2/5 bg-blue-600 text-white p-8 flex flex-col justify-center items-center rounded-r-3xl">
        <h2 className="text-3xl font-bold mb-4">Already a member?</h2>
        <p className="text-center mb-8">SAccess your account and continue your fitness journey</p>
        <Link to="/" className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
          Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUp
