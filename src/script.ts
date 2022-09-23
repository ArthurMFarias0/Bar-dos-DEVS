import PromptSync = require('prompt-sync')
import { Drink, Drinks } from './Drinks';
import { showMenu } from "./showMenu"
import { Cliente } from "./Cliente"
import { SoftCrash } from './SoftCrash';
import { Vinho } from './Vinho';
import { BatidaVariaveis } from './BatidaVariaveis';
import { LagoaTypes } from './LagoaTypeS';
import { GinConst } from './GinConst';
import { HeavyCrash } from './HeavyCrash';


const prompt = PromptSync();

const cliente = new Cliente(prompt('Digite seu nome: '),prompt('Digite sua idade: '))

const vinho = new Vinho (14);
const batidavariaveis = new BatidaVariaveis (0);
const lagoaTypes = new LagoaTypes (12);
const ginConst = new GinConst (14);


console.table(cliente);

let i = 0

let nDrinks = []

do {
    if ( cliente.age >= 18) {
        console.log ('Olá Dev! Temos um catálogo de drinks com e sem álcool disponível para você!');
    } else {
        console.log('Boa noite pequene padawan!  Vimos que você não tem idade para consumir nossas cortesias alcólicas. Não tem problema, solicite um atendente e ele te dirá as melhores opções sem álcool para consumo. Seja bem vinde e até breve!!');
        break;
    }


const select = showMenu()

if (select == Drinks.drink1) {
    console.log('\nVocê escolheu Batidade de Variáveis!\n\n');
    heavyCrash (batidavariaveis)

}
if (select == Drinks.drink2) {
    console.log('\nVocê escolheu Lagoa TypeS!\n\n');
    softCrash(lagoaTypes);
}
if (select == Drinks.drink3) {
    console.log('\nVocê escolheu Gin Const!\n\n');
    heavyCrash (ginConst)
}
if (select == Drinks.drink4) {
    console.log('\nVocê escolheu Console.Vinho!\n\n');
    softCrash(vinho);
}

i++
nDrinks [i]

} while (i < 2){
    
}

function softCrash (drink: SoftCrash){
    return console.log('Você travará de levinho!');
    
}

function heavyCrash (drink: HeavyCrash){
    return console.log('Você travará mais que windows 95! ');
    
}
cliente.endInteraction();



