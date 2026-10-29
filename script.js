// Smooth navigation for internal links

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const projects = [
    {
    name: "Aver Media",
    image: "assets/images/aver.webp",
    url: "https://aver.media/"
},
{
    name: "Bennu Parts",
    image: "assets/images/bennuparts.webp",
    url: "https://bennuparts.com/"
},
{
    name: "Beyond Build Power",
    image: "assets/images/beyondbuildpower.webp",
    url: "https://beyondbuildpower.com/"
},
{
    name: "Beckwith Commercial Roofing",
    image: "assets/images/beckwithcommercialroofing.webp",
    url: "https://beckwithcommercialroofing.com/"
},
{
    name: "Borsberry Law",
    image: "assets/images/borsberrylaw.webp",
    url: "https://borsberrylaw.com/"
},
{
    name: "Berchtold Asphalt",
    image: "assets/images/berchtoldasphalt.webp",
    url: "https://berchtoldasphalt.com/"
},
{
    name: "Brothers Gutters 815",
    image: "assets/images/brothersgutters815.webp",
    url: "https://brothersgutters815.com/"
},
{
    name: "Brothers Gutters 309",
    image: "assets/images/brothersgutters309.webp",
    url: "https://brothersgutters309.com/"
},
{
    name: "Craft Xpertz",
    image: "assets/images/craftxpertz.webp",
    url: "https://craftxpertz.com/"
},
{
    name: "Compassionate Coexist",
    image: "assets/images/compassionatecoexist.webp",
    url: "https://compassionatecoexist.com/"
},
{
    name: "Central Illinois Construct",
    image: "assets/images/cicontractor.webp",
    url: "https://cicontractor.com/"
},
{
    name: "CLR Illinois",
    image: "assets/images/clrillinois.webp",
    url: "https://clrillinois.com/"
},
{
    name: "Comfort Specialists",
    image: "assets/images/comfort-specialists.webp",
    url: "https://comfort-specialists.com/"
},
{
    name: "DC Tree Landscape",
    image: "assets/images/dctreelandscape.webp",
    url: "https://dctreelandscape.com/"
},
{
    name: "Defender Expeditions Club",
    image: "assets/images/defenderexpeditionsclub.webp",
    url: "https://defenderexpeditionsclub.com/"
},
{
    name: "Denny Zimmerman Roofing",
    image: "assets/images/dennyzimmermanroofing.webp",
    url: "https://dennyzimmermanroofing.com/"
},
{
    name: "DM-IG",
    image: "assets/images/dm-ig.webp",
    url: "https://dm-ig.com/"
},
{
    name: "Everything Water Plumbing",
    image: "assets/images/everythingwaterplumbing.webp",
    url: "https://everythingwaterplumbing.com/"
},
{
    name: "Farmington Road Storage",
    image: "assets/images/farmingtonroadstorage.webp",
    url: "https://farmingtonroadstorage.com/"
},
{
    name: "Fulton County Health",
    image: "assets/images/fultoncountyhealth.webp",
    url: "https://fultoncountyhealth.com/"
},
{
    name: "Homlar Law",
    image: "assets/images/homlarlaw.webp",
    url: "https://homlarlaw.com/"
},
{
    name: "Jadia Jewels",
    image: "assets/images/jadiajewels.webp",
    url: "https://jadiajewels.com/"
},
{
    name: "Jambughoda",
    image: "assets/images/jambughoda.webp",
    url: "https://jambughoda.com/"
},
{
    name: "Khimani Cotton",
    image: "assets/images/khimanicotton.webp",
    url: "https://khimanicotton.com/"
},
{
    name: "McCabs Ride",
    image: "assets/images/mccabsride.webp",
    url: "https://mccabsride.com/"
},
{
    name: "Mike's Tracklesstrain",
    image: "assets/images/mikestracklesstrain.webp",
    url: "https://mikestracklesstrain.com/"
},
{
    name: "Morgan Millwright",
    image: "assets/images/morganmillwright.webp",
    url: "https://morganmillwright.com/"
},
{
    name: "Nildos",
    image: "assets/images/nildos.webp",
    url: "https://nildos.com/"
},
{
    name: "Prairie State Siding",
    image: "assets/images/prairiestatesiding.webp",
    url: "https://prairiestatesiding.com/"
},
{
    name: "Peoria Heights Properties",
    image: "assets/images/peoriaheightsproperties.webp",
    url: "https://peoriaheightsproperties.com/"
},
{
    name: "Peoria Gutter Masters",
    image: "assets/images/peoriaguttermasters.webp",
    url: "https://peoriaguttermasters.com/"
},
{
    name: "R.D. Davis Heating",
    image: "assets/images/rddavisheating.webp",
    url: "https://rddavisheating.com/"
},
{
    name: "RDC Drilling",
    image: "assets/images/rdcdrilling.webp",
    url: "https://rdcdrilling.com/"
},
{
    name: "Shawgo Memorial Home",
    image: "assets/images/shawgomemorialhome.webp",
    url: "https://shawgomemorialhome.com/"
},
{
    name: "Smile Center Peoria",
    image: "assets/images/smilecenterpeoria.webp",
    url: "https://smilecenterpeoria.com/"
},
{
    name: "St. Peter Benson",
    image: "assets/images/stpeterbenson.webp",
    url: "https://stpeterbenson.com/"
},
{
    name: "St. Paul Peoria",
    image: "assets/images/stpaulpeoria.webp",
    url: "https://stpaulpeoria.org/"
},
{
    name: "Sunset Metal Roofing",
    image: "assets/images/sunsetmetalroofing.webp",
    url: "https://www.sunsetmetalroofing.com/"
},
{
    name: "Suttatti",
    image: "assets/images/suttatti.webp",
    url: "https://suttatti.com/"
},
{
    name: "St. Anthony Bartonville",
    image: "assets/images/stanthonybartonville.webp",
    url: "https://stanthonybartonville.com/"
},
{
    name: "Tazewell County",
    image: "assets/images/tazewell-il.webp",
    url: "https://tazewell-il.gov/"
},
{
    name: "The Solar Panther",
    image: "assets/images/thesolarpanther.webp",
    url: "https://thesolarpanther.com/"
},
{
    name: "We Care of Morton",
    image: "assets/images/wecareofmorton.webp",
    url: "https://wecareofmorton.com/"
},
{
    name: "Yoder Oil Inc.",
    image: "assets/images/yoderoilinc.webp",
    url: "https://yoderoilinc.com/"
}
    
];

