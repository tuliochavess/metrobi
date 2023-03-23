function findHighestFloor() {
  const floors = 100;
  let egg1 = 0;
  let egg2 = 0;

  for (let i = 1; i <= floors; i++) {
    egg1++;
    if (egg1 === 14) {
      document.querySelector(".results1").innerHTML =
        "The first egg broke at floor:  " + i;
      egg2 = egg1 - 1;
      break;
    }
    egg2++;
    if (egg2 === 98) {
      document.querySelector(".results2").innerHTML =
        "The secoind egg 2 broke at floor: " + i;
      break;
    }
  }

  document.querySelector(".results3").innerHTML =
    "The highest floor is to drop a egg without break is: " + egg2;
}
