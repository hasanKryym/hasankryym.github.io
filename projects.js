const projectsArray = [
    {
        name: 'Gaming Addict',
        source: 'https://github.com/hasanKryym/gaming-Addict',
        img: './img/gamingWebsite.png',
        live:'https://gaming-addictt.netlify.app/'
    },

    {
        name: 'To-do-list',
        source: 'https://github.com/hasanKryym/to-do-list',
        img: './img/to-do-list.png',
        live:'https://to-do-list-reactt.netlify.app/'
    },

    {
        name: 'color-generator',
        source: 'https://github.com/hasanKryym/color-generator',
        img: './img/color-generator.png',
        live:'https://react-color-generator-appp.netlify.app/'
    },

    {
        name: 'Restaurants menu',
        source: 'https://github.com/hasanKryym/Menu',
        img: './img/menu.png',
        live:'https://menu-jscript.netlify.app/'
    },
    
];

const workSection = document.querySelector('.work');

function createProject() {
    for (let i =0; i < projectsArray.length; i++) {
        projects = `
        <article class="project">
            <img class="project-img" src=${projectsArray[i].img} />
            <div class="project-info">
            <h3>${projectsArray[i].name}</h3>
            <div class="btn-container">
            <a target='__blank' href=${projectsArray[i].source} ><button class="src-btn">source code</button></a>
            <a target='__blank' href=${projectsArray[i].live} ><button class="live-btn">view live</button></a>
            </div>
            </div>
        </article>
    `;
    workSection.innerHTML += projects;
    }
    
}

createProject();