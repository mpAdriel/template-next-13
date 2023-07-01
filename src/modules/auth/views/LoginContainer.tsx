import React, { useEffect, useState } from 'react'

// api
import { apiPostLogin } from '@/modules/auth/api'
// resources
import {
	setLogin,
	loginValidation,
	clearAuth,
} from '@/modules/auth/slices/actions'
import { useActions, useStore } from '@/modules/store'
import { t } from '@/i18n/i18n'
// components
import RootLayout from '@/includes/RootLayout'
import { Form, Input, Checkbox } from '@/components'

export default function LoginContainer() {
	const { email, password, isLoading, error } = useStore(
		store => store.AuthState.login
	)
	const dispatch = useActions()

	useEffect(() => {
		dispatch(clearAuth())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	async function apiLogin() {
		await dispatch(apiPostLogin('users'))
	}

	const [submit, setSubmit] = useState(false)
	const [termsConditions, setTermsConditions] = useState(false)

	return (
		<RootLayout title="Login">
			<section className="card mx-3" style={{ maxWidth: '500px' }}>
				<Form
					onsubmit={() => apiLogin()}
					setSubmit={value => setSubmit(value)}
					submit={submit}
				>
					<div className="mb-3">
						{/* //TODO: add prop to add label */}
						<label className="form-label" htmlFor="email">
							Email address
						</label>
						<Input
							messageError={error.email?.error}
							name="email"
							submit={submit}
							validator={() => dispatch(loginValidation())}
							value={email}
							onChange={e =>
								dispatch(
									setLogin({ prop: e.target.name, value: e.target.value })
								)
							}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label" htmlFor="exampleInputPassword1">
							{t('label.password')}
						</label>
						<Input
							// eslint-disable-next-line max-len
							help="Mínimo 8 carácteres, una letra mayúscula, una letra minúscula y un número (puede contener carácteres especiales)"
							messageError={error.password?.error}
							name="password"
							submit={submit}
							type="password"
							validator={() => dispatch(loginValidation())}
							value={password}
							onChange={e =>
								dispatch(
									setLogin({ prop: e.target.name, value: e.target.value })
								)
							}
						/>
					</div>

					<div className="mb-3">
						<Checkbox
							checked={termsConditions}
							help=""
							id="termsConditions"
							label="Terms and conditions"
							name="termsConditions"
							submit={submit}
							type="checkbox"
							onChange={e => setTermsConditions(e.target.checked)}
						/>
					</div>

					<p className="d-none">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Perferendis deserunt dolor, dignissimos reiciendis neque voluptate
						dolores molestiae suscipit facilis atque sint aliquam esse nisi! A
						cum provident corporis maiores omnis? Aspernatur, corporis esse
						voluptates facilis doloremque assumenda quaerat tempore eaque
						dolores, veritatis provident laborum recusandae repellat libero aut
						nihil placeat voluptatum veniam pariatur distinctio doloribus harum
						sint alias corrupti! Ad! Repellat culpa ab veritatis, doloremque
						iure ad, labore quod dolore molestiae numquam mollitia. Quod dolores
						qui suscipit dolorum quae ea, possimus dolorem laboriosam illum eum
						distinctio sequi, a architecto quasi! Fuga aspernatur nobis magnam
						esse aliquam voluptas eos repellendus ex ab, ullam ea debitis
						nostrum, quod odio eaque qui necessitatibus! Ipsa veritatis quis
						modi fugiat error vitae, assumenda incidunt eos. Aperiam,
						perspiciatis earum quibusdam ipsa quidem facilis saepe modi nostrum,
						dolores fuga sequi corrupti rem sint temporibus culpa. Repudiandae
						incidunt reiciendis nihil eum. Earum facere molestias natus quasi
						sapiente voluptatem! Molestiae quia expedita non ipsam, voluptates
						vel explicabo laborum asperiores ducimus quaerat amet magni
						similique quo. Cupiditate praesentium, consequuntur dolorum ea illo
						sed reiciendis fuga quis temporibus necessitatibus enim. Ex. Quod,
						est atque! Optio consequatur obcaecati dolores praesentium amet
						tempore porro nostrum qui quis cum repellendus libero repellat odio
						ipsam, soluta autem non vitae cumque est veritatis commodi
						consectetur velit! Repellat nam obcaecati id, culpa officiis iure
						beatae fuga exercitationem blanditiis porro aliquid quo odio veniam
						facilis recusandae voluptatibus corporis. Suscipit nihil beatae quod
						alias veritatis. Explicabo temporibus nobis iure. Animi officia
						mollitia sed ullam ratione libero illo earum eaque facilis, quia
						rerum nam, quisquam nobis. Animi repudiandae dolore corrupti
						accusamus sequi delectus aliquid magnam atque minus, nobis quod
						quia. Ipsa at dolore fugit ut earum commodi sed, quo, libero minima
						suscipit assumenda provident natus? Iste aliquam dignissimos alias
						sit veritatis corporis, id, reprehenderit, illo fugiat officia
						voluptates perspiciatis earum.
					</p>

					<div className="d-grid gap-2">
						<button
							className={`btn btn-primary mt-2 p-2 btn-block ${
								isLoading ? 'disabled btn-loader' : ''
							}`}
							type="submit"
						>
							<span className="btn-text">Submit</span>
						</button>
					</div>
				</Form>
			</section>
		</RootLayout>
	)
}
