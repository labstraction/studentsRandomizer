const s1 = new Student("manuela", "ariotti");
const s2 = new Student("damiano", "di lionardo");
const s3 = new Student("cesare", "falzone");
const s4 = new Student("luca", "verduci");
const s5 = new Student("isabella", "ottonello");
const s6 = new Student("stefania", "ghergut");
const s7 = new Student("ares", "fiumicelli");
const s8 = new Student("francesca", "ercolani");
const s9 = new Student("stefano", "florio");
const s10 = new Student("bryan", "rojas");

const class1 = new Classroom([s1,s2,s3,s4,s5,s6,s7,s8,s9]);


// console.log(document);

// console.log(document.getElementById('main-container'))


// const mainContainer = document.getElementById('main-container');

// const h2Element = document.createElement('h2');

// const textNode = document.createTextNode('pippo de pippis');

// h2Element.appendChild(textNode);

// mainContainer.appendChild(h2Element);


function renderPage(members){

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < class1.studentsArray.length; i++) {

        if(i % members === 0){
            const h3Element = document.createElement('h3');

            const node = document.createTextNode('Squadra ' + (i/members+1) + ': ');

            h3Element.appendChild(node);

            mainContainer.appendChild(h3Element);
        }

        const student = class1.studentsArray[i]
        
        const pElement = document.createElement('p');

        pElement.classList.add('student-p')

        const textNode = document.createTextNode(student.toString());

        pElement.appendChild(textNode);

        mainContainer.appendChild(pElement);
    }

}

renderPage(3);


function shuffle(){
    console.log('sto rimescolando');
    class1.shuffleStudents();
    renderPage(3);
}


//// Compito per il fine settimana:
//1) Creare una applicazione che mostri una lista di videogiochi/film/libri(quello che volete)
//// e che possa essere messa in ordine per nome o anno di pubblicazione

//2) Capitoli 13 / 14 di eloquent js