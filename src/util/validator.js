// This file handles validation of our form fields
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';


// Checks if an email is valid:
// 1) It cannot be empty
// 2) It must be a valid email format
export const isEmailValid = email => (!!email && isEmail(email) ? undefined : 'Required');

// Checks if a name is valid:
// 1) It cannot be empty
export const isNameValid = name => (!!name && !isEmpty(name) ? undefined : 'Required');

// Checks if a password is valid:
// 1) It cannot be empty
// TODO: Proper password validation
export const isPasswordValid = password => (!!password && !isEmpty(password) ? undefined : 'Required');

// Checks if a phone number is valid:
// 1) It cannot be empty
// TODO: Proper phone number validation
export const isPhoneNumberValid = phoneNumber => (!!phoneNumber && !isEmpty(phoneNumber) ? undefined : 'Required');
