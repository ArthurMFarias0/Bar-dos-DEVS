import { Drink } from "./Drinks";
import { SoftCrash } from "./SoftCrash";
import { HeavyCrash} from "./HeavyCrash"



export class GinConst extends Drink implements SoftCrash, HeavyCrash {

    constructor ( teorAlcoolico: number){
        super (teorAlcoolico);
    }
    public HeavyCrash(): void {
        console.log('Você travou mais que windows 95! ');
    }
    public softCrash(): void {
      console.log('Você deu uma leve tradava ');
  }


}