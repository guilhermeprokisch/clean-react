import React from 'react'
import Login from '@/presentation/pages/login/login'
import { makeRemoteAuthentication } from '@/main/usecases/authentication/remote-authentication-factory'
import { makeLoginvalidation } from './login-validation-factory'

export const makeLogin: React.FC = () => {
  return (
    < Login
      authentication={makeRemoteAuthentication()}
      validation = {makeLoginvalidation()}
    />
  )
}
