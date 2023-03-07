import React, { useState } from 'react'

export default function Input (
  {
    type = 'text',
    onChange,
    value = '',
    className = 'form-control',
    id,
    name,
    autoComplete = 'off',
    required = false,
    validator,
    messageError,
    help,
    ...restOfProps
  } :
  {
    type?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
    value: string,
    className?: string,
    id?: string,
    name: string,
    autoComplete?: string,
    required?: boolean,
    validator?: () => any,
    messageError?: string,
    help?: string
  }
) {
  const [focused, setFocused] = useState(false)

  function handleError () {
    if (validator) { validator() }
  }

  const input = (
    <>
      <input
        {...restOfProps}
        type={type}
        onChange={(e) => {
          onChange(e)
          handleError()
        }}
        value={value}
        className={className}
        id={id}
        name={name}
        onBlur={() => {
          if (!focused) setFocused(true)
          handleError()
        }}
        autoComplete={autoComplete}
        custom-focused={focused + ''}
      />
      {help && <div className='form-text input-help'>{help}</div>}
    </>
  )

  if (validator) {
    return (
      <div className='d-grid gap-2'>
        {input}
        {messageError && (
          <div className='alert alert-danger error-input m-0' role='alert'>
            <i className='bi bi-exclamation-triangle-fill me-2' />
            <div>{messageError}</div>
          </div>
        )}
      </div>
    )
  } else return input
}
