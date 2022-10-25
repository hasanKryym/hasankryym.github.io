const aboutMe = [
    {
        title: 'Front-end dev',
        desc: "I have experience with HTML, CSS, JS, and React.",
    },

    {
        title: 'Junior Web Developer at XpertBot',
        desc: "I joined XpertBot in April 2022 and finished working on my project, which was a gaming website.",
    }
]

const aboutSection = document.querySelector('.about');
 for (let i =0; i < aboutMe.length; i++) {
   let about = `
        <article class="about-article">
          <h3>${aboutMe[i].title}</h3>
          <hr />
          <div class="about-info">
            <p>${aboutMe[i].desc}</p>
          </div>
        </article>
    `;
    aboutSection.innerHTML += about;
 }