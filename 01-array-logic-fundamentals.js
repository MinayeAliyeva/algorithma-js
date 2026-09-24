// ======================================================
// 01 — LOOPS & BASIC LOGIC
// TASK 1–50
// ======================================================

// ======================================================
// Task 1 — Massivi çap et
// Məntiq: Array Traversal
// ======================================================

{
  const numbers = [10, 20, 30, 40, 50];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// ======================================================
// Task 2 — Cəmi tap
// Məntiq: Accumulator
// ======================================================

{
  const numbers2 = [5, 10, 15, 20];

  let sum = 0;

  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }

  console.log(sum);
}

// ======================================================
// Task 3 — Cütləri tap
// Məntiq: Filtering + Result Array
// ======================================================

{
  const numbers3 = [3, 8, 11, 14, 20, 7];

  const evenNumbers = [];

  for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] % 2 === 0) {
      evenNumbers.push(numbers3[i]);
    }
  }

  console.log(evenNumbers);
}

// ======================================================
// Task 4 — Ən böyüyü tap
// Məntiq: Max Tracking
// ======================================================

{
  const numbers4 = [4, 17, 2, 38, 9, 21];

  let max = numbers4[0];

  for (let i = 1; i < numbers4.length; i++) {
    if (numbers4[i] > max) {
      max = numbers4[i];
    }
  }

  console.log(max);
}

// ======================================================
// Task 5 — Təkrarlanma sayını tap
// Məntiq: Counter + Conditional Check
// ======================================================

{
  const numbers5 = [2, 5, 2, 8, 2, 10, 5];

  const target = 2;

  let count = 0;

  for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] === target) {
      count++;
    }
  }

  console.log(count);
}

// ======================================================
// Task 6 — Ən kiçiyi tap
// Məntiq: Min Tracking
// ======================================================

{
  const numbers6 = [2, 5, 2, 8, 2, 10, 5];

  let min = numbers6[0];

  for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] < min) {
      min = numbers6[i];
    }
  }

  console.log(min);
}

// ======================================================
// Task 7 — Mənfilərin sayını tap
// Məntiq: Counter + Conditional Check
// ======================================================

{
  const numbers7 = [-5, 3, -2, 10, 0, -8, 7];

  let negativeCount = 0;

  for (let i = 0; i < numbers7.length; i++) {
    if (numbers7[i] < 0) {
      negativeCount++;
    }
  }

  console.log(negativeCount);
}

// ======================================================
// Task 8 — Element varmı
// Məntiq: Linear Search + Boolean Flag
// ======================================================

{
  const numbers8 = [4, 8, 15, 16, 23, 42];

  const target2 = 162;

  let found = false;

  for (let i = 0; i < numbers8.length; i++) {
    if (target2 === numbers8[i]) {
      found = true;
    }
  }

  console.log(found);
}

// ======================================================
// Task 9 — Tərsinə çap et
// Məntiq: Reverse Traversal
// ======================================================

{
  const numbers9 = [10, 20, 30, 40, 50];

  for (let i = numbers9.length - 1; i >= 0; i--) {
    console.log(numbers9[i]);
  }
}

// ======================================================
// Task 10 — İkinci ən böyüyü tap
// Məntiq: Two Maximum Tracking
// ======================================================

{
  const numbers10 = [10, 5, 20, 8, 15];

  let max2 = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < numbers10.length; i++) {
    if (numbers10[i] > max2) {
      secondMax = max2;
      max2 = numbers10[i];
    } else if (numbers10[i] > secondMax && numbers10[i] !== max2) {
      secondMax = numbers10[i];
    }
  }

  console.log("max", max2);
  console.log("secondMax", secondMax);
}

// ======================================================
// Task 11 — Cütlərin cəmini tap
// Məntiq: Conditional Accumulator
// ======================================================

{
  const numbers11 = [4, 7, 10, 3, 8, 11];

  let evenSum = 0;

  for (let i = 0; i < numbers11.length; i++) {
    if (numbers11[i] % 2 === 0) {
      evenSum += numbers11[i];
    }
  }

  console.log(evenSum);
}

