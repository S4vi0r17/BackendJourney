import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axiosInstance from '../config/axios'
// import axios from 'axios'

const AccountVerification = () => {
  const { id } = useParams()
  const [verificationStatus, setVerificationStatus] = useState('verifying')

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const url = `/trainers/confirm/${id}`
        const { data } = await axiosInstance.get(url)
        setVerificationStatus(data.msg)
      } catch (error) {
        setVerificationStatus('error')
      }
    }

    verifyAccount()
  },[])

  return (
    <div className="flex h-[650px]">
      <div className="w-full bg-blue-600 text-white p-8 flex flex-col justify-center items-center rounded-3xl">
        <h2 className="text-3xl font-bold mb-8">Account Verification</h2>

        {verificationStatus === 'verifying' && (
          <div className="text-center">
            <i className="bx bx-loader bx-spin text-5xl mb-4"></i>
            <p className="text-xl">Verifying your account...</p>
          </div>
        )}

        {verificationStatus === 'success' && (
          <div className="text-center">
            <i className="bx bx-check-circle text-5xl mb-4"></i>
            <p className="text-xl mb-8">Your account has been successfully verified!</p>
            <Link to="/login" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
              Proceed to Login
            </Link>
          </div>
        )}

        {verificationStatus === 'error' && (
          <div className="text-center">
            <i className="bx bx-error-circle text-5xl mb-4"></i>
            <p className="text-xl mb-8">We couldn't verify your account. Please try again or contact support.</p>
            <Link to="/signup" className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
              Back to Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountVerification
