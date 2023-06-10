import React, { useState } from 'react'

export default function Checkbox({
	type = 'checkbox',
	onChange,
	checked = false,
	className = 'form-check-input',
	classNameLabel = 'form-check-label',
	label,
	id,
	name,
	validator,
	messageError,
	help,
	submit,
	...restOfProps
}: {
	type?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
	checked: boolean
	className?: string
	classNameLabel?: string
	label: string
	id: string // is required because attribute "htmlFor"
	name: string
	validator?: () => any
	messageError?: string
	help?: string
	submit?: boolean
}) {
	const [focused, setFocused] = useState(false)

	function handleError() {
		if (validator) {
			validator()
		}
	}

	const input = (
		<div>
			<div className="form-check">
				<input
					{...restOfProps}
					type={type}
					onChange={e => {
						onChange(e)
						handleError()
					}}
					checked={checked}
					className={className}
					id={id}
					name={name}
					onBlur={() => {
						if (!focused) setFocused(true)
						handleError()
					}}
				/>
				<label className={classNameLabel} htmlFor={id}>
					{label}
				</label>
			</div>
			{help && !messageError && (
				<div className="form-text input-help">{help}</div>
			)}
		</div>
	)

	if (validator) {
		const showError = focused || submit
		return (
			<div className={`d-grid ${showError ? 'gap-2' : ''}`}>
				{input}
				{messageError && showError && (
					<div className="alert alert-danger error-input m-0" role="alert">
						<i className="bi bi-exclamation-triangle-fill me-2" />
						<div>{messageError}</div>
					</div>
				)}
				{help && messageError && (
					<div className="form-text input-help">{help}</div>
				)}
			</div>
		)
	} else return input
}