// ======================================================
// Task 12 — Max və min fərqini tap
// Məntiq: Min/Max Tracking
// ======================================================

{
  const numbers12 = [12, 3, 25, 7, 18];

  let min2 = numbers12[0];
  let max3 = -Infinity;

  for (let i = 0; i < numbers12.length; i++) {
    if (numbers12[i] > max3) {
      max3 = numbers12[i];
    }

    if (numbers12[i] < min2) {
      min2 = numbers12[i];
    }
  }

  console.log(max3 - min2);
}

// ======================================================
// Task 13 — Duplicate varmı
// Məntiq: Nested Search + Boolean Flag
// ======================================================

{
  const numbers13 = [3, 7, 1, 9, 5, 3];

  let isDuplicate = false;

  for (let i = 0; i < numbers13.length; i++) {
    for (let j = i + 1; j < numbers13.length; j++) {
      if (numbers13[i] === numbers13[j]) {
        isDuplicate = true;
        break;
      }
    }
  }

  console.log(isDuplicate);
}

// ======================================================
// Task 14 — Duplicate-ləri sil
// Məntiq: Duplicate Prevention + Result Array
// ======================================================

// Həll 1

{
  const numbers14 = [1, 2, 3, 2, 4, 1, 5, 3];

  const newArr = [];

  for (let i = 0; i < numbers14.length; i++) {
    if (!newArr.includes(numbers14[i])) {
      newArr.push(numbers14[i]);
    }
  }

  console.log(newArr);
}

// Həll 2

{
  const numbers14_2 = [1, 2, 3, 4, 5, 4, 5];

  const newArr2 = [];

  for (let i = 0; i < numbers14_2.length; i++) {
    let finded = false;

    for (let j = 0; j < i; j++) {
      if (numbers14_2[i] === numbers14_2[j]) {
        finded = true;
        break;
      }
    }

    if (!finded) {
      newArr2.push(numbers14_2[i]);
    }
  }

  console.log(newArr2);
}

// ======================================================
// Task 15 — Təkrarlanma saylarını tap
// Məntiq: Frequency Counter
// ======================================================

// Həll 1

{
  const numbers15 = [1, 2, 2, 3, 1, 2, 4];

  const obj = {};

  for (let i = 0; i < numbers15.length; i++) {
    let count2 = 0;

    for (let j = 0; j < numbers15.length; j++) {
      if (numbers15[i] === numbers15[j]) {
        count2++;
      }
    }

    obj[numbers15[i]] = count2;
  }

  console.log(obj);
}

// Həll 2

{
  const numbers15_2 = [1, 2, 2, 3, 1, 2, 4];

  const obj2 = {};

  for (let i = 0; i < numbers15_2.length; i++) {
    if (obj2[numbers15_2[i]] === undefined) {
      obj2[numbers15_2[i]] = 1;
    } else {
      obj2[numbers15_2[i]]++;
    }
  }

  console.log(obj2);
}

// ======================================================
// Task 16 — Ən çox təkrarlananı tap
// Məntiq: Frequency Counter + Max Tracking
// ======================================================

// Həll 1

{
  const numbers16 = [1, 2, 2, 3, 2, 4, 4];

  const obj3 = {};
  const newArr3 = [];

  let maxCount = -Infinity;

  for (let i = 0; i < numbers16.length; i++) {
    if (obj3[numbers16[i]] === undefined) {
      obj3[numbers16[i]] = 1;
    } else {
      obj3[numbers16[i]]++;
    }

    newArr3.push(obj3[numbers16[i]]);

    for (let j = 0; j < newArr3.length; j++) {
      if (newArr3[j] > maxCount) {
        maxCount = newArr3[j];
      }
    }
  }

  const keys = Object.keys(obj3);

  let findedNumber = 0;

  for (let i = 0; i < keys.length; i++) {
    if (obj3[keys[i]] === maxCount) {
      findedNumber = keys[i];
    }
  }

  console.log(findedNumber);
}

