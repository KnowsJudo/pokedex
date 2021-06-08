const url = "https://pokeapi.co/api/v2/pokemon/";

const fetchImage = async () => {
  const inputPoke = document.getElementById("pokeImage").value;
  if (!inputPoke.length) {
    throw new Error("Enter something m8");
  }
  if (isNaN(inputPoke)) {
    throw new Error("You must enter a number loooool");
  }
  const response = await fetch(`${url}${inputPoke}`);

  if (!response.ok) {
    throw new Error("Failed loooooooooooool");
  }
  const imageData = await response.json();
  return imageData;
};

export const getImage = async () => {
  try {
    const image = await fetchImage();
    renderImage(image);
  } catch (error) {
    console.error(error);
  }
};

/// This (Helper Function??) seems indifferent if its FE or BE?
const renderImage = (response) => {
  let pogImage = response.sprites.front_default;
  let imageID = document.getElementById("imageSpace");
  imageID.innerHTML = `<img src="${pogImage}" />`;
};
