// select elements

const toggleNav = document.querySelector('#toggle-navbar');
const inputValue = document.querySelectorAll('.input');
const mobileList = document.querySelector('.list-mobile');

// Sticky header

// window.addEventListener('scroll', () => {
//   var header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 0);
// });


// scrolling animation
window.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.querySelector('#home');
  const aboutSection = document.querySelector('.about');

  homeSection.classList.add('active');
  aboutSection.classList.add('active');
})
window.addEventListener('scroll', () => {
  var anime = document.querySelectorAll('.animeX');

  for(let i = 0; i < anime.length; i++) {
    var windowHeight = window.innerHeight;
    var animeTop = anime[i].getBoundingClientRect().top;
    var animePoint = 150;

    if (animeTop < windowHeight - animePoint) {
      anime[i].classList.add('active');
    }
    else {
      anime[i].classList.remove('active');
    }
  }
});

// toggle navBar
toggleNav.addEventListener('click', () => {
      mobileList.classList.toggle("show-mobile-list");
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


// contact me form
var form = document.getElementById("my-form");
       function handleSubmit(event) {
        event.preventDefault();
        let flag =true;
        for (let i=0; i<inputValue.length; i++){
        if(inputValue[i].value == '') {
          flag = false;
        break;
        }
      }
        if (flag){
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

  function removeStatus() {
    let status = document.getElementById('status');
    status.innerHTML = '';
      status.classList.remove('status-anm');
  }
  console.log(inputValue[0].value)