console.log("welcome to magic notes");
showNotes();

//if user adds anote, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle=document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    addTitle.value="";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    //console.log(notes);
    showNotes();
});

//function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2" style="width: 18rem; border: 0.01rem solid #c8c9ca;">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5> 
                  <p class="card-text">${element.text}</p>               
                  <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">delete note</button>
                </div>
              </div> `;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothig to show ! use "add a note" sectoin avobe to add notes`;
    }

}


//function to delete a note
function deleteNote(index) {
    //console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}


let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {


    let inputVal = search.value.toLowerCase();
    //console.log("input event fired", inputVal);
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        //console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none"; 
        }
    })
})
 