// Həll 2

{
  const numbers16_2 = [1, 2, 2, 3, 2, 4, 4];

  const obj4 = {};

  let maxCount2 = 0;
  let findedNumber2;

  for (let i = 0; i < numbers16_2.length; i++) {
    if (obj4[numbers16_2[i]] === undefined) {
      obj4[numbers16_2[i]] = 1;
    } else {
      obj4[numbers16_2[i]]++;
    }

    for (let j = 0; j < numbers16_2.length; j++) {
      if (obj4[numbers16_2[j]] > maxCount2) {
        maxCount2 = obj4[numbers16_2[j]];
        findedNumber2 = numbers16_2[j];
      }
    }
  }

  console.log(findedNumber2);
}

// ======================================================
// Task 17 — Duplicate-ləri tap
// Məntiq: Nested Search + Duplicate Prevention
// ======================================================

{
  const numbers17 = [1, 2, 3, 2, 4, 1, 5, 3];

  const duplicateNumbers = [];

  for (let i = 0; i < numbers17.length; i++) {
    let isRepeated = false;

    for (let j = i + 1; j < numbers17.length; j++) {
      if (numbers17[i] === numbers17[j]) {
        isRepeated = true;
        break;
      }
    }

    if (isRepeated && !duplicateNumbers.includes(numbers17[i])) {
      duplicateNumbers.push(numbers17[i]);
    }
  }

  console.log(duplicateNumbers);
}

// ======================================================
// Task 18 — Tək olanları tap
// Məntiq: Frequency Counter + Unique Collection
// ======================================================

// Həll 1

{
  const numbers18 = [1, 2, 2, 3, 4, 4, 5];

  let newArr4 = [];

  const obj6 = {};

  let findedArr = [];

  for (let i = 0; i < numbers18.length; i++) {
    if (obj6[numbers18[i]] === undefined) {
      obj6[numbers18[i]] = 1;
    } else {
      obj6[numbers18[i]]++;
    }

    newArr4 = [...Object.keys(obj6)];

    findedArr = [];

    for (let j = 0; j < newArr4.length; j++) {
      if (obj6[newArr4[j]] === 1) {
        findedArr.push(+newArr4[j]);
      }
    }
  }

  console.log(findedArr);
}

// Həll 2

{
  const numbers18_2 = [1, 2, 2, 3, 4, 4, 5];

  const uniqueValues = [];

  for (let i = 0; i < numbers18_2.length; i++) {
    let count3 = 0;

    for (let j = 0; j < numbers18_2.length; j++) {
      if (numbers18_2[i] === numbers18_2[j]) {
        count3++;
      }
    }

    if (count3 === 1) {
      uniqueValues.push(numbers18_2[i]);
    }
  }

  console.log(uniqueValues);
}

// ======================================================
// Task 19 — İlk duplicate-i tap
// Məntiq: Frequency Counter + Early Break
// ======================================================

{
  const numbers19 = [5, 3, 4, 3, 5, 6];

  let obj8 = {};

  for (let i = 0; i < numbers19.length; i++) {
    if (obj8[numbers19[i]] === undefined) {
      obj8[numbers19[i]] = 1;
    } else {
      obj8[numbers19[i]]++;

      if (obj8[numbers19[i]] == 2) {
        console.log(numbers19[i]);

        break;
      }
    }
  }

  console.log(obj8);
}

// ======================================================
// Task 20 — Ortaq elementləri tap
// Məntiq: Nested Search + Intersection
// ======================================================

// Həll 1

{
  const arr1 = [1, 2, 3, 4, 5];

  const arr2 = [3, 4, 5, 6, 7];

  const dublicateNumbers = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        dublicateNumbers.push(arr1[i]);
      }
    }
  }

  console.log(dublicateNumbers);
}

// Həll 2

