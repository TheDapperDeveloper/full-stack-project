const form = document.querySelector(".loginForm")

const createUser = async (e) => {
    e.preventDefault()
    console.log("login")
    const url = "http://localhost:3000/login";
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value
    console.log(username)
    console.log(password)
  
    const userData = {
      username,
      password
    };
  
    const createUser = await fetch(url, {
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
