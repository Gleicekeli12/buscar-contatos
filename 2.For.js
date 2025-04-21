/* 



Desafio FOR



*/

let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: "Gleice", number: "(55) 99999-9991" },
  { name: "Renan", number: "(55) 99999-9992" },
  { name: "Ana", number: "(55) 99999-9993" },
  { name: "Franciele", number: "(55) 99999-9994" },
  { name: "José", number: "(55) 99999-9995" },
];

function search() {
  //   for (const contact of contacts) {
  //     if (input.value.toLowerCase() === contact.name.toLowerCase()) {
  //       p.innerHTML = `Contato Encontrado Nome : ${contact.name} <br> Tel: ${contact.number}`;

  //       break;
  //     } else {
  //       p.innerHTML = `Ops contato não encontrado, tente novamente`;
  //     }
  //   }
  // }

  //   for (i = 0; i < contacts.length; i++) {
  //     if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
  //       p.innerHTML = `Contato Encontrado Nome : ${contacts[i].name} <br> Tel: ${contacts[i].number}`;

  //       break;
  //     } else {
  //       p.innerHTML = `Ops contato não encontrado, tente novamente`;
  //     }
  //   }
  // }

  let i = 0;
  let found = false;

  while (i < contacts.length) {
    if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
      p.innerHTML = `Contato Encontrado<br>Nome: ${contacts[i].name} <br>Tel: ${contacts[i].number}`;
      found = true;
      break;
    }
    i++;
  }

  if (!found) {
    p.innerHTML = `Ops, contato não encontrado.<br>Tente novamente.`;
  }
}
