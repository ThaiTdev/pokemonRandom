const row = document.querySelectorAll(".row");
const box = document.querySelectorAll(".box");
const button = document.querySelector("button");
const button2 = document.querySelector(".rejouer");
const pop = document.querySelector(".pop");

//////////////////////////version cross /////////////////////////////////////////////////////

// button.addEventListener("click", async () => {
//   // pour chaque ligne td de mon tableau j'inject ("")pour le vider
//   box.forEach((item) => {
//     item.innerHTML = "";
//     item.classList.remove("show");
//   });
//   //je dit que pour chacune de mais lignes je récupére un des éléments
//   row.forEach((item) => {
//     // je donne un chiffre aléatoire à chaque boucle  pricipale selon le nombre de lignes
//     //le chiffre aléatoire ne doit pas dépasser le nombre colonnes.
//     let numberHazard = Math.floor(Math.random() * 4);
//     //tant que "i" est inférieur au nombre délément pour chaque colonne
//     //i s'incrémentera de 1
//     for (let i = 0; i < item.children.length; i++) {
//       // je compare mon chiffre aléatoire avec le numero de mon incrémentation
//       if (parseInt(numberHazard) === parseInt(i)) {
//         //si mon chiffre (i) est égale à mon chiffre aléatoire
//         //alors j'inject le "x" dans mon élément
//         item.children[i].innerHTML = "<span>X</span>";
//         item.children[i].classList.add("show");
//         //puis je sort de la boucle
//         break;
//       }
//     }
//   });
// });
// button2.addEventListener("click", () => {
//   box.forEach((item) => {
//     item.innerHTML = "";
//     item.classList.remove("show");
//   });
// });
/////////////////////////
/////////////////////////
////////////////////////
///////////////////////
////////////////////////
//////////////////////
//////////////////////
//////////////////////////

//////////////////////////////////version pokemon///////////////////////////////////
//je met async car ma fonction doit être asynchrone
let compteur = 0;
const changePokemon = async () => {
  // pour chaque ligne td de mon tableau j'inject ("")pour le vider
  box.forEach((item) => {
    item.innerHTML = "";
    item.classList.remove("show");
  });

  row.forEach(async (item) => {
    let pokrand = Math.ceil(Math.random() * 150) + 1;
    //ici je choisi un chiffre entre 1 et 150 pour les 150 premiers pokemons
    let pokedata = `https://pokeapi.co/api/v2/pokemon/${pokrand}`;
    //ici je recupère ladress de l'api pokemon et je concatène avec mon chiffre aléatoire
    let pokselect = await fetch(pokedata);
    //ici je fait un await fetch sur mon api

    let reponse = await pokselect.json();
    //ici je doit transformer mon objet qui se trouve dans la console en json pour pouvoir récupèrer les data

    // je donne un chiffre aléatoire à chaque boucle pricipale selon le nombre de lignes
    //le chiffre aléatoire ne doit pas dépasser le nombre colonnes.
    let numberHazard = Math.floor(Math.random() * 4);
    //tant que "i" est inférieur au nombre délément pour chaque colonne
    //i s'incrémentera de 1
    for (let i = 0; i < item.children.length; i++) {
      // je compare mon chiffre aléatoire avec le numero de mon incrémentation
      compteur++;

      let tutu;

      if (parseInt(numberHazard) === parseInt(i)) {
        //si mon chiffre (i) est égale à mon chiffre aléatoire
        let image = document.createElement("img");
        //ici je crer un div img
        tutu = item.children[i].appendChild(image);
        //ici je dit que image est l'enfant de item.children
        // console.log(tutu);
        tutu.classList.add("pokemon");

        tutu.src = reponse.sprites.front_default;
        //ici je suit le chemin de l'api dans la console pour récupèrer la data dont j'ai besoin
        item.children[i].classList.add("show");
        //puis je sort de la boucle
        tableau[compteur] = tutu;
        break;
      }
    }
  });
};
let tableau = [];

button2.addEventListener("click", () => {
  box.forEach((item) => {
    item.classList.remove("show");
  });

  tableau.map((m) => {
    m.classList.add("delete");
  });
});
pop.addEventListener("click", changePokemon);
