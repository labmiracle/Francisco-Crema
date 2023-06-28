interface usuario {
  firstName: string;
  lastName: string;
  role: string;
}

const users: usuario[] = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

function mapeado() {
  const infoUser = users.map(
    (user) => `${user.firstName}  ${user.lastName} : ${user.role}`
  );

  const typeRole = users.filter((role) => role.role === "Full Stack Resident");

  const objectRole = users.reduce((acc: { [key: string]: usuario[] }, user) => {
    if (acc[user.role]) {
      acc[user.role].push(user);
    } else {
      acc[user.role] = [user];
    }
    return acc;
  }, {});

  return { infoUser, typeRole, objectRole };
}

function firstName(firstName: string) {
  return users.find(
    (user) => user.firstName.toLowerCase() === firstName.toLowerCase()
  );
}
