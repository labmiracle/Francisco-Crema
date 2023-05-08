let count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }
  return count > 0 ? count + "Bet" : count + "Hold";
}
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("k"));
console.log(cc("A"));
