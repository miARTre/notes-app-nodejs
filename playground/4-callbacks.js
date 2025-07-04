setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const names = ["Mire", "Zujki", "Gogi"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geoCode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2100);
};

geoCode("Sarajevo", (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 2200);
};

add(1, 4, (sum) => {
  console.log(sum);
});
