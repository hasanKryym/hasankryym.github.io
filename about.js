const aboutMe = [
    {
        title: 'Front-end dev',
        desc: "I have experience with HTML, CSS, and JS. In addition, I am currently working on new projects. I'm learning VueJS.",
    },

    {
        title: 'Junior Web Developer at XpertBot',
        desc: "I joined XpertBot in April 2022. I'm currently working on a gaming website for the gaming community.",
    }
]

const aboutSection = document.querySelector('.about');
 for (let i =0; i < aboutMe.length; i++) {
    about = `
        <article>
        <h2>${aboutMe[i].title}</h2>
        <hr />
        <p class="about-par">
          ${aboutMe[i].desc}
        </p>
        <div class="link">
          <a href="#contact-title">Let's talk</a>
        </div>
      </article>
    `;
    aboutSection.innerHTML += about;
 }