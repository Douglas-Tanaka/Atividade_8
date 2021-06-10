
let url = 'https://atividade08.herokuapp.com/psytrance'

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionando");
        output.innerHTML = await response.text();
    } else {
        console.log("Nao funcionou");
    }
}

async function callFetchWithPost(psytrance){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'psytrances' : psytrance
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, newPsytrance){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'psytrances' : novoPsytrance
        })
    }
    await fetch(`${url}/${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("postado");
    const form = document.forms['postForm'];    
    const newdj = form["DJ/produtor"].value;
    const newvert = form["Vertente"].value;
    const newabout = form["about"].value;

    const novo = {"DJ/produtor": newdj , "Vertente" : newvert, "about" : newabout};
    
    callFetchWithPost(novo);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const newdj = form["DJ/produtor"].value;
    const newvert = form["Vertente"].value;
    const newabout = form["about"].value;

    const novo = {"DJ/produtor": newdj , "Vertente" : newvert, "about" : newabout};
    
    callFetchWithPut(id, novo);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
