const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, enter your information");
  }
  else {
    const newArr = {};
    newArr.email = email.value;
    newArr.password = password.value;

    console.log(newArr);
  event.currentTarget.reset();
  };
}

