// ======================================================
// 02 — ARRAY FUNDAMENTALS
//51-90
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

{
  const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3, 2];
  let count = 1;
  let maxCount = 0;
  let result = {
    number: 0,
    count: count,
  };

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      count++;
      if (count > maxCount) {
        maxCount = count;
        result.count = maxCount;
        result.number = numbers[i];
      }
    } else {
      count = 1;
    }
  }
  console.log(result);
}

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

{
  const numbers = [1, 3, 2, 5, 4, 6, 2, 8, 3];
  let finded = numbers.filter((el, i) => {
    if (el > numbers[i - 1] && el > numbers[i + 1]) {
      return el;
    }
  });
  console.log(finded);
}
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
{
  const numbers1 = [1, 2, 3, 4, 4, 5, 7];

  const numbers2 = [3, 4, 4, 5, 6, 7];
  const membershipArr = [];

  for (let i = 0; i < numbers1.length; i++) {
    let el = numbers1[i];
    for (let j = 0; j < numbers2.length; j++) {
      if (el === numbers2[j] && !membershipArr.includes(el)) {
        membershipArr.push(el);
      }
    }
  }
  console.log(membershipArr);
}
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
{
  const numbers = [1, 2, 3, 4, 5, 6];
  let target = 7;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        count++;
      }
    }
  }

  console.log(count);
}
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
{
  const numbers = [1, 2, 6, 4, 5, 3];
  let firstFalseIndex = null;
  let secondFalseIndex = null;

  let copyArr = [...numbers];
  for (let i = 0; i < numbers.length; i++) {
    if (copyArr[i] > copyArr[i + 1]) {
      if (firstFalseIndex === null) {
        firstFalseIndex = i;
      } else {
        secondFalseIndex = i + 1;
      }
    }

    console.log("first", firstFalseIndex);
    console.log("sec", secondFalseIndex);
  }
  if (firstFalseIndex !== null && secondFalseIndex !== null) {
    let temp = copyArr[firstFalseIndex];
    copyArr[firstFalseIndex] = copyArr[secondFalseIndex];
    copyArr[secondFalseIndex] = temp;
  }
  let isSorted = true;
  for (let i = 0; i < copyArr.length - 1; i++) {
    if (copyArr[i] > copyArr[i + 1]) {
      isSorted = false;
      break;
    }
  }

  console.log(isSorted);
  console.log(copyArr);
}

// ======================================================

// Task 61 — Array-i yerindəcə tərsinə çevir

// Məntiq: Two Indexes + Element Swapping

//

// Həll et:

// → Loop konstruksiyalarından biri ilə

//

// reverse() istifadə etmə.

// Yeni array yaratmadan mövcud array üzərində işləməyə çalış.

// İlk element sonuncu,
// ikinci element sondan ikinci,
// və s. olmalıdır.

// ======================================================

// Input:

// Output:

// [5, 4, 3, 2, 1]
{
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
    let rightindex = numbers.length - 1 - i;
    let temp = numbers[i];
    numbers[rightindex] = temp;
  }
  console.log(numbers);
}

// ======================================================
// ======================================================

// Task 62 — Target elementlərinin hamısını sil

// Məntiq: Element Selection + Array Reconstruction

//

// Həll et:

// → Loop konstruksiyalarından biri ilə

//

// filter() istifadə etmə.

// Verilmiş target-ə bərabər olan bütün elementləri
// array-dən çıxart.

// Digər elementlərin ardıcıllığı dəyişməməlidir.

// ======================================================

// Input:

// Output:

// [1, 2, 4, 5]
{
  const numbers = [1, 3, 2, 3, 4, 3, 5];
  const target = 3;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === target) {
      console.log("test");
      numbers.splice(i, 1);
    }
  }
  console.log(numbers);
}
// ======================================================

// Diqqət:

// Target array-də heç yoxdursa,
// array dəyişməməlidir.

// ======================================================
// ======================================================

// Task 63 — Soldakı bütün elementlərdən böyük olan elementləri tap

// Məntiq: Running Maximum + Comparison

//

// Həll et:

// → Loop konstruksiyalarından biri ilə

//

// Element özündən əvvəl gələn BÜTÜN elementlərdən
// böyükdürsə, onu nəticəyə əlavə et.

// İlk element avtomatik olaraq nəzərə alınır,
// çünki onun solunda heç bir element yoxdur.

// ======================================================

// Input:

{
  const numbers = [3, 5, 2, 7, 6, 9, 4];
  let max = numbers[0];
  let result = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      result.push(numbers[i]);
    }
  }
  console.log(result);
}

// Output:

// [3, 5, 7, 9]

// ======================================================

// İzah:

// 3 → ilk element → götürülür
// 5 → 3-dən böyük → götürülür
// 2 → əvvəlkilərin maksimumundan böyük deyil
// 7 → əvvəlkilərin hamısından böyük → götürülür
// 6 → 7-dən böyük deyil
// 9 → əvvəlkilərin hamısından böyük → götürülür
// 4 → 9-dan böyük deyil

// ======================================================

// ======================================================

// Task 64 — Ən uzun artan ardıcıl hissənin uzunluğunu tap

// Məntiq: Adjacent Comparison + Counter + Max Tracking

//

// Həll et:

// → Loop konstruksiyalarından biri ilə

//

// Burada elementlərin ardıcıllığı vacibdir.

// Yalnız yan-yana gələn elementlər müqayisə olunur.

// Əgər növbəti element əvvəlkindən böyükdürsə,
// cari ardıcıllıq davam edir.

// Əks halda ardıcıllıq yenidən başlamalıdır.

// ======================================================

// Input:

const numbers = [1, 2, 3, 2, 4, 5, 6, 1, 2];
let count = 1;
let maxCount = 0;
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] < numbers[i + 1]) {
    count++;
    if (count > maxCount) maxCount = count;
  } else {
    count = 1;
  }
}
console.log(maxCount);
// Output:

// 4

// ======================================================

// İzah:

// [1, 2, 3] → count = 3
//
// [2, 4, 5, 6] → count = 4
//
// [1, 2] → count = 2
//
// Ən uzun hissə:
//
// [2, 4, 5, 6]
//
// count = 4

// ======================================================
// ======================================================

// Task 65 — İki sıralanmış array-i birləşdir

// Məntiq: Two Pointers + Ordered Merge

//

// Həll et:

// → Loop konstruksiyalarından biri ilə

//

// sort() istifadə etmə.

// Hər iki array əvvəlcədən ascending sıralanıb.

// Məqsəd iki array-i birləşdirərək
// yeni ascending array yaratmaqdır.

// ======================================================

// Input:

const numbers1 = [1, 3, 5, 7];

const numbers2 = [2, 4, 6, 8];

let result = [];

let i = 0;
let j = 0;
while (i < numbers1.length && j < numbers2.length) {
  if (numbers1[i] < numbers2[j]) {
    result.push(numbers1[i]);
    i++;
  } else {
    result.push(numbers2[j]);
    j++;
  }
}
console.log(result);
// Output:

// [1, 2, 3, 4, 5, 6, 7, 8]

// Output:

// [1, 2, 3, 4, 5, 6, 7, 8]

// ======================================================

// Diqqət:

// Array-lərin daxilində duplicate ola bilər.

// Duplicate elementləri silmə.

// Məsələn:
//
// [1, 3, 3]
// [2, 3, 4]
//
// nəticə:
//
// [1, 2, 3, 3, 3, 4]

// ======================================================
