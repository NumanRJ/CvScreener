console.log("this is js file");
const data = [
    {
        name:'Numan',
        age : 22,
        city : "lahore",
        language : 'Python',
        framework : 'Djanfo',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name:'Kamran',
        age : 23,
        city : "lahore",
        language : 'javascript',
        framework : 'node.js',
        image: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
        name:'Rizwan',
        age : 29,
        city : "lahore",
        language : 'Ruby',
        framework : 'ROR',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
        name:'Ramiz',
        age : 32,
        city : "lahore",
        language : 'C',
        framework : 'Null',
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
    },
]

function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex<profiles.length? 
            {value: profiles[nextIndex++], done : false}:
            {done : true}
        }
    };
}

// button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV();

function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} Years Old</li>
    <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
    <li class="list-group-item">primarily works on: ${currentCandidate.language}</li>
    <li class="list-group-item">Uses: ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert("End of Applications");
        window.location.reload();
    }
}