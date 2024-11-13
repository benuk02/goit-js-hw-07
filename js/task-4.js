const form = document.querySelector(".login-form")
form.addEventListener("submit", handleForm);
function handleForm(event) {
    event.preventDefault()
    const elements = event.target.elements
    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }
    if (info.email === '' || info.password === '') {
        return alert("All form fields must be filled in");
    } 
  console.log(info);
  event.target.reset()
}
