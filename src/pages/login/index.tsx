import React from 'react'

// api
import { apiPostLogin } from '@/modules/login/api/routes/postLogin'
// resources
import { setLogin } from '@/modules/login/slices/LoginSlice'
import { useStore } from '@/modules/store/useStore'
import { useActions } from '@/modules/store/useActions'
import { loginValidation } from '@/modules/login/slices/actions/loginValidation'
// components
import PrivateRouter from '@/includes/PrivateRouter'
import RootLayout from '@/includes/RootLayout'
import { Form, Input } from '@/components'

export default function Login () {
  const { email, password, errors, isLoading } = useStore(state => state.LoginState)
  const dispatch = useActions()

  async function apiLogin () {
    await dispatch(apiPostLogin())
  }

  return (
    <PrivateRouter>
      <RootLayout title='Login'>

        <section className='card card-glass mx-3' style={{ maxWidth: '500px' }}>
          <Form onsubmit={() => apiLogin()}>
            <div className='mb-3'>
              {/* //TODO: hacer un componente que contenga también el label, y un prop para añadir un contenedor con clase custom */}
              <label htmlFor='email' className='form-label'>Email address</label>
              <Input
                name='email'
                onChange={(e) => dispatch(setLogin({ prop: e.target.name, value: e.target.value }))}
                value={email}
                validator={() => dispatch(loginValidation())}
                messageError={errors.email?.error}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
              <Input
                name='password'
                onChange={(e) => dispatch(setLogin({ prop: e.target.name, value: e.target.value }))}
                value={password}
                validator={() => dispatch(loginValidation())}
                messageError={errors.password?.error}
                type='password'
                help='Mínimo 8 carácteres, al menos una letra mayúscula, una letra minúscula y un número (puede contener carácteres especiales)'
              />
            </div>

            <p className='d-none'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis deserunt dolor, dignissimos reiciendis neque voluptate dolores molestiae suscipit facilis atque sint aliquam esse nisi! A cum provident corporis maiores omnis?
              Aspernatur, corporis esse voluptates facilis doloremque assumenda quaerat tempore eaque dolores, veritatis provident laborum recusandae repellat libero aut nihil placeat voluptatum veniam pariatur distinctio doloribus harum sint alias corrupti! Ad!
              Repellat culpa ab veritatis, doloremque iure ad, labore quod dolore molestiae numquam mollitia. Quod dolores qui suscipit dolorum quae ea, possimus dolorem laboriosam illum eum distinctio sequi, a architecto quasi!
              Fuga aspernatur nobis magnam esse aliquam voluptas eos repellendus ex ab, ullam ea debitis nostrum, quod odio eaque qui necessitatibus! Ipsa veritatis quis modi fugiat error vitae, assumenda incidunt eos.
              Aperiam, perspiciatis earum quibusdam ipsa quidem facilis saepe modi nostrum, dolores fuga sequi corrupti rem sint temporibus culpa. Repudiandae incidunt reiciendis nihil eum. Earum facere molestias natus quasi sapiente voluptatem!
              Molestiae quia expedita non ipsam, voluptates vel explicabo laborum asperiores ducimus quaerat amet magni similique quo. Cupiditate praesentium, consequuntur dolorum ea illo sed reiciendis fuga quis temporibus necessitatibus enim. Ex.
              Quod, est atque! Optio consequatur obcaecati dolores praesentium amet tempore porro nostrum qui quis cum repellendus libero repellat odio ipsam, soluta autem non vitae cumque est veritatis commodi consectetur velit!
              Repellat nam obcaecati id, culpa officiis iure beatae fuga exercitationem blanditiis porro aliquid quo odio veniam facilis recusandae voluptatibus corporis. Suscipit nihil beatae quod alias veritatis. Explicabo temporibus nobis iure.
              Animi officia mollitia sed ullam ratione libero illo earum eaque facilis, quia rerum nam, quisquam nobis. Animi repudiandae dolore corrupti accusamus sequi delectus aliquid magnam atque minus, nobis quod quia.
              Ipsa at dolore fugit ut earum commodi sed, quo, libero minima suscipit assumenda provident natus? Iste aliquam dignissimos alias sit veritatis corporis, id, reprehenderit, illo fugiat officia voluptates perspiciatis earum.
            </p>

            <div className='d-grid gap-2'>
              <button type='submit' className={`btn btn-dark btn-glow mt-2 p-2 btn-block ${isLoading ? 'disabled btn-loader' : ''}`}>
                <span className='btn-text'>Submit</span>
              </button>
            </div>
          </Form>
        </section>

      </RootLayout>
    </PrivateRouter>
  )
}
