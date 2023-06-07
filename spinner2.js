let cycle = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|'];
let delay = 100;

for (const i of cycle) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay + 50);
