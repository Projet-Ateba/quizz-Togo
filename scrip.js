const form = document.querySelector('.form_quizz');
let tableau = [];
const reponses = ['c','b','c','b','b'];
const emojis = ['✅','✨','👀','😭','👎🏾','👍🏽'];
const titre = document.querySelector('.resultats h2');
const note = document.querySelector('.note');
const aide = document.querySelector('.aide');
const toute = document.querySelectorAll('.question');
let tabVerif =[];

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    for(let i=1; i<6; i++){
        tableau.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    verification(tableau)
    tableau= [];
})

function verification(tabResultats) {
    for(let a = 0; a<5; a++){
        if(tabResultats[a] === reponses[a]){
            tabVerif.push(true);
        }else {
            tabVerif.push(false)
        }
    }
    afficherResultats(tabVerif);
    couleur(tabVerif);
    tabVerif=[];
}

function afficherResultats(tabCheck) {
    const nombredeFaute = tabCheck.filter(el => el !== true).length;

    switch(nombredeFaute) {
        case 0:
            titre.innerText = `${emojis[0]} Félicitation, c'est un sans faute ! ${emojis[0]}`;
            aide.innerText = '';
            note.innerText = `5/5 ${emojis[5]}`;
        break;
        case 1:
            titre.innerText = `${emojis[1]} Vous y étès presque... ! ${emojis[0]}`;
            aide.innerText = ' Retentez une autre reponses dans les cases en rouges, puis re-validez !';
            note.innerText = `4/5 ${emojis[5]}`;
        break;
        case 2:
            titre.innerText = `${emojis[1]} Encore un effort ... ${emojis[1]}`;
            aide.innerText = ' Retentez une autre reponses dans les cases en rouges, puis re-validez !';
            note.innerText = `3/5 ${emojis[5]}`;
        break;
        case 3:
            titre.innerText = `${emojis[2]} Il reste quelques erreurs. continuez ${emojis[2]}`;
            aide.innerText = ' Retentez une autre reponses dans les cases en rouges, puis re-validez !';
            note.innerText = `2/5 ${emojis[5]}`;
        break;
        case 4:
            titre.innerText = `${emojis[3]} Peut Mieux faire ! ${emojis[4]}`;
            aide.innerText = ' Retentez une autre reponses dans les cases en rouges, puis re-validez !';
            note.innerText = `1/5 ${emojis[5]}`;
        break;
        case 5:
            titre.innerText = `${emojis[3]} Décidement vous ne connaissez rien au Togo ${emojis[3]}`;
            aide.innerText = ' Retentez une autre reponses dans les cases en rouges, puis re-validez !';
            note.innerText = `0/5 ${emojis[3]}`;
        break;
        default:
            'Cas non prise en compte'; 
    }
}


function couleur(tabValid) {
    for(let i=0; i<tabValid.length; i++){
        if(tabValid[i] === true){
            toute[i].style.background = '#49A078';
        }else {
            toute[i].style.background = '#F9627D';
            toute[i].classList.add('echec');

            setTimeout(() => {
                toute[i].classList.remove('echec');
            },500)
        }
    }
}

toute.forEach(le => {
    le.addEventListener('click', () => {
        le.style.background ="white";
    })
})