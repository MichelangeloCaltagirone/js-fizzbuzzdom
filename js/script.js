// Milestone 1 
/*
Tutto rimane in console. Creo un for che dovrà fare 100 cicli, e utilizzo proprio la variabile di controllo
per rappresentare i numeri da 1 a 100.
Dentro al ciclo for, innesto una serie di if per controllare il resto della divisione del numero corrente, così
da decidere cosa assegnargli, e poi stampo il risultato direttamente in Console.
*/
/*
for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) console.log('FizzBuzz');
    else if (i % 5 == 0) console.log('Buzz!');
    else if (i % 3 == 0) console.log('Fizz!');
    else console.log(i);
}
*/


// Milestone 2
// Sempre la stessa richiesta, ma invece di stampare in Console, stampo in pagina.

// Metodo .innerHTML con interpolazione. Creo una variabile let fuori dal ciclo for, dentro al ciclo monto la risposta corretta, e solo quando esco dal ciclo
// stampo in pagina la risposta nell'elemento del DOM selezionato.

// Fase di preparazione
// Recupero prima gli elementi di interesse dal DOM
const showRes = document.querySelector('div');

// Setto una variabile da appoggio per montare il risultato senza scrivere ogni volta in pagina
/*
let result = ''; 

// Elaboro i dati con i controlli
for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) result += `FizzBuzz!<br>`;  // ogni volta devo aggiugere un <br> per mandare a capo. In più è tutto una stringa alla fine nel elemento in pagina, scomodo per lavorarci sopra.
    else if (i % 5 == 0) result += `Buzz!<br>`;
    else if (i % 3 == 0) result += `Fizz<br>`;
    else result += `${i}<br>`;
}
*/


// Soluzione con una lista (per aver direttamente degli elementi su cui poi lavorare col CSS)
// Preparo variabile da appoggio.
let listRes = '<ul>'

// Elaboro dati
for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) listRes += `<li class='bg-primary'>FizzBuzz!</li>`; 
    else if (i % 5 == 0) listRes += `<li class='bg-danger'>Buzz!</li>`;
    else if (i % 3 == 0) listRes += `<li class='bg-warning'>Fizz!</li>`;
    else listRes += `<li>${i}</li>`;
}

// Chiudo la lista solo dopo aver finito il ciclo for.
listRes += '</ul>'

// Produco output in pagina
showRes.innerHTML = listRes;




