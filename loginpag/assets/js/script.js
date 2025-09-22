
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

    
      axios.post('http://25.53.157.242:8080/auth/register',{
        username: username,
        password: password,
        email: email,
        imgURL: image,
        name: name 
      },{
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
      .then(response => {
        console.log('sucesso')
      })
  })