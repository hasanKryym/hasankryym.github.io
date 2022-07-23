// select elements

toggleNav = document.querySelector('#toggle-navbar');
navList = document.querySelector('.nav-list');
navListLinks = document.querySelectorAll('.nav-list-links');
headerTitle = document.querySelector('.header-title');
inputValue = document.querySelectorAll('.input');

// Sticky header

window.addEventListener('scroll', () => {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// toggle navbar

toggleNav.addEventListener('click', () => {
    if (navList.classList.contains('remove')){
      showNav();
    }
    else {
      hideNav();
    }
})

function hideNav() {
    navList.classList.add('remove');
    toggleNav.innerHTML = '<i class="fa-solid fa-bars"></i>'
    headerTitle.innerHTML = 'Portfolio';
}

function showNav() {
    navList.classList.remove('remove');
    toggleNav.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    headerTitle.innerHTML = '';
}
// Remove navList when a link is clicked

navListLinks.forEach((link) => {
   link.addEventListener('click', () => {
    hideNav();
})
})

// contact me form
var form = document.getElementById("my-form");
      async function handleSubmit(event) {
        event.preventDefault();
        if (!checkInput){
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          status.classList.add('status-anm');
          setTimeout(removeStatus, 4000);
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
              status.classList.add('status-anm');
              setTimeout(removeStatus, 4000);
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add('status-anm');
        setTimeout(removeStatus, 4000);
      });
    }
    else {
        let status = document.getElementById('status');
      status.classList.add('status-anm');
      status.innerHTML = 'please fill all the inputs';
      setTimeout(removeStatus, 4000);
    }
   }
    form.addEventListener("submit", handleSubmit)
    
    // check input 
    function checkInput() {
      let flag = true;
      for (let i=0; i<inputValue.length; i++){
        if(inputValue[i].value === '') {
          flag = false;
        break;
        }
      }
      return flag;
    
  }

  function removeStatus() {
    let status = document.getElementById('status');
    status.innerHTML = '';
      status.classList.remove('status-anm');
  }