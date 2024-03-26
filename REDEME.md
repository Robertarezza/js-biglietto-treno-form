# Biglietto del treno

### Testo della consegna
Descrizione:
Scrivere un programma che chieda all’utente:
- Nome e Cognome dell utente
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
:uno: MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
:due: MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

Svolgimento

1. Raccolta dati
-  creare in pagina 3 input:
 - [x] Nome e Cognome dell'utente
 - [x] Numero dei km che l'utente deve percorrere
 - [x] Età dell'utente 
 - [x] Crea in pagina un bottone 

2. Esecuzione logica
2. 2. al click sul bottone inserire event listener
- [x]raccogli dati utente
- [x] calcolo prezzo base: km dell'utente * 0.21
- [x] prendere il dato dell' età
- [x] definisco lo sconto
 
 ```
 Se è minorenne
        lo sconto è 20
Altrimenti se è over 65 
        lo sconto è 40
Altrimenti 
        lo sconto è 0
  ```
- [x] calcolo prezzo scontato

```
prezzo scontato = prezzo base - (prezzo base * sconto/100)
```


  3. Output

  stampa il risultato 