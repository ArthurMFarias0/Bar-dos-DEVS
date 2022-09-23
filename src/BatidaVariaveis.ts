import { Drink } from "./Drinks";
import { SoftCrash } from "./SoftCrash";
import { HeavyCrash} from "./HeavyCrash"



export class BatidaVariaveis extends Drink implements SoftCrash, HeavyCrash {

    constructor ( teorAlcoolico: number){
        super (teorAlcoolico);
    }
  public softCrash(): void {
      console.log('Você deu uma leve tradava ');
  }
  public HeavyCrash(): void {
    console.log('Você deu uma leve tradava ');
}

}