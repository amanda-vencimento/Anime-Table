/* ((( Usando o botão ))) */

/* 1- Utilizando o botão e classificando-o para ser "ouvido" */

var buttonAdd = document.querySelector("#adicionar-paciente");

// console.log(buttonAdd); - com isso comfirmamos no console e está funcionando

/* 2- Adicionando um escutador de evento para o click */
buttonAdd.addEventListener("click", function(event){

    event.preventDefault(); //essa função event.preventDefault(); previne os comportamentos usuais do navegador
    
    // ((( Adicionando um novo item a tabela )))

    var form = document.querySelector("#new-item-form");

    var title = form.title.value;
    var status = form.status.value;
    var score = form.score.value;
    var type = form.type.value;
    var progress = form.progress.value;
    var episode = form.episode.value;

 /* Seguindo as designações abaixo conseguimos testa a premisa no console do navegador
    console.log(title);
    console.log(status);
    console.log(score);
    console.log(progress);
    console.log(episode);
    console.log(epDifference);
    console.log(type); */

    var itemTr = document.createElement("tr");

    var titleTd = document.createElement("td");
    var statusTd = document.createElement("td");
    var scoreTd = document.createElement("td");
    var typeTd = document.createElement("td");
    var progressTd = document.createElement("td");
    var episodeTd = document.createElement("td");

    titleTd.textContent = title;
    statusTd.textContent = status;
    scoreTd.textContent = score;
    progressTd.textContent = progress;
    episodeTd.textContent = episode;
    epDifferenceTd.textContent = epDifference;
    typeTd.textContent = type;

    itemTr.appendChild(titleTd);
    itemTr.appendChild(statusTd);
    itemTr.appendChild(scoreTd);
    itemTr.appendChild(typeTd);
    itemTr.appendChild(progressTd);
    itemTr.appendChild(episodeTd);

    var tableAnime = document.querySelector("#anime-cw");
    tableAnime.appendChild(itemTr);
});