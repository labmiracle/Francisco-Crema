class ColaCircular<T> {
  private item: (T | undefined)[];
  private player: number;

  constructor(tamMaximo: number) {
    this.item = new Array<T | undefined>(tamMaximo);
    this.player = 0;
  }

  enqueue(item: T): void {
    const posFinal = (this.player + this.item.length) % this.item.length;
    if (this.item[posFinal] !== undefined) {
      console.log("La cola circular está llena");
      return;
    }

    this.item[posFinal] = item;
  }

  dequeue(): T | undefined {
    const elementoFrente = this.item[this.player];
    if (elementoFrente === undefined) {
      console.log("La cola circular está vacía");
      return undefined;
    }

    this.item[this.player] = undefined;
    this.player = (this.player + 1) % this.item.length;

    return elementoFrente;
  }

  size(): number {
    let count = 0;
    for (const elemento of this.item) {
      if (elemento !== undefined) {
        count++;
      }
    }
    return count;
  }
}

function juegoDeLaPapaCaliente(participantes: string[]): string {
  const colaCircular = new ColaCircular<string>(participantes.length);

  for (const participante of participantes) {
    colaCircular.enqueue(participante);
  }

  while (colaCircular.size() > 1) {
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      const jugador = colaCircular.dequeue();
      if (jugador !== undefined) {
        colaCircular.enqueue(jugador);
      }
    }

    const jugadorEliminado = colaCircular.dequeue();
    if (jugadorEliminado !== undefined) {
      console.log(`¡${jugadorEliminado} ha sido eliminado!`);
    }
  }

  return colaCircular.dequeue() || "";
}

const participantes = [
  "Jugador1",
  "Jugador2",
  "Jugador3",
  "Jugador4",
  "Jugador5",
];
const ganador = juegoDeLaPapaCaliente(participantes);
console.log(`El ganador es ${ganador}`);
