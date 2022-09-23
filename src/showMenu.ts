import PromptSync = require('prompt-sync')
import { Menu } from './Menu'
import { Drink } from './Drinks';
import { Drinks } from './Drinks';

const prompt = PromptSync()

function showMenu() {

    console.log('-------- Menu de Drinks: --------\n');
    console.log('1 - Batidade de Variáveis ');
    console.log('2 - Lagoa TypeS ');
    console.log('3 - Gin Const ');
    console.log('4 - Console.Vinho\n\n');

    let option =  prompt ('Escolha seu Drink: ');

    let pick: Drinks

    switch (option) {
        case '1':
            pick = Drinks.drink1
            break
        case '2':
            pick = Drinks.drink2
            break
        case '3':
            pick = Drinks.drink3
            break
        case '4':
            pick = Drinks.drink4
            break;  
    }
    return pick;
    }

export { showMenu }