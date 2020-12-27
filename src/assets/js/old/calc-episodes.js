/* Alteração do conteúdo da tag .main-title no html */

//var titulo = document.querySelector(".main-title");

//titulo.textContent = "Currently Watching List";

/* Calculando quantos episodios faltam para completar o anime*/
/*Shin Seiki Evangelion example*/

/*No caso abaixo temos que será exibido no console o trecho html referente ao #anime-eva de modo completo, todo o tr (toda a linha)*/
//var episodeToComplete = document.querySelector("#anime-eva");
//console.log(episodeToComplete);

/*buscando uma informação (célula) específica*/
//episodeToComplete.querySelector(".ep-to-complete");

// -----
/* Obtendo conteúdo de tags e utilizando-as para certo resultado*/
/*Quantos episódios faltam para completar o anime?*/

/* Declaração de variável que reserva as info */
    /* 1 - Selecionando a ID de Shin Seiki Evangelion */
var currentlyWatching = document.querySelector("#anime-cw-table");

/* 2- Selecionando a class da célula para manipular o conteúdo */
var animeEpProgress = currentlyWatching.querySelector(".ep-progress");
var animeProgress = animeEpProgress.textContent;

/* 3- Selecionando a class da célula para manipular o conteúdo */
var animeEpTotal = currentlyWatching.querySelector(".ep-total");
var animeTotal = animeEpTotal.textContent;

var animeEpDifference = currentlyWatching.querySelector(".ep-to-complete");

/* 6- Limitando o valor para condição 5 */
var animeProgressValid = true;
var animeTotalValid = true;
var epValid = true;

/* 5- Validação de resultados antes do cálculo */
if (animeProgress < 0 || animeTotal < 0) {

    epValid = false;
    animeEpDifference.textContent = "Resultado inválido."
}

if ( epValid ) {
    /* 4- Declarando variável para a célula com resultado e solucionando a diferença*/
    var animeDifference = animeTotal - animeProgress;

    console.log(animeDifference);

    /* 5- Exibindo o resultado na tabela  */
    animeEpDifference.textContent = animeDifference;
}

//aplicando com um anime completo

//var animeWorking = document.querySelector("#anime-working");

//var workingStory = animeWorking.querySelector(".anime-rate-story");
//var storyWorking = workingStory.textContent;

//var workingOst = animeWorking.querySelector(".anime-rate-ost");
//var ostWorking = workingOst.textContent;

//var workingVa = animeWorking.querySelector(".anime-rate-va");
//var vaWorking = workingVa.textContent;

//var workingAnimation = animeWorking.querySelector(".anime-rate-animation");
//var animationWorking = workingAnimation.textContent;

//var workingScore = (storyWorking + ostWorking + vaWorking + animationWorking) / 4;

//var workingTotalScore = animeWorking.querySelector(".anime-score");
//workingTotalScore.textContent = workingScore;