console.log("Welcome to magic notes");
showNotes();
//if user adds a Notes,add it to the localStorage
let addBtn=document.querySelector("#addBtn");
addBtn.addEventListener("click",function(e){
	let addText=document.querySelector("#addText");
	let notes=localStorage.getItem("notes");
	if(notes==null){
		notesObj=[];
	}
	else{
		notesObj=JSON.parse(notes);
	}
	notesObj.push(addText.value);
	localStorage.setItem("notes",JSON.stringify(notesObj));
	addText.value="";
	console.log(notesObj);
	showNotes();
})

//Show Notes
function showNotes(){
	let notes=localStorage.getItem("notes");
	if(notes==null){
		notesObj=[];
	} 
	else{
		notesObj=JSON.parse(notes);
	}
	html="";
	notesObj.forEach(function(element,index){
		html+=`<div class="card" >

            <h5 class="card_title">Note${index+1}</h5>
			<p class="card_text">${element}</p>
			<button class="delBtn" id="${index}" onclick="deleteNote(this.id)">Delete notes</button>
			</div>`;
		});

let noteElm=document.querySelector("#notes");
if(notesObj.length!=0){
	noteElm.innerHTML=html;
}
else{
	noteElm.innerHTML="Nothing to show";
}
}

//delete notes

function deleteNote(index){
	console.log("i'm deleting",index);
	let notes=localStorage.getItem("notes");
	if(notes==null){
		notesObj=[];
	}
	else{
		notesObj=JSON.parse(notes);
	}
	notesObj.splice(index,1);
	localStorage.setItem("notes",JSON.stringify(notesObj));
	showNotes();
}