// generate random number with eight characters
export const randomNumber = () => {
  return Math.random().toString(36).substring(2, 10);
}

// Generate eight random number digits
export const randomDigits = () => Math.floor(10000000 + Math.random() * 900000);