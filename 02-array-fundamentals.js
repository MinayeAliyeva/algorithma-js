// ======================================================
// 02 — ARRAY FUNDAMENTALS
// TASK 51–55
// ======================================================

// ======================================================
// Task 51 — Target-ın ikinci dəfə göründüyü index-i tap
// Məntiq: Counter + Index Tracking
//
// Həll et:
// → Loop konstruksiyalarından biri ilə
//
// Output:
// 3
// ======================================================

{
  const numbers = [5, 2, 8, 2, 9, 2];
  const target = 2;

  let count = 0;
  let index = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count++;

      if (count === 2) {
        index = i;
        break;
      }
    }
  }

  console.log(index);
}

// ======================================================
// Task 52 — Ən böyük və ikinci ən böyük FƏRQLİ ədədi tap
// Məntiq: Max Tracking
//
// Həll et:
// → Loop konstruksiyalarından biri ilə
//
// İstifadə etmə:
// → sort()
// → Math.max()
//
// Output:
// {
//     maxEl: 20,
//     secondMax: 15
// }
// ======================================================

// Həll 1 — Loop ilə

{
  const numbers = [10, 5, 20, 20, 8, 15];

  const result = {
    maxEl: -Infinity,
    secondMax: -Infinity,
  };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > result.maxEl) {
      result.secondMax = result.maxEl;
      result.maxEl = numbers[i];
    } else if (numbers[i] > result.secondMax && numbers[i] !== result.maxEl) {
      result.secondMax = numbers[i];
    }
  }

  console.log(result);
}

// Əlavə həll (solution)
// Həll 2 — reduce ilə

{
  const numbers = [10, 5, 20, 20, 8, 15];

  const result = numbers.reduce(
    (acc, current) => {
      if (current > acc.maxEl) {
        acc.secondMax = acc.maxEl;
        acc.maxEl = current;
      } else if (current > acc.secondMax && current !== acc.maxEl) {
        acc.secondMax = current;
      }

      return acc;
    },
    {
      maxEl: -Infinity,
      secondMax: -Infinity,
    },
  );

  console.log(result);
}

// ======================================================
// Task 53 — Array-də çatışmayan ədədi tap
// Məntiq: Accumulator + Expected Value
//
// 1-dən n-ə qədər ədədlər olmalıdır.
// Onlardan biri çatışmır.
//
// Input:
// [1, 3, 4, 5, 6]
//
// Output:
// 2
//
// Qarışıq array:
// [5, 1, 6, 3, 2]
//
// Output:
// 4
// ======================================================

// Həll 1 — Array sıralıdırsa

{
  const numbers = [1, 3, 4, 5, 6];

  let missingNumber;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      missingNumber = numbers[i] + 1;
      break;
    }
  }

  console.log(missingNumber);
}

// Həll 2 — Qarışıq array-i əvvəlcə manual sort edirik

{
  const numbers = [5, 1, 6, 3, 2];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        const temp = numbers[i];

        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  let missingNumber;

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] + 1 !== numbers[i + 1]) {
      missingNumber = numbers[i] + 1;
      break;
    }
  }

  console.log(missingNumber);
  console.log(numbers);
}

// Əlavə həll (solution)
// Həll 3 — Riyazi yanaşma
//
// 1 + 2 + ... + n cəmini hesablayırıq.
// Sonra array-dəki real cəmi çıxırıq.
//
// expectedSum - actualSum = missingNumber

{
  const numbers = [5, 1, 6, 3, 2];
  const n = 6;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    actualSum += numbers[i];
  }

  const missingNumber = expectedSum - actualSum;

  console.log(missingNumber);
}

// ======================================================
// Task 54 — Bütün sıfırları array-in sonuna keçir
// Məntiq: Array Transformation
//
// Həll et:
// → Array metodlarından istifadə edə bilərsən
//
// Input:
// [0, 1, 0, 3, 12]
//
// Output:
// [1, 3, 12, 0, 0]
//
// Elementlərin sırası qorunmalıdır.
// ======================================================

// Həll 1 — İki ayrı array

{
  const numbers = [0, 1, 0, 3, 12];

  const zeros = [];
  const nonZeros = [];

  numbers.forEach((number) => {
    if (number === 0) {
      zeros.push(number);
    } else {
      nonZeros.push(number);
    }
  });

  const result = [...nonZeros, ...zeros];

  console.log(result);
}

// Həll 2 — Sıfırların sayını hesablayırıq

{
  const numbers = [0, 1, 0, 3, 12];

  let zeroCount = 0;

  const nonZeros = numbers.filter((number) => {
    if (number === 0) {
      zeroCount++;
    }

    return number !== 0;
  });

  const zeros = Array(zeroCount).fill(0);

  const result = nonZeros.concat(zeros);

  console.log(result);
}

// Həll 3 — İki filter

{
  const numbers = [0, 1, 0, 3, 12];

  const nonZeros = numbers.filter((number) => number !== 0);
  const zeros = numbers.filter((number) => number === 0);

  const result = [...nonZeros, ...zeros];

  console.log(result);
}

