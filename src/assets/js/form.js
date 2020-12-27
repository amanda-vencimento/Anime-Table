/* ((( Usando o botão ))) */

/* 1- Utilizando o botão e classificando-o para ser "ouvido" */

var buttonAdd = document.querySelector("#adicionar-paciente");

// console.log(buttonAdd); - com isso comfirmamos no console e está funcionando

/* 2- Adicionando um escutador de evento para o click */
buttonAdd.addEventListener("click", function(event){

    event.preventDefault(); //essa função event.preventDefault(); previne os comportamentos usuais do navegador
    
    // ((( Adicionando um novo item a tabela )))

    var form = document.querySelector("#new-item-form");

    var item = obtainItemFromForm(form);

    /** Adicionando o item na tabela */
    var itemTr = settingUpTr(item);

    var fails = itemValidation(item);
    

    if (fails.length > 0) {
        console.log(fails);
        displayErrorMessage(fails);
        return;
    }
    var tableAnime = document.querySelector("#anime-cw");
    tableAnime.appendChild(itemTr);
    

    form.reset();
});

function displayErrorMessage(fails) {
    var ul = document.querySelector("#messages-fail");
    ul.innerHTML = "";
}

function obtainItemFromForm(form){

    var item = {
        title: form.title.value,
        status: form.status.value,
        score: form.score.value,
        progress: form.progress.value,
        episode: form.episode.value,
        difference:calcEps(form.progress.value, form.episode.value),
        type: form.type.value
    }

    return item;

    //aqui temos um objeto que contem todas as propriedades/caracteristicas do item
}

function settingUpTr(item) {
    
    var itemTr = document.createElement("tr");
    itemTr.classList.add("item-cw");

    itemTr.appendChild(settingUpTd(item.title, "anime-title"));
    itemTr.appendChild(settingUpTd(item.status, "anime-status"));
    itemTr.appendChild(settingUpTd(item.score, "anime-score"));
    itemTr.appendChild(settingUpTd(item.progress, "ep-progress"));
    itemTr.appendChild(settingUpTd(item.episode, "ep-total"));
    itemTr.appendChild(settingUpTd(item.difference, "ep-to-complete"));
    itemTr.appendChild(settingUpTd(item.type, "anime-type"));

    return itemTr;
}

function settingUpTd(dataTd, classTd) {
    var td = document.createElement("td");
    td.textContent = dataTd;
    td.classList.add(classTd);

    return td;
}

function itemValidation(item){

    var validCheckError = [];
    
    if(!validProgress(item.progress)){
        validCheckError.push("Progress input is invalid");}
     
    if (!validEpisode(item.episode)){
        validCheckError.push("Total Episode input is invalid");}

    if (item.progress > item.episode){
        validCheckError.push("Progress entry is invalid");}

    

    return validCheckError;
}