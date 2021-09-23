const submitButton = document.querySelector(".submitbutton")

const url = ""

const userLogin = async () => {
    const username = document.querySelector(".username").value
    const password = document.querySelector(".password").value
    
    const userInfo = {
        username,
        password
    };
    const loginUser = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo)
    });
};
submitButton.addEventListener("click", () => {
    window.location.replace("trips.html")
    userLogin();
});