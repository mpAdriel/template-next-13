import React, { useState } from 'react'
import PrivateRouter from '@/includes/PrivateRouter'
import RootLayout from '@/includes/RootLayout'
import { DTOLogin } from '@/modules/login/DTO'
import Input from '@/components/Input'
import { password } from '@/modules/form/regex'

export default function Login () {
  const [dataLogin, setDataLogin] = useState<DTOLogin>({ email: '', password: '' })

  return (
    <PrivateRouter>
      <RootLayout title='Login'>

        <section className='card card-glass' style={{ width: '500px' }}>
          <form onSubmit={(e) => apiLogin(e, dataLogin)}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email address</label>
              <Input
                id='email'
                onChange={(e) => setDataLogin({ ...dataLogin, [e.target.id]: e.target.value })}
                pattern='adriel'
                errorMessage='No eres Adriel'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
              <Input
                id='password'
                type='password'
                onChange={(e) => setDataLogin({ ...dataLogin, [e.target.id]: e.target.value })}
                pattern={password + ''}
                errorMessage='Mínimo 8 carácteres, al menos una letra mayúscula y una letra minúscula (puede contener carácteres especiales)'
                required
                help='Mínimo 8 carácteres, al menos una letra mayúscula y una letra minúscula (puede contener carácteres especiales)'
              />

            </div>

            <p>
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
              <button type='submit' className='btn btn-primary btn-block'>Submit</button>
            </div>
          </form>
        </section>

      </RootLayout>
    </PrivateRouter>
  )
}

function apiLogin (e: React.FormEvent, values: DTOLogin) {
  e.preventDefault()
  console.log('values', values)
}
