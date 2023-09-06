/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e confermate lettura come al solito!
*/

//Creare l’array di oggetti con le informazioni fornite.
const dati_team = [
    {
        'name' : 'Wayne Barnett',
        'job' : 'Founder & CEO',
        'img' : 'wayne-barnett-founder-ceo.jpg',
    },

    {
        'name' : 'Angela Caroll',	
        'job' : 'Chief Editor',
        'img' : 'angela-caroll-chief-editor.jpg',
    },

    {
        'name' : 'Walter Gordon',
        'job' : 'Office Manager',
        'img' : 'walter-gordon-office-manager.jpg',
    },

    {
        'name' : 'Angela Lopez',
        'job' : 'Social Media Manager',
        'img' : 'angela-lopez-social-media-manager.jpg',
    },

    {
        'name' : 'Scott Estrada',
        'job' : 'Developer',
        'img' : 'scott-estrada-developer.jpg',
    },

    {
        'name' : 'Barbara Ramos',
        'job' : 'Graphic Designer',
        'img' : 'barbara-ramos-graphic-designer.jpg',
    }
]



/* MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/

for (let i = 0; i < dati_team.length; i++) {
    console.log(dati_team[i]);    
}
