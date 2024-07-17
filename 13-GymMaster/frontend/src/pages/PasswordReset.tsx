import { Link } from 'react-router-dom'

const PasswordReset = () => {
  return (
    <div className="flex h-[600px]">
      <div className="w-2/5 bg-blue-600 text-white p-8 flex flex-col justify-center items-center rounded-l-3xl">
        <h2 className="text-3xl font-bold mb-4">Remember your password?</h2>
        <p className="text-center mb-8">Return to the sign in page to access your account</p>
        <Link to='/' className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
          Back to Sign In
        </Link>
      </div>
      <div className="w-3/5 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Reset Your Password</h2>
        <p className="text-center mb-8 text-gray-600">Enter your email address and we'll send you instructions to reset your password.</p>
        <form className="space-y-6">
          <div className="relative">
            <i className="bx bx-envelope absolute text-gray-500 top-3 left-4"></i>
            <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Send Reset Instructions
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset
