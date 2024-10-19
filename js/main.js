console.log('sono collegato')



//VERSIONE CORTA IN CONSOLE
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

const ulElement = document.getElementById('list-items');
console.log = (ulElement);

//VERSIONE PER STAMPARE IN PAGINA

let result = '';
for (let index = 1; index <= 100; index++) {
    //if (index % 3 === 0 && index % 5 === 0) 
    if (index % 15 === 0) {
        //console.log(index, 'fizzbuzz')
        result = 'fizbuzz';
    } else if (index % 3 === 0) {
        //console.log(index, 'fizz')
        result = 'fizz';
    } else if (index % 5 === 0) {
        //console.log(index, 'buzz')
        result = 'buzz';
    } else {
        //console.log(index)
        result = index;
    }

    // console.log(`sto stampando ${result}`);

    const liElement = document.createElement('li');

    liElement.append(result);
    ulElement.append(liElement);

}