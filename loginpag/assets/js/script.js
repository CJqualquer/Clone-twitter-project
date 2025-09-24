
  const entrarBtn = document.querySelector(".enter-account");
  const loginModal = document.getElementById("loginModal");

  const criarContaBtn = document.querySelector(".create-account");
  const registerModal = document.getElementById("registerModal");

  const closeButtons = document.querySelectorAll(".close-button");

  entrarBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
  });

  criarContaBtn.addEventListener("click", () => {
    registerModal.style.display = "flex";
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      loginModal.style.display = "none";
      registerModal.style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
    if (event.target === registerModal) {
      registerModal.style.display = "none";
    }
  });
      document.getElementById('criar').addEventListener('click',()=>{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let name = document.getElementById('name').value
    let image = document.getElementById('imgurl').value
    let username = document.getElementById('username').value

    fetch("http://localhost:8080/api/user/register", {method: "POST",
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
        passwd: password,
        imgURL: image
      })
    })
  })