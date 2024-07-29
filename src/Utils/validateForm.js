export const validateForm = (email, password, setPassword) => {
  const email_regex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
  const password_regex = "^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  let errors = {
    email: "",
    password: "",
    setPassword: "",
  };

  if (email.length == 0) {
    errors.email = "Email cannot be empty";
  } else if (!email_regex.test(email)) {
    errors.email = "Invalid email format";
  }

  if (password.length == 0) {
    errors.password = "Password cannot be empty";
  } else if (!password_regex.test(password)) {
    errors.password =
      "Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a digit, and a special character.";
  }

  if (setPassword !== password) {
    setPassword.errors = "Password and Confirm Password do not match.";
  }

  return errors;
};
