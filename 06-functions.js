// Functions group reusable instructions.

function validatePassword(password) {
    // Early return:
    // if the password is empty, the function stops here.
    if (password === "") {
      return "Password is required";
    }
  
    // This line only runs if the password was not empty.
    return "Password accepted";
  }
  
  console.log(validatePassword(""));
  console.log(validatePassword("12345"));