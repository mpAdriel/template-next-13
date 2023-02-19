import React, { useState } from 'react'

export default function Input (
  {
    type = 'text',
    onChange,
    className = 'form-control',
    id,
    autoComplete = 'off',
    required = false,
    pattern = '',
    errorMessage,
    help,
    ...restOfProps
  } :
  {
    type?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
    className?: string,
    id: string,
    autoComplete?: string,
    required?: boolean,
    pattern?: string,
    errorMessage?: string | React.ReactElement,
    help?: string
  }
) {
  const [focused, setFocused] = useState(false)
  const input = (
    <>
      <input
        {...restOfProps}
        type={type}
        onChange={onChange}
        className={className}
        id={id}
        onBlur={() => setFocused(true)}
        autoComplete={autoComplete}
        pattern={pattern}
        required={required}
        custom-focused={focused?.toString()}
      />
      {help && <div className='form-text input-help'>{help}</div>}
    </>
  )

  if (pattern) {
    return (
      <div className='d-grid gap-2'>
        {input}
        <div className='alert alert-danger error-input m-0' role='alert'>
          <i className='bi bi-exclamation-triangle-fill me-2' />
          <div>{errorMessage}</div>
        </div>
      </div>
    )
  } else return input
}
