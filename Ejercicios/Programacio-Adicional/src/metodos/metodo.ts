interface info {
  name: string;
  height: string;
  mass: string;
  eye_color: string;
  gender: string;
}

const characters: info[] = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const infoMap = () => {
  const name = characters.map((n) => n.name);
  const heigth = characters.map((h) => h.height);
  const nameHeigth = characters.map((nh) => {
    return { name: nh.name, heigth: nh.height };
  });

  return { name, heigth, nameHeigth };
};

const infoReduce = () => {
  const masaTotal = characters.reduce((acc, mass) => {
    const characterMass: number = parseInt(mass.mass);
    if (characterMass) {
      return acc + characterMass;
    }
    return acc;
  }, 0);

  const heightTotal = characters.reduce((acc, height) => {
    const characterHeight: number = parseInt(height.height);
    if (characterHeight) {
      return acc + characterHeight;
    }
    return acc;
  }, 0);

  const totalCaracteresNombres = characters.reduce((acc, character) => {
    return acc + character.name.length;
  }, 0);

  const caracteresPorColorOjos = characters.reduce(
    (acc: { [color: string]: number }, character) => {
      const eyeColor = character.eye_color;
      acc[eyeColor] = (acc[eyeColor] || 0) + eyeColor.length;
      return acc;
    },
    {}
  );

  return {
    masaTotal,
    heightTotal,
    totalCaracteresNombres,
    caracteresPorColorOjos,
  };
};

const infoFilter = () => {
  const massMayor = characters.filter((m) => parseInt(m.mass) > 100);

  const heightMenor = characters.filter((h) => parseInt(h.height) < 200);

  const personMasculino = characters.filter(
    (masculino) => masculino.gender === "male"
  );

  const personFemenino = characters.filter(
    (femenino) => femenino.gender === "female"
  );

  return { massMayor, heightMenor, personMasculino, personFemenino };
};

const infoSort = () => {
  const name = characters.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  const mass = characters.sort((a, b) => {
    const masaA = parseInt(a.mass);
    const masaB = parseInt(b.mass);
    if (masaA < masaB) {
      return -1;
    } else if (masaA > masaB) {
      return 1;
    } else {
      return 0;
    }
  });

  const height = characters.sort((a, b) => {
    const heightA = parseInt(a.height);
    const heightB = parseInt(b.height);
    if (heightA < heightB) {
      return -1;
    } else if (heightA > heightB) {
      return 1;
    } else {
      return 0;
    }
  });

  const gender = characters.sort((a, b) => {
    if (a.gender < b.gender) {
      return -1;
    } else if (a.gender > b.gender) {
      return 1;
    } else {
      return 0;
    }
  });

  return { name, mass, height, gender };
};

console.log(infoSort());
