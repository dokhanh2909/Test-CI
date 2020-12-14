let btn = document.getElementById("btn");
let count = 0;
let res = document.getElementById("result");
btn.addEventListener("click", function () {
  let input = document.getElementById("input").value;
  let result = 5;
  //   let result = Math.floor(Math.random() * 10 + 1);
  console.log(result);
  console.log(input);
  if (input < 1 || input > 10) alert("Nhập một số trong khoảng từ 1 đến 10!");
  else if (input == result)
    // alert(
    //   "Chúc mừng! Bạn đã đoán đúng số và trúng thưởng một phần quà trị giá 1 tỷ đồng!"
    // )
    res.innerHTML =
      "Chúc mừng! Bạn đã đoán đúng số và trúng thưởng một phần quà trị giá 1 tỷ đồng!";
  else if (count > 1) {
    // alert("Bạn đã hết lượt đoán");
    res.innerHTML = "Bạn đã hết lượt đoán";
  } else {
    count = count + 1;
    // alert(
    //   `Bạn đã đoán sai. Bạn còn ${3 - count} lượt đoán nữa. Xin mời đoán lại!`
    // );
    res.innerHTML = `Bạn đã đoán sai. Bạn còn ${
      3 - count
    } lượt đoán nữa. Xin mời đoán lại!`;
  }
  return count;
});
