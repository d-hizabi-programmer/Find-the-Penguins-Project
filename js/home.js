var arr = [];
var fileName = [];
var arr = [];
var score = 0;
//setting bg pictures!
function setBgImage(num, image) {
  // console.log("iside set fun");
  $(`#penguin${num}`).css("background-image", `url(${image})`);
  console.log(`penguin${num} set ${image}`);
}

// function checkImage(image) {
//   return "/images/penguin_9.png" == image;
// }

//generating random numbers!
randomNumber = () => {
  let number = 1;
  while (arr.length <= 8) {
    var r = Math.floor(Math.random() * 9) + 1;
    if (arr.indexOf(r) === -1) {
      arr.push(r);
      fileName.push("/images/penguin_" + r + ".png");
      number++;
    }
    // console.log("at the end:\n", fileName);
  }
  // E:\Projects\Find-the-Penguins-Project\images\penguin_9.png
};

$(document).ready(function () {
  // var lives = 3;
  const soundLoad = new Audio("/sounds/loadMusic.wav");
  soundLoad.play();
  $("#name").text(localStorage.getItem("Name"));

  randomNumber();
  for (let i = 1; i <= 9; i++) {
    $(`#penguin${i}`).click(() => {
      setBgImage(i, fileName[i - 1]);

      // location.reload();
    });
    $(`#penguin${i}`).click(function () {
      if (fileName[i - 1] == "/images/penguin_9.png") {
        const yetiFound = new Audio("/sounds/yetiFound.wav");
        yetiFound.play();
        alert("Yeti Found...Game Over!");
        alert("Your Score is:" + score);
        score = 0;

        // location.reload();
      } else {
        const penguin = new Audio("/sounds/penguin.wav");
        penguin.play();
        score += 1;
        $("#score").text("Score:" + score);
      }
      // highScore[highScore.length] = score;
    });
  }
});
