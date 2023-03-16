/* eslint-disable no-useless-escape */
// ? NOTE: not add //g to regex, because it gives so much problems

// at least 8 characters, must contain at least 1 uppercase letter and 1 lowercase letter, can contain special characters
export const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
export const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
