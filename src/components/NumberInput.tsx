import React, { useState } from 'react'

export default function NumberInput({
	onChange,
	value = '',
	className = 'form-control',
	id,
	max,
	min,
	name,
	placeholder,
	step,
	autoComplete = 'off',
	validator,
	messageError,
	help,
	submit,
	...restOfProps
}: {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
	value: string
	className?: string
	id?: string
	max?: string
	min?: string
	name: string
	placeholder?: string
	step?: string
	autoComplete?: string
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
		<>
			<input
				{...restOfProps}
				autoComplete={autoComplete}
				className={className}
				id={id}
				max={max}
				min={min}
				name={name}
				placeholder={placeholder}
				step={step}
				type="number"
				value={value}
				onBlur={() => {
					if (!focused) setFocused(true)
					handleError()
				}}
				onChange={e => {
					onChange(e)
					handleError()
				}}
			/>
			{help && !messageError && (
				<div className="form-text input-help">{help}</div>
			)}
		</>
	)

	if (validator) {
		const showError = focused || submit

		return (
			<div className="d-grid gap-2">
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
