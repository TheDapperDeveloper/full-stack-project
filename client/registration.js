const form = document.querySelector(".regform");

const createUser = async (e) => {
    e.preventDefault()
    const url = "http://localhost:3000/register";
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const username = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value
  
    const userData = {
      firstName,
      lastName,
      username,
      password
    };
  
    const createUser = await fetch (url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(userData)
  };
  form.addEventListener("submit", (e) => {
    createUser(e);
});