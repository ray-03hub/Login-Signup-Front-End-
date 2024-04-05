const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const captchaResponse = grecaptcha.getResponse();

  if(!captchaResponse.length> 0){
    throw new Error("Captcha not complete");
  }

  const fd = new FormData(e.target);
  const params = new URLSearchParams(fd);

  fetch('http://httpbin.org/post',{
    method: "POST",
    body: params,
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});