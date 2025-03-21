// creat an array to store the user's favorite color
let favoriteColor = [];

// loop to prompt the user for color  input three times
for (let i = 0; i < 3; i++){
    let color = prompt("Enter a color you like:");
    favoriteColor.push(color);
    console.log(`Update color list: ${favoriteColor.join(", ")}`);
}