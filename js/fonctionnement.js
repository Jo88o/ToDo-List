// creation de mes variables // 
let myBody = document.getElementsByTagName('body')[0];
let myInput = document.getElementsByTagName('input')[0];
let myButtonForAdd = document.getElementsByClassName('btn_add')[0];
let myDivList = document.querySelectorAll('div')[4];

let myButton1;
let mybtn;
let myDivForMyButton;

// creation de la creation des div //


myBody.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if (myInput.value != "") {
            let myDivInList = document.createElement('div');
            let myspan = document.createElement('span');
            myDivList.appendChild(myDivInList);
            myDivInList.appendChild(myspan)
            myspan.innerHTML += myInput.value

            myDivForMyButton = document.createElement('div');
            myDivInList.appendChild(myDivForMyButton);

            myDivForMyButton.setAttribute('class', 'divForMybutton')

            myButton1 = document.createElement('button');
            myButton1.setAttribute('class', 'myButton1');
            let myButton2 = document.createElement('button');
            myButton2.setAttribute("class", "myButton");
            let myButton3 = document.createElement('button');
            myButton3.setAttribute("class", "myButton");

            myDivForMyButton.appendChild(myButton1);
            myDivForMyButton.appendChild(myButton2);
            myDivForMyButton.appendChild(myButton3);



            // ICONES //
            let icone1 = document.createElement('i');
            myButton1.appendChild(icone1)
            icone1.setAttribute('class', 'far fa-check-square fa-2x')
            let icone2 = document.createElement('i');
            myButton2.appendChild(icone2);
            icone2.setAttribute('class', 'fas fa-edit fa-2x');
            let icone3 = document.createElement('i');
            myButton3.appendChild(icone3)
            icone3.setAttribute('class', 'far fa-trash-alt fa-2x')

            myDivInList.setAttribute('class', 'divInList');

            // fonctionnement des button //
            let button1 = myDivForMyButton.querySelectorAll('button')[0];
            let button2 = myDivForMyButton.querySelectorAll('button')[1];
            let button3 = myDivForMyButton.querySelectorAll('button')[2];

            button1.addEventListener('click', () => {
                myDivInList.classList.toggle('icone1');
                button2.classList.toggle('button2');
                button3.classList.toggle('button2');
            });

            button2.addEventListener('click', () => {
                let input2 = document.createElement('input');
                myDivForMyButton.appendChild(input2);
                let buttonInput2 = document.createElement('button');
                myDivForMyButton.appendChild(buttonInput2)
                buttonInput2.classList.add('btn-input2')

                buttonInput2.addEventListener('click', () => {
                    myspan.innerText = input2.value;
                    if (input2.value == "") {
                        alert('fais pas le bnedem')
                    }
                    buttonInput2.remove();
                    input2.remove();
                    //button1.classList.toggle('button2');
                    //button3.classList.toggle('button2');
                })
                console.log(myspan);


            });

            button3.addEventListener('click', () => {
                let qst = prompt('voulez vous supprimer ? oui ou non');
                if (qst == 'oui') {
                    myDivInList.classList = 'icone3'
                } else {
                    alert('opération annulée')
                }
            });
            myInput.value = '';
        } else {
            alert('veuillez entrer quelque chose');
        }
    }
})










