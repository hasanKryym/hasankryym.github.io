const projectsArray = [
    {
        name: 'Gaming Addict',
        source: 'https://github.com/hasanKryym/Gaming-Addict',
        img: './img/gamingWebsite.png',
    },

    {
        name: 'Restaurants menu',
        source: 'https://github.com/hasanKryym/Menu',
        img: './img/menu.png',
    },

    {
        name: 'Tabs',
        source: 'https://github.com/hasanKryym/Tabs',
        img: './img/tabs.png',
    },

    {
        name: 'color-flipper',
        source: 'https://github.com/hasanKryym/color_flipper',
        img: './img/color-flipper.png',
    },

    {
        name: 'counter',
        source: 'https://github.com/hasanKryym/Counter',
        img: './img/counter.png',
    },
    
];

const workSection = document.querySelector('.work');

function createProject() {
    for (let i =0; i < projectsArray.length; i++) {
        projects = `
        <div class="project">
            <a href="${projectsArray[i].source}"> 
                <div class="container">
                 <img src="${projectsArray[i].img}" alt="Avatar" class="image" style="width:100%">
                    <div class="middle">
                        <div class="text"> ${projectsArray[i].name} </div>
                    </div>
                </div>
            </a>
        </div>
    `;
    workSection.innerHTML += projects;
    }
    
}

createProject();