const projectsGrid = document.getElementById("projects-grid");

const projectsPerLoad = 9;
let visibleProjects = 0;


// Create project card
function createProject(project) {

    const article = document.createElement("article");

    article.className = "project";

    article.innerHTML = `
        <a href="${project.url}"
           target="_blank"
           rel="noopener noreferrer"
           class="project-image">

            <img src="${project.image}"
                 alt="${project.name} website">

            <div class="project-overlay">
                <span>VIEW SITE ↗</span>
            </div>

        </a>

        <h3>${project.name}</h3>
    `;

    return article;
}


// Show next 9 projects
function loadProjects() {

    const nextProjects = projects.slice(
        visibleProjects,
        visibleProjects + projectsPerLoad
    );

    nextProjects.forEach(project => {
        projectsGrid.appendChild(createProject(project));
    });

    visibleProjects += nextProjects.length;

    updateLoadMoreButton();
}


// Create Load More button
const loadMoreButton = document.createElement("button");

loadMoreButton.className = "load-more";
loadMoreButton.textContent = "LOAD MORE";

loadMoreButton.addEventListener("click", loadProjects);


// Add button after project grid
projectsGrid.parentNode.appendChild(loadMoreButton);


// Hide button when everything is loaded
function updateLoadMoreButton() {

    if (visibleProjects >= projects.length) {
        loadMoreButton.style.display = "none";
    } 
}


// Initial 9 projects
loadProjects();
    
