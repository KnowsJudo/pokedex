import { database } from "./database";

const findMon = (i) => {
  const keyer = Object.keys(database);
  const boxNum = document.getElementById("box").value;
  const keyValue = keyer[boxNum];
  if (typeof keyValue === "string") {
    for (i in database) {
      if (i === keyValue) {
        console.log(database[i]);
      }
    }
  } else {
    console.log("You must enter a number u bger");
  }
};

const convertMon = () => {
  const keyer = Object.keys(database);
  const boxNum = document.getElementById("box").value;
  const keyValue = keyer[boxNum];
  if (typeof keyValue === "string") {
    const mana = database[keyValue];
    mana.convertToJohto();
    console.log(mana);
  } else {
    console.log("MANAAA");
  }
};

export const onSubmit = () => {
  const find = document.getElementById("submit");
  find.addEventListener("click", findMon);
};

export const onConvert = () => {
  const convert = document.getElementById("convert");
  convert.addEventListener("click", convertMon);
};
