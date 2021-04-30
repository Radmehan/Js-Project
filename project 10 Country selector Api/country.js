//button with id btn
let mybtn=document.getElementById('mybtn');

//div with id content
let content=document.getElementById('content');

function getdata(){
    console.log("started get data")
    url=`https://api.github.com/users`;
    fetch(url)
    .then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data)
    })
}
console.log('Before get data');
getdata()
console.log('after get data');


function postdata(){
    url=`http://dummy.restapiexample.com/api/v1/create`;
    data=`{"name":"harry123345","salary":"123345","age":"23"}`
    params={
        method:'POST',
        'Content-type':'application/json',
        body: data
    }
    fetch(url,params)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
    })
}

postdata();