// ======================================================
// Task 55 — Array-i sağa 1 addım rotate et
// Məntiq: Array Rotation + Index Manipulation
//
// Həll et:
// → Loop konstruksiyalarından biri ilə
// → Array index-lərindən istifadə et
//
// İstifadə etmə:
// → pop()
// → unshift()
// → splice()
//
// Input:
// [1, 2, 3, 4, 5]
//
// Output:
// [5, 1, 2, 3, 4]
// ======================================================

// Həll 1 — Swap edərək

{
  const numbers = [1, 2, 3, 4, 5];

  for (let i = numbers.length - 2; i >= 0; i--) {
    const temp = numbers[i];

    numbers[i] = numbers[i + 1];
    numbers[i + 1] = temp;
  }

  console.log(numbers);
}

// Həll 2 — Elementləri sağa shift edərək

{
  const numbers = [1, 2, 3, 4, 5];

  const lastElement = numbers[numbers.length - 1];

  for (let i = numbers.length - 2; i >= 0; i--) {
    numbers[i + 1] = numbers[i];
  }

  numbers[0] = lastElement;

  console.log(numbers);
}
// ======================================================
// Task 56 — Ən uzun ardıcıl eyni element seriyasını tap
// Məntiq: Adjacent Comparison + Running Counter + Max Tracking
// İstifadə etmə: sort(), Map, object frequency
// ======================================================
//
// Input:
// const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3, 2];
//
// Output:
// {
//   number: 3,
//   count: 4
// }
//
// Diqqət:
//
// Burada ümumi frequency axtarmırıq.
//
// ARDICIL gələn elementləri axtarırıq.
//
// Məsələn:
//
// [2, 2, 1, 2, 2, 2]
//
// 2 ümumilikdə 5 dəfə var.
//
// Amma ən uzun ardıcıl 2 seriyası:
//
// [2, 2, 2]
//
// count = 3

// ======================================================
// Task 57 — Local peak elementləri tap
// Məntiq: Neighbor Comparison + Result Array
// İstifadə etmə: filter()
// ======================================================
//
// Local peak:
// özündən əvvəlki və sonrakı elementdən böyük olan elementdir.
//
// Input:
// const numbers = [1, 5, 2, 7, 3, 6, 4];
//
// Output:
// [5, 7, 6]
//
// Çünki:
//
// 5 > 1 && 5 > 2
// 7 > 2 && 7 > 3
// 6 > 3 && 6 > 4
//
// Qeyd:
//
// Birinci və sonuncu element peak hesab edilmir.
// Çünki onların iki qonşusu yoxdur.

// ======================================================
// Task 58 — İki array-in kəsişməsini duplicate olmadan tap
// Məntiq: Nested Loops + Duplicate Prevention + Result Array
// İstifadə etmə: Set, Map, includes(), filter()
// ======================================================
//
// Input:
//
// const firstArray = [1, 2, 2, 3, 4, 5];
// const secondArray = [2, 2, 4, 4, 6];
//
// Output:
//
// [2, 4]
//
// Diqqət:
//
// 2 hər iki array-də bir neçə dəfə olsa belə,
// result-a yalnız bir dəfə əlavə olunmalıdır.

// ======================================================
// Task 59 — Array-də target cəmini verən neçə fərqli index cütü var
// Məntiq: Nested Loops + Pair Counting
// İstifadə etmə: Set, Map
// ======================================================
//
// Input:
//
// const numbers = [1, 2, 3, 4, 5];
// const target = 6;
//
// Output:
// 2
//
// Cütlər:
//
// numbers[0] + numbers[4]
// 1 + 5 = 6
//
// numbers[1] + numbers[3]
// 2 + 4 = 6
//
// Buna görə:
// 2
//
// Qeyd:
//
// (i, j) və (j, i) ayrı cüt hesab edilmir.
//
// Eyni index iki dəfə istifadə edilə bilməz.

// ======================================================
// Task 60 — Array yalnız bir swap ilə ascending sorted ola bilərmi?
// Məntiq: Array Comparison + Mismatch Tracking
// İstifadə etmə: sort()
// ======================================================
//
// Input:
// const numbers = [1, 3, 2, 4];
//
// Output:
// true
//
// Çünki:
//
// index 1 və index 2-ni dəyişsək:
//
// [1, 2, 3, 4]
//
// alınır.
//
// ------------------------------------
//
// Input:
// const numbers = [3, 1, 2];
//
// Output:
// false
//
// Tək bir swap kifayət etmir.
//
// ------------------------------------
//
// Input:
// const numbers = [1, 2, 3, 4];
//
// Output:
// true
//
// Çünki array onsuz da sorted-dır.
//
// Qeyd:
//
// Məqsəd array-i həqiqətən sort etmək deyil.
// Məqsəd onun maksimum bir swap ilə sorted ola
// bilib-bilməyəcəyini müəyyən etməkdir.
