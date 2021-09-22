const submitButton = document.querySelector(".submitbutton");

const createUser = async () => {
    const url = "";
    const firstName = document.querySelector(".firstName").value;
    const lastName = document.querySelector(".lastName").value;
    const userName = document.querySelector(".userName").value;
    const password = document.querySelector(".password").value
  
    const userData = {
      firstName,
      lastName,
      userName,
      password
    };
  
    const makeUser = await fetch (url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };
  submitButton.addEventListener("click", () => {
    createUser();
});

