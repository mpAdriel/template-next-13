import React, { useState } from 'react'

export default function Form (
  { children, onsubmit } :
  { children: JSX.Element | JSX.Element[], onsubmit: () => any }
) {
  const [submit, setSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!submit) setSubmit(true)
    onsubmit()
  }

  return (
    <form onSubmit={handleSubmit} custom-submit={submit + ''}>{children}</form>
  )
}
