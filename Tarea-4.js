'use strict'

//Symbol.iterator: El símbolo conocido como Symbol.iterator especifica el iterador por defecto para un objeto. Utilizado por for...of.
let range = {
    from: 1,
    to: 5
  };
  
  // Inicia con for...of
  range[Symbol.iterator] = function() {
  
    // Trabaja solo con el objeto iterador debajo
    return {
      current: this.from,
      last: this.to,
  
      // Esta llamado en cada iteración por el bucle for..of
      next() {
        // Debe devolver el valor como un objeto 
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };
  
  for (let num of range) {
    alert(num); 
  }
//Map: Es una función que te permite transformar un iterable completo usando otra función
//Inicio
let recipeMap = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas',    50]
  ]);
  
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); 
  }
  
  
  for (let amount of recipeMap.values()) {
    alert(amount); 
  }
  
  
  for (let entry of recipeMap) { 
    alert(entry); 
  }

//WeakMap:  Es una colección similar a Map que permite solo objetos como propiedades y los elimina junto con el valor asociado una vez que se vuelven inaccesibles por otros medios.
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // Esta funcionando

// No puede usar un string como una clave
weakMap.set("test", "Whoops"); // Da error, porque el (test) no esta clasificado comoun objeto
//Weakset: Es una colección tipo Set que almacena solo objetos y los elimina una vez que se vuelven inaccesibles por otros medios.
let visitedSet = new WeakSet();

let john = { name: "Jose" };
let pete = { name: "Roberto" };
let mary = { name: "Dylan" };

visitedSet.add(Jose); //1
visitedSet.add(Roberto); //2
visitedSet.add(Dylan); //3

// comprobar si nos visitó?
alert(visitedSet.has(john)); //Verdadero

// comprobar nos visitó?
alert(visitedSet.has(mary)); // falso

john = null;
