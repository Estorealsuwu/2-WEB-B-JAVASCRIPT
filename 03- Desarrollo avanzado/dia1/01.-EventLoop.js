console.log("1 — Inicio (sincrónico)");

setTimeout(() => {
  console.log("4 — setTimeout 0ms (macrotask)");
}, 1000);

Promise.resolve().then(() => {
  console.log("3 — Promise.then (microtask)");
});

console.log("2 — Fin (sincrónico)");