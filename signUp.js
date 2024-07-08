let formFeild = document.querySelectorAll("form input");
const [userName, userEmail, userPassword] = formFeild;

console.log(userEmail, userName, userPassword);

const signup = () => {
  event.preventDefault();
  if (
    userName.value !== "" &&
    userEmail.value !== "" &&
    userPassword.value !== ""
  ) {
    let obj = {
      signUpEmail: userEmail.value,
      signupPassword: userPassword.value,
      user: userName.value,
    };
    localStorage.setItem("userData", JSON.stringify(obj));
    window.location.href = "../signIn/index.html";
  } else {
    alert("bhai data to dal do ");
  }
};

console.log(window.location.href);