{
  const arr3 = [1, 2, 3, 4, 5];

  const arr4 = [3, 4, 5, 6, 7];

  const newArr5 = [...arr3, ...arr4];

  const finded2 = [];

  for (let i = 0; i < newArr5.length; i++) {
    for (let j = 0; j < newArr5.length; j++) {
      if (
        newArr5[i] === newArr5[j] &&
        i !== j &&
        !finded2.includes(newArr5[i])
      ) {
        finded2.push(newArr5[i]);
      }
    }
  }

  console.log(finded2);
}

// ======================================================
// Task 21 — İki array eynidirmi?
// Məntiq: Length Check + Element Comparison
// ======================================================

{
  const arr1 = [1, 2, 6];
  const arr2 = [1, 2, 3];

  let check = true;

  if (arr1.length !== arr2.length) {
    check = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        check = false;
        break;
      }
    }
  }

  console.log(check);
}

// ======================================================
// Task 22 — İkinci ən kiçik ədədi tap
// Məntiq: Two Minimum Tracking
// ======================================================

{
  const numbers = [8, 3, 5, 1, 9, 2];

  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      secondMin = min;
      min = numbers[i];
    } else if (numbers[i] < secondMin && numbers[i] !== min) {
      secondMin = numbers[i];
    }
  }

  console.log(secondMin);
}

// ======================================================
// Task 23 — Array sıralanıb?
// Məntiq: Adjacent Comparison
// ======================================================

{
  const numbers = [1, 2, 3, 4, 6, 5];

  const testing = [];
  let isSorted = false;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < numbers[i + 1]) {
      testing.push(true);
    } else {
      testing.push(false);
    }
  }

  isSorted = testing.every((d) => d === true);

  console.log(testing);
  console.log(isSorted);
}

// ======================================================
// Task 24 — Sıfırların sayını tap
// Məntiq: Counter
// ======================================================

{
  const numbers = [0, 5, 0, 3, 8, 0, 2];

  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      count++;
    }
  }

  console.log(count);
}

// ======================================================
// Task 25 — Müsbətlərin cəmini tap
// Məntiq: Conditional Accumulator
// ======================================================

{
  const numbers = [-3, 5, -2, 8, 0, 4, -1];

  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }

  console.log(sum);
}

// ======================================================
// Task 26 — Ən böyük cüt ədədi tap
// Məntiq: Even Check + Max Tracking
// İstifadə etmə: Math.max(), sort(), filter()
// ======================================================

{
  const numbers = [3, 8, 11, 20, 14, 7];

  let maxEvenNumber = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] > maxEvenNumber) {
      maxEvenNumber = numbers[i];
    }
  }

  console.log(maxEvenNumber);
}
// ======================================================
// Task 27 — Birinci və sonuncu elementin yerini dəyiş
// Məntiq: In-place Swap
// ======================================================

{
  const numbers = [10, 20, 30, 40, 50];

  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[0];

    numbers[0] = numbers[numbers.length - 1];

    numbers[numbers.length - 1] = temp;
  }

  console.log(numbers);
}

// ======================================================
// Task 28 — Neçə cüt, neçə tək var
// Məntiq: Multiple Counters
// ======================================================

{
  const numbers = [1, 2, 3, 4, 5, 6, 8];

  let even = 0;
  let odd = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(even, odd);
}

// ======================================================
// Task 29 — Ardıcıl duplicate varmı
// Məntiq: Adjacent Comparison + Boolean Flag
// ======================================================

{
  const numbers = [1, 2, 3, 4, 5, 2];

  let isDublicate = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      isDublicate = true;
    }
  }

  console.log(isDublicate);
}

// ======================================================
// Task 30 — Array palindrome-dur?
// Məntiq: Two-sided Comparison
// ======================================================

{
  const numbers = [1, 2, 3, 2, 1];

  let isPalindrome = false;

  const test = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[numbers.length - i - 1]) {
      test.push(true);
    } else {
      test.push(false);
    }
  }

  console.log(test.every((d) => d === true));
}

