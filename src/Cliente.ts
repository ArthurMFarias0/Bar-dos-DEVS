interface NewCliente{
     name: string;
     age: number;
}

class Cliente {
    public name: string;
    public age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
}

  public endInteraction (){
    return console.log(`O bar dos Devs agradece a sua presença, espero que não tenha travado`);
  }

   
}

export { Cliente };