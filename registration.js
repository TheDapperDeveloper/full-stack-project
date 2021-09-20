const submitButton = document.querySelector(".submitbutton")

const createUser = async () => {
   const url = ""
   const name = document.querySelector(".name").value
   const username = document.querySelector(".username").value
   const password = document.querySelector(".password").value

   const userData = {
       name,
       username,
       password
   };
};

const submitData = async () => {
    const url = ""
    const postUser = await fetch(url,{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "applicaiton/json"
        },
        body: JSON.stringify(userData)
    });
};
const json = await submitData.json()

submitButton.addEventListener("click", () => {
    createUser();
});
submitData();