// ======================================================
// Task 31 — İlk və son elementin cəmini tap
// Məntiq: Index Access + Accumulator
// ======================================================

{
  const numbers = [10, 20, 30, 40, 50];

  let firstNum = numbers[0];

  let lastNum = numbers[numbers.length - 1];

  let sum = firstNum + lastNum;

  console.log(sum);
}

// ======================================================
// Task 32 — Target-dan böyük neçə element var
// Məntiq: Counter + Conditional Check
// ======================================================

{
  const numbers = [4, 12, 7, 20, 3, 15];

  const target = 10;

  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > target) {
      count++;
    }
  }

  console.log(count);
}

// ======================================================
// Task 33 — Target-dan kiçik elementləri tap
// Məntiq: Filtering + Result Array
// ======================================================

{
  const numbers = [8, 3, 12, 5, 20, 1];

  const target = 8;

  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (target > numbers[i]) {
      result.push(numbers[i]);
    }
  }

  console.log(result);
}

// ======================================================
// Task 34 — Ən böyük ədədin index-ini tap
// Məntiq: Max Tracking + Index Tracking
// ======================================================

{
  const numbers = [4, 18, 7, 25, 9];

  let maxEl = -Infinity;

  let index;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxEl) {
      maxEl = numbers[i];

      index = i;
    }
  }

  console.log(index);
}

// ======================================================
// Task 35 — Ən kiçik ədədin index-ini tap
// Məntiq: Min Tracking + Index Tracking
// ======================================================

{
  const numbers = [10, 4, 7, 2, 15];

  let min = Infinity;

  let index;

  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];

      index = i;
    }
  }

  console.log(index);
}

// ======================================================
// Task 36 — Target-a bərabər olmayan neçə element var
// Məntiq: Counter + Conditional Check
// ======================================================

{
  const target = 2;

  const numbers = [2, 4, 2, 5, 2, 7];

  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== target) {
      count++;
    }
  }

  console.log(count);
}

// ======================================================
// Task 37 — Target-ın ilk index-ini tap
// Məntiq: Linear Search + Index Tracking + Early Break
// ======================================================

{
  const numbers = [4, 8, 3, 8, 10];

  const target = 8;

  let index = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      index = i;

      break;
    }
  }

  console.log(index);
}

// ======================================================
// Task 38 — Target-ın son index-ini tap
// Məntiq: Reverse Search + Index Tracking
// ======================================================

{
  const numbers = [4, 8, 3, 8, 10, 8];

  const target = 8;

  let index = -1;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === target) {
      index = i;

      break;
    }
  }

  console.log(index);
}

// ======================================================
// Task 39 — Bütün ədədlər müsbətdir?
// Məntiq: Boolean Flag + Early Break
// ======================================================

{
  const numbers = [3, -5, 8, 10];

  let allPositive = true;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      allPositive = false;

      break;
    }
  }

  console.log(allPositive);
}

// ======================================================
// Task 40 — Ən azı bir mənfi ədəd varmı
// Məntiq: Boolean Flag + Early Break
// ======================================================

{
  const numbers = [4, 7, -2, 10];

  let hasNegative = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      hasNegative = true;

      break;
    }
  }

  console.log(hasNegative);
}

// ======================================================
// Task 41 — Target tapılana qədər cəmi hesabla
// Məntiq: while + Accumulator + Early Stop
// ======================================================

{
  const numbers = [4, 7, 2, 9, 5, 10];

  const target = 9;

  let sum = 0;
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] === target) {
      break;
    }

    sum += numbers[i];

    i++;
  }

  console.log(sum);
}

// ======================================================
// Task 42 — Array-də ilk duplicate elementi tap
// Məntiq: while + Nested Search + Early Break
// ======================================================

{
  const numbers = [1, 2, 2, 1];

  let i = 0;

  let duplicate = -1;

  let found = false;

  while (i < numbers.length && !found) {
    let j = 0;

    while (j < i) {
      if (numbers[i] === numbers[j]) {
        duplicate = numbers[i];

        found = true;

        break;
      }

      j++;
    }

    i++;
  }

  console.log(duplicate);
}

