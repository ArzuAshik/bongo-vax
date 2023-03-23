function evenSort(list = []) {
  list.sort((a, b) => a.age - b.age);
  const odd = [];
  const even = [];

  list.forEach((item) => {
    if (item.age % 2 == 0) even.push(item);
    else odd.push(item);
  });

  return [...even, ...odd];
}

function vaxTrail(list = []) {
  const result = { A: [], B: [], C: [], D: [] };

  list.forEach((item) => {
    const { age, temperature } = item;
    if (temperature >= 100 || age > 50 || age < 20) result.D.push(item);
    else if (age >= 41) result.C.push(item);
    else if (age >= 31) result.B.push(item);
    else result.A.push(item);
  });

  for (key in result) result[key] = evenSort(result[key]);

  return result;
}

const dummyData = [
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 98 },

  { name: "Paul", age: 42, temperature: 98 },
  { name: "Rahul", age: 37, temperature: 99 },

  { name: "Sabnaj", age: 51, temperature: 101 },
  { name: "Kat", age: 41, temperature: 98 },

  { name: "Nayem", age: 50, temperature: 100 },
];

const r = vaxTrail(dummyData);
console.log(r);
