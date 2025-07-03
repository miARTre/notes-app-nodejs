// const square = function(x) {
//     return x * x;
// }

// const sq = square(2)
// console.log(sq);

// const squareArrow = x => x * x;
// console.log(squareArrow(2));

const event = {
  name: "Birthday Party",
  guestList: ["Mire", "Andrew", "Zujki", "ßGogi", "Amar"],
  printGuestList() {
    console.log("Guest List for: " + this.name);

    this.guestList.forEach((guest) => {
        console.log(guest + ' is attending ' + this.name);
    });
  },
};

event.printGuestList();
