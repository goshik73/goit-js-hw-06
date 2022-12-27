const incr = document.querySelector('[data-action="increment"]');
console.log(incr);

const decr = document.querySelector('[data-action="decrement"]');
console.log(decr);

const counter = document.querySelector("#value");
console.log(counter);
counter.value = 0;

incr.addEventListener("click", () => {
  counter.value += 1;
  counter.textContent = counter.value;
});

decr.addEventListener("click", () => {
  counter.value -= 1;
  counter.textContent = counter.value;
});