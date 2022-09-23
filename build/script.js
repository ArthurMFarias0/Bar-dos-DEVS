"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Drinks_1 = require("./Drinks");
var showMenu_1 = require("./showMenu");
var Cliente_1 = require("./Cliente");
var Vinho_1 = require("./Vinho");
var BatidaVariaveis_1 = require("./BatidaVariaveis");
var LagoaTypeS_1 = require("./LagoaTypeS");
var GinConst_1 = require("./GinConst");
var prompt = PromptSync();
var cliente = new Cliente_1.Cliente(prompt('Digite seu nome: '), prompt('Digite sua idade: '));
var vinho = new Vinho_1.Vinho(14);
var batidavariaveis = new BatidaVariaveis_1.BatidaVariaveis(0);
var lagoaTypes = new LagoaTypeS_1.LagoaTypes(12);
var ginConst = new GinConst_1.GinConst(14);
console.table(cliente);
var i = 0;
var nDrinks = [];
do {
    if (cliente.age >= 18) {
        console.log('Olá Dev! Temos um catálogo de drinks com e sem álcool disponível para você!');
    }
    else {
        console.log('Boa noite pequene padawan!  Vimos que você não tem idade para consumir nossas cortesias alcólicas. Não tem problema, solicite um atendente e ele te dirá as melhores opções sem álcool para consumo. Seja bem vinde e até breve!!');
        break;
    }
    var select = (0, showMenu_1.showMenu)();
    if (select == Drinks_1.Drinks.drink1) {
        console.log('\nVocê escolheu Batidade de Variáveis!\n\n');
        heavyCrash(batidavariaveis);
    }
    if (select == Drinks_1.Drinks.drink2) {
        console.log('\nVocê escolheu Lagoa TypeS!\n\n');
        softCrash(lagoaTypes);
    }
    if (select == Drinks_1.Drinks.drink3) {
        console.log('\nVocê escolheu Gin Const!\n\n');
        heavyCrash(ginConst);
    }
    if (select == Drinks_1.Drinks.drink4) {
        console.log('\nVocê escolheu Console.Vinho!\n\n');
        softCrash(vinho);
    }
    i++;
    nDrinks[i];
} while (i < 2);
{
}
function softCrash(drink) {
    return console.log('Você travará de levinho!');
}
function heavyCrash(drink) {
    return console.log('Você travará mais que windows 95! ');
}
cliente.endInteraction();
