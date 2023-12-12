function isStrongPassword(passwordString) {
  const passwordSubString = "password";
  return passwordString.length >= 8 &&
    !passwordString.includes(passwordSubString) &&
    passwordString !== passwordString.toLowerCase()
    ? true
    : false;
}

console.log(isStrongPassword("1234567Hello"));
