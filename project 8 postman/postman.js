console.log("this is js project 6- post man");

//utility function
//1. utility function to Get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//initialize no of parameter
let addedParamCount = 0;

//hide the parameter box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// If the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})

//if the use clicks on + button add more parameter
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="row g-3 my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
    <div class="col">
        <input type="text" class="form-control" placeholder="Enter parameter ${addedParamCount + 2} Key" id="parameterKey${addedParamCount + 2}">
    </div>
    <div class="col">
        <input type="text" class="form-control" placeholder="Enter parameter ${addedParamCount + 2} Value" id="parameterValue${addedParamCount + 2}">
    </div>
    <button class="btn btn-primary col-sm-1 deleteParam">-</button>
   </div>`;
    //convert the elementString to DOM mode
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    //add an event listener to remove the parameter on clicking- button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            //TODO : add an confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
})

//if the usr clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show please wait in the response box to request patience from the user
    document.getElementById('responseJsonText').value = "Please wait.. Fetching response..";
    //fetch the values user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;



    //if user has used params option instead of JSON, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }

    else {
        data = document.getElementById('requestJsonText').value
    }

    //log all the value in the console for debugging
    console.log("url is", url);
    console.log("requestType", requestType);
    console.log("contentType is", contentType);
    console.log("data is", data);

    //if the request type is post fetch api to create a post request
if(requestType=='GET'){
    fetch('url',{
        method:'GET',
    })
    .then(response=>response.text())
    .then((text)=>{
        let response=document.getElementById('responseJsonText').value=text;
    });
    
}
else{
    fetch('url',{
        method:'POST',
        body:data,
        headers:{
            "content-type":"application/json; charset=UTF-8"
        }
    })
    .then(response=>response.text())
    .then((text)=>{
        let response=document.getElementById('responseJsonText').value=text;
    });
    

}




})

