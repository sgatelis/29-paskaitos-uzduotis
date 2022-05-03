"use strict"

var pasaulioSalys = [
    {
      saliesPavadinimas: "Ispanija",
      valstybesPlotas: 505990, 
      gyventojuSkaicius: 47.45 
    },
    {
      saliesPavadinimas: "Italija",
      valstybesPlotas: 301230, 
      gyventojuSkaicius: 60.32 
    },
    {
      saliesPavadinimas: "Graikija",
      valstybesPlotas: 131957, 
      gyventojuSkaicius: 10.68 
    },
    {
      saliesPavadinimas: "Indija",
      valstybesPlotas: 3287263, 
      gyventojuSkaicius: 1.38
    },
    {
      saliesPavadinimas: "Prancūzija",
      valstybesPlotas: 551695, 
      gyventojuSkaicius: 67.41 
    }    
]
function salys(saliesPavadinimas, valstybesPlotas, gyventojuSkaicius){
   var plotasVienamGyventojui = valstybesPlotas / gyventojuSkaicius 

   console.log(`Šalis: ${saliesPavadinimas}, joje gyvena ${gyventojuSkaicius}mln. gyventojų. Valstybės plotas: ${valstybesPlotas}km2, plotas, tenkantis vienam gyventojui: ${plotasVienamGyventojui.toFixed(2)}m2`)
}

for(var x of pasaulioSalys){
    salys(x.saliesPavadinimas, x.valstybesPlotas, x.gyventojuSkaicius)
}