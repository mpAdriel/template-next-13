import React from 'react'

export default function Form({
	children,
	onsubmit,
	submit,
	setSubmit,
}: {
	children: JSX.Element | JSX.Element[]
	onsubmit: () => any
	submit: boolean
	setSubmit: (value: boolean) => void
}) {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!submit) setSubmit(true)
		onsubmit()
	}

	return <form onSubmit={handleSubmit}>{children}</form>
}
