var currentlyWatching = document.querySelectorAll(".item-cw");

/* Incrementando para todos os pacientes */

for (var i = 0; i < currentlyWatching.length ; i++){

    var watching = currentlyWatching[i];

    var itemEpProgress = watching.querySelector(".ep-progress");
    var epProgress = itemEpProgress.textContent;
    
    var itemEpTotal = watching.querySelector(".ep-total");
    var epTotal = itemEpTotal.textContent;
    
    var itemEpDifference = watching.querySelector(".ep-to-complete");
    
    /* Validação com variáveis */
    var itemDifferenceValid = true;
    var itemProgressValid = validProgress(epProgress,epTotal);
    var itemEpisodeValid = validEpisode(epTotal);

    if (!itemProgressValid) {
    
        itemDifferenceValid = false;
        itemEpProgress.textContent = "Number invalid";
        itemEpDifference.textContent = "Result invalid";
        watching.classList.add("wrong-result");
    }

    if ( !itemEpisodeValid) {
    
        itemDifferenceValid = false;
        itemEpTotal.textContent = "Number invalid";
        itemEpDifference.textContent = "Result invalid";
        watching.classList.add("wrong-resulto");
    }
    
    
    if (itemDifferenceValid){

    var epDifference = calcEps(epProgress,epTotal);
    itemEpDifference.textContent = epDifference;
    
    }
}

function validProgress(epProgress) {
    if (epProgress > 0) {
        return true;
    } else{
        return false
    }
}

function validEpisode(epTotal) {
    if (epTotal > 0) {
        return true;
    } else {
        return false;
    }
}

function calcEps(epProgress,epTotal){

    epDifference = 0;
    epDifference = epTotal - epProgress;
    
    if (epDifference < 0) {
        
        itemProgressValid = false;
        itemEpProgress.textContent = "Number invalid";
        epDifference = "Result invalid";
        watching.classList.add("wrong-resultp");
    }

    return epDifference;
}