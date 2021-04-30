console.log("this is project 5");
//data is an array of objects which contains information about tge candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }

]


//cv iterator

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            /*let result=(nextIndex < profiles.length)?
            {value: profiles[nextIndex++],done:false}: 
            {done:true};
            return  result;*/
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }


        }
    };
}
const candidates = cvIterator(data);
nextCv();
//button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCv);



function nextCv() {
    const currentCandidates = candidates.next().value;

    let image = document.getElementById("image");
    let profiles = document.getElementById("profile");
    if (currentCandidates != undefined) {
        image.innerHTML = `<img src="${currentCandidates.image}">`;

        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidates.name}</li>
    <li class="list-group-item">Lives in ${currentCandidates.city}</li>
    <li class="list-group-item">${currentCandidates.age} years old</li>
    <li class="list-group-item">Primarilyworks on${currentCandidates.language}</li>
    <li class="list-group-item">with ${currentCandidates.framework}</li>
  </ul>`;
    }
    else {
        alert("End of application");
        window.location.reload();
    }
}



