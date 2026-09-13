// ======================================================
// Task 30 — Array palindrome-dur?
// Məntiq: Two-Sided Comparison
// Optimal məntiq: Two Pointers məntiqinə giriş
// İstifadə etmə: reverse(), join()
// ======================================================

{
  // Həll 1 — sənin yanaşman

  const numbers = [1, 2, 3, 2, 1];

  const palindromeChecks = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[numbers.length - i - 1]) {
      palindromeChecks.push(true);
    } else {
      palindromeChecks.push(false);
    }
  }

  const isPalindrome = palindromeChecks.every((result) => result === true);

  console.log(isPalindrome);
}

// Əlavə həll (solution)
// Məntiq: Two-Sided Comparison + Early Break

{
  const values = [1, 2, 3, 2, 1];

  let isPalindrome = true;

  for (let i = 0; i < values.length / 2; i++) {
    if (values[i] !== values[values.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  console.log(isPalindrome);
}

// ======================================================
// Task 31 — İlk və son elementin cəmini tap
// Məntiq: Direct Index Access
// İstifadə etmə: reduce()
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
// İstifadə etmə: filter()
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
// İstifadə etmə: filter()
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
// İstifadə etmə: Math.max(), indexOf(), sort()
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
// İstifadə etmə: Math.min(), indexOf(), sort()
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
// İstifadə etmə: filter()
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
// İstifadə etmə: indexOf(), findIndex()
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
// Məntiq: Reverse Traversal + Linear Search + Early Break
// İstifadə etmə: lastIndexOf(), findLastIndex()
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
// every() məntiqinin manual forması
// İstifadə etmə: every()
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
// some() məntiqinin manual forması
// İstifadə etmə: some()
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
// Task 41 — Target tapılana qədər ədədlərin cəmini hesabla
// Məntiq: while + Accumulator + Early Stop
// İstifadə etmə: for, for...of, forEach, reduce()
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
// İstifadə etmə: Set, Map, indexOf(), find()
// ======================================================

{
  const numbers = [4, 7, 2, 9, 7, 5, 2];

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
// Task 43 — Ardıcıl eyni olan elementlərin ilk index-ini tap
// Məntiq: while + Adjacent Comparison + Index Tracking
// İstifadə etmə: findIndex()
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
// İstifadə etmə: for, while, Math.max(), sort()
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
// İstifadə etmə: for, while, filter(), reduce()
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
// İstifadə etmə: Map, sort()
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
// İstifadə etmə: map(), for, while
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
// İstifadə etmə: Map, for, while
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
// Məntiq: Linear Scan + Adjacent Comparison + Counter + Max Tracking
// İstifadə etmə: sort(), map(), filter(), reduce()
// ======================================================
//
// Input:
// const numbers = [3, 5, 7, 2, 4, 6, 8, 1];
//
// Output:
// 4

// ======================================================
// Task 50 — Array-də cəmi target-a bərabər olan ilk cütü tap
// Məntiq: Nested Loops + Pair Search + Early Break
// İstifadə etmə: Set, Map, find(), includes()
// ======================================================
//
// Input:
// const numbers = [3, 8, 4, 7, 2, 9];
// const target = 11;
//
// Output:
// [3, 8]
