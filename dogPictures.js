let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
  let dogPic = await getDogPictures();
  let image = document.querySelector("#result");
  image.width = 400;
  image.height = 400;
  // image.src = dogPic.message;
  // console.log(dogPic.message);
  // image.src = dogPic; // only be used if attribute exists
  image.setAttribute('src', dogPic); 
  // setAttribute can be used to asign values to existing and custom attributes
  console.log(dogPic);
})

async function getDogPictures() {
  try {
    // let res = await fetch(url);
    // let parsedRes = await res.json();
    let res = await axios.get(url);
    return res.data.message;
    // return parsedRes;
  } catch(e) {
    console.log("error - ", e);
    return "NO IMAGE FOUND";
  }
  
}