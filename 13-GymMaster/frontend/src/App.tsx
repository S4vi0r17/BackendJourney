import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import AccountVerification from './pages/AccountVerification';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AuthLayout/> } >
            <Route index element={ <SignIn/> } />
            <Route path='signup' element={ <SignUp/> } />
            <Route path='password-reset' element={ <PasswordReset/> } />
            <Route path='account-verification/:id' element={ <AccountVerification/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
