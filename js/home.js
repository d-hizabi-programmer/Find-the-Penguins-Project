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
    console.log("at the end:\n", fileName);
  }
  // E:\Projects\Find-the-Penguins-Project\images\penguin_9.png
};

$(document).ready(function () {
  var lives = 3;
  while (lives) {
    $("#name").text(localStorage.getItem("Name"));
    $("#lives").empty();
    $("#lives").text("Lives:");
    for (let i = 1; i <= lives; i++) {
      var svg =
        $(`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>`);
      svg.css("padding-top", "1em 0.2em 0em 0em");
      $("#lives").append(svg);
    }

    randomNumber();
    for (let i = 1; i <= 9; i++) {
      console.log(`#penguin${i}`);
      $(`#penguin${i}`).click(() => {
        // alert(fileName[i - 1]);
        setBgImage(i, fileName[i - 1]);
      });
      if (fileName.indexOf("/images/penguin_9.png") == i) {
        alert("Game Over!");
        console.log("inside if");

        break;
      }
    }
    lives--;
  }
});
