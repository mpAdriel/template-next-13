
// resources
import PrivateRouter from '@/includes/PrivateRouter'
// views
import LoginContainer from '@/modules/login/views/LoginContainer'

export default function Login () {
  return (
    <PrivateRouter>
      <LoginContainer />
    </PrivateRouter>
  )
}
