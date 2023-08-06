class Tamagotchi {
  constructor(
    private name: string,
    private energy: number,
    private gender: string,
    private humor: number,
    private age: number
  ) {
    this.name = name;
    this.energy = energy;
    this.gender = gender;
    this.humor = humor;
    this.age = age;
  }

  tamagotchiComer() {
    this.tamagotchiEstado();
    this.energy = Math.min(Math.floor(this.energy * 1.25), 100);
  }

  tamagotchiDormir() {
    this.tamagotchiEstado();
    console.log("Estoy durmiendo");
  }

  tamagotchiBeber() {
    this.tamagotchiEstado();
    this.energy = Math.min(Math.floor(this.energy * 1.25), 100);
    console.log("Estoy bebiendo");
  }

  tamagotchiSaltar() {
    this.tamagotchiEstado();
    if (this.energy >= 25) {
      this.energy = Math.floor(this.energy * 0.75);
    } else {
      console.log("Estoy demasiado cansado para saltar");
    }
  }

  tamagotchiCorrer() {
    this.tamagotchiEstado();
    console.log("Estoy corriendo");
  }

  tamagotchiCaminar() {
    this.tamagotchiEstado();
    if (this.energy >= 10) {
      this.energy = Math.floor(this.energy * 0.9);
    } else {
      console.log("Estoy demasiado cansado para caminar");
    }
  }

  public tamagotchiEstado() {
    if (this.energy >= 1) {
      console.log(
        `Hola, mi nombre es ${this.name}, mi energía es ${this.energy} y estoy vivo.`
      );
      return true;
    } else {
      console.log("Estoy muerto.");
      return false;
    }
  }
}

const mascota: Tamagotchi = new Tamagotchi("Francisco", 20, "Masculino", 1, 3);
mascota.tamagotchiSaltar();
mascota.tamagotchiEstado();
console.log(mascota);
