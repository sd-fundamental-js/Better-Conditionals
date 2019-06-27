// Don't use negative conditionals

// BAD
const isEmailNotVerified = (email) => {
  // implementation
}

if (!isEmailNotVerified(email)) {
  // do something...
}

if (isNotVerified === true) {
  // do something...
}


// GOOD
const isEmailVerified = (email) => {
  // implementation
}

if (isEmailVerified(email)) {
  // do something...
}

if (isVerified) {
  // do something...
}