// ======================================================
// Task 43 — Ardıcıl eyni elementlərin ilk index-ini tap
// Məntiq: while + Adjacent Comparison + Index Tracking
// ======================================================

{
  const numbers = [3, 5, 8, 8, 2, 2, 10];

  let i = 0;

  let index = -1;

  while (i < numbers.length - 1) {
    if (numbers[i] === numbers[i + 1]) {
      index = i;

      break;
    }

    i++;
  }

  console.log(index);
}

// ======================================================
// Task 44 — Ən böyük tək ədədi tap
// Məntiq: for...of + Conditional Max Tracking
// ======================================================

{
  const numbers = [4, 11, 8, 21, 16, 7, 18];

  let maxOdd = null;

  for (const el of numbers) {
    if (el % 2 !== 0) {
      if (maxOdd === null || el > maxOdd) {
        maxOdd = el;
      }
    }
  }

  console.log(maxOdd);
}

// ======================================================
// Task 45 — Müsbət və cüt ədədlərin cəmini tap
// Məntiq: for...of + Multiple Conditions + Accumulator
// ======================================================

{
  const numbers = [-4, 6, 3, 8, -2, 5, 10];

  let sum = 0;

  for (const el of numbers) {
    if (el > 0 && el % 2 === 0) {
      sum += el;
    }
  }

  console.log(sum);
}

// ======================================================
// Task 46 — Ən çox təkrarlanan ədədi tap
// Məntiq: for...of + Frequency Counter + Max Tracking
// ======================================================

{
  const numbers = [4, 2, 7, 2, 4, 2, 8, 4, 2];

  const frequency = {};

  for (const el of numbers) {
    if (frequency[el] === undefined) {
      frequency[el] = 1;
    } else {
      frequency[el]++;
    }
  }

  let mostRepeatedNumber;

  let highestCount = 0;

  for (const key in frequency) {
    if (frequency[key] > highestCount) {
      highestCount = frequency[key];

      mostRepeatedNumber = Number(key);
    }
  }

  console.log(mostRepeatedNumber);
}

// ======================================================
// Task 47 — Hər elementin index-i ilə hasilini yeni array-ə əlavə et
// Məntiq: forEach + Transformation + Result Array
// ======================================================

{
  const numbers = [5, 10, 15, 20];

  const result = [];

  numbers.forEach((el, index) => {
    result.push(el * index);
  });

  console.log(result);
}

// ======================================================
// Task 48 — Hər ədədin neçə dəfə təkrarlandığını hesabla
// Məntiq: forEach + Frequency Counter
// ======================================================

{
  const numbers = [2, 5, 2, 8, 5, 2, 8];

  const frequency = {};

  numbers.forEach((el) => {
    if (frequency[el] === undefined) {
      frequency[el] = 1;
    } else {
      frequency[el]++;
    }
  });

  console.log(frequency);
}

// ======================================================
// Task 49 — Ən uzun ardıcıl artan hissənin uzunluğunu tap
// Məntiq: Linear Scan + Adjacent Comparison
//          + Counter + Max Tracking
// ======================================================

{
  const numbers = [3, 5, 7, 2, 4, 6, 8, 1];

  let currentCount = 1;

  let maxCount = 1;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < numbers[i + 1]) {
      currentCount++;

      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 1;
    }
  }

  console.log(maxCount);
}

// ======================================================
// Task 50 — Cəmi target-a bərabər olan ilk cütü tap
// Məntiq: Nested Loops + Pair Search + Early Break
// ======================================================

{
  const numbers = [3, 8, 4, 7, 2, 9];

  const target = 11;

  const result = [];

  let find = false;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && !find) {
        find = true;

        console.log(numbers[i], numbers[j]);

        result.push(numbers[i]);

        result.push(numbers[j]);
      }
    }
  }

  console.log(result);
}
