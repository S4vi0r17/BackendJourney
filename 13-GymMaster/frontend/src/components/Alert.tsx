import { AlertInterface } from "../interfaces/alert.interface"

const Alert = ({ message, type }: AlertInterface) => {
  const bgColor = type === 'error' ? 'bg-red-100' : 'bg-green-100'
  const textColor = type === 'error' ? 'text-red-700' : 'text-green-700'
  const icon = type === 'error' ? 'bx-error-circle' : 'bx-check-circle'

  return (
    <div className={`${bgColor} border-l-4 ${type === 'error' ? 'border-red-500' : 'border-green-500'} p-4 rounded-md shadow-md`} role="alert">
      <div className="flex items-center">
        <i className={`bx ${icon} text-2xl mr-2`}></i>
        <p className={`font-bold ${textColor}`}>{message}</p>
      </div>
    </div>
  )
}

export default Alert
