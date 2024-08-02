/*
Consegna:
MILESTONE 1
Scrivere un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
MILESTONE 2:
Creiamo un elemento che faccia da contenitore nel DOM e poi riempiamolo con i degli elementi via JS.
Possiamo usare varie tecniche  (template literals, innerHTML, appendecc)
MILESTONE 3:
Applichiamo stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto ci sono usare varie tecniche (style , className, classList)
Se siete a corto di idee per lo stile, potreste prendere spunto dallo screenshot fornito in consegna.
Consigli del giorno:
 Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore

*/


// Milestone 1 
/*
Tutto rimane in console. Creo un for che dovrà fare 100 cicli, e utilizzo proprio la variabile di controllo
per rappresentare i numeri da 1 a 100.
Dentro al ciclo for, innesto una serie di if per controllare il resto della divisione del numero corrente, così
da decidere cosa assegnargli, e poi stampo il risultato direttamente in Console.
*/

for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    } else if (i % 5 == 0) console.log('Buzz!');
      else if (i % 3 == 0) console.log('Fizz!');
      else console.log(i);
}

