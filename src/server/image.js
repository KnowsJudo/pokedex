const url = "https://pokeapi.co/api/v2/pokemon/";

export const getImage = async () => {
  const inputPoke = document.getElementById("pokeImage").value;
  if (inputPoke.length) {
    let typa = isNaN(inputPoke);

    if (typa === false) {
      await fetch(`${url}${inputPoke}`)
        .then(
          (response) => {
            if (response.ok) {
              const theImage = response.json();
              ///How does it access this data from within this scope?
              return theImage;
            }
            throw new Error("Request failed!");
          },
          (error) => {
            console.log(error.message);
          }
        )
        //How does the RenderImage function access response^ if its standalone func
        .then((jsonResponse) => {
          renderImage(jsonResponse);
        });
    } else {
      console.log("You must enter a number loooool");
    }
  } else {
    console.log("Enter something m8");
  }
};

const renderImage = (response) => {
  let pogImage = response.sprites.front_default;
  let imageID = document.getElementById("imageSpace");
  imageID.innerHTML = `<img src="${pogImage}" />`;
};
