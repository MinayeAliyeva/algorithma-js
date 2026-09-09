// Massivi çap et
const numbersPrint = [10, 20, 30, 40, 50];
for (let i = 0; i < numbersPrint.length; i++) {
    console.log(numbersPrint[i]);
}

// Massivin elementlərinin cəmini tap
const numbersSum = [5, 10, 15, 20];
let totalSum = 0;
for (let i = 0; i < numbersSum.length; i++) {
    totalSum += numbersSum[i];
}
console.log(totalSum);

// Cüt ədədləri filtrlə
const evenSource = [3, 8, 11, 14, 20, 7];
const evenValues = [];
for (let i = 0; i < evenSource.length; i++) {
    if (evenSource[i] % 2 === 0) {
        evenValues.push(evenSource[i]);
    }
}
console.log(evenValues);

// Maksimum elementi tap
const maxSource = [4, 17, 2, 38, 9, 21];
let maxValue = maxSource[0];
for (let i = 1; i < maxSource.length; i++) {
    if (maxSource[i] > maxValue) {
        maxValue = maxSource[i];
    }
}
console.log(maxValue);

// Hədəfin təkrarlanma sayını hesabla
const countSource = [2, 5, 2, 8, 2, 10, 5];
const targetNumber = 2;
let occurrenceCount = 0;
for (let i = 0; i < countSource.length; i++) {
    if (countSource[i] === targetNumber) {
        occurrenceCount++;
    }
}
console.log(occurrenceCount);

// Minimum elementi tap
const minSource = [2, 5, 2, 8, 2, 10, 5];
let minValue = minSource[0];
for (let i = 0; i < minSource.length; i++) {
    if (minSource[i] < minValue) {
        minValue = minSource[i];
    }
}
console.log(minValue);

// Mənfi ədədlərin sayını hesabla
const negativeSource = [-5, 3, -2, 10, 0, -8, 7];
let negativeCount = 0;
for (let i = 0; i < negativeSource.length; i++) {
    if (negativeSource[i] < 0) {
        negativeCount++;
    }
}
console.log(negativeCount);

// Hədəf massivdə var mı?
const targetSource = [4, 8, 15, 16, 23, 42];
const targetValue = 162;
let foundValue = false;
for (let i = 0; i < targetSource.length; i++) {
    if (targetValue === targetSource[i]) {
        foundValue = true;
    }
}
console.log(foundValue);

// Massivi tərs ardıcıllıqla çap et
const reverseSource = [10, 20, 30, 40, 50];
for (let i = reverseSource.length - 1; i >= 0; i--) {
    console.log(reverseSource[i]);
}

// Ən böyük və ikinci böyük dəyəri tap
const largestSource = [10, 5, 20, 8, 15];
let largestValue = -Infinity;
let secondLargestValue = -Infinity;
for (let i = 0; i < largestSource.length; i++) {
    if (largestSource[i] > largestValue) {
        secondLargestValue = largestValue;
        largestValue = largestSource[i];
    } else if (largestSource[i] > secondLargestValue && largestSource[i] !== largestValue) {
        secondLargestValue = largestSource[i];
    }
}
console.log('max', largestValue);
console.log('secondMax', secondLargestValue);

// Cüt ədədlərin cəmini tap
const evenSumSource = [4, 7, 10, 3, 8, 11];
let evenTotal = 0;
for (let i = 0; i < evenSumSource.length; i++) {
    if (evenSumSource[i] % 2 === 0) {
        evenTotal += evenSumSource[i];
    }
}
console.log(evenTotal);

// Maksimum və minimum arasındakı fərqi tap
const diffSource = [12, 3, 25, 7, 18];
let minDiffValue = diffSource[0];
let maxDiffValue = -Infinity;
for (let i = 0; i < diffSource.length; i++) {
    if (diffSource[i] > maxDiffValue) {
        maxDiffValue = diffSource[i];
    }
    if (diffSource[i] < minDiffValue) {
        minDiffValue = diffSource[i];
    }
}
console.log(maxDiffValue - minDiffValue);

// Təkrarlanan dəyərləri yoxla
const duplicateSource = [3, 7, 1, 9, 5, 3];
let isDuplicate = false;
for (let i = 0; i < duplicateSource.length; i++) {
    for (let j = i + 1; j < duplicateSource.length; j++) {
        if (duplicateSource[i] === duplicateSource[j]) {
            isDuplicate = true;
            break;
        }
    }
}
console.log(isDuplicate);

// includes() ilə təkrarlananları sil
const uniqueSource = [1, 2, 3, 2, 4, 1, 5, 3];
const uniqueValues = [];
for (let i = 0; i < uniqueSource.length; i++) {
    if (!uniqueValues.includes(uniqueSource[i])) {
        uniqueValues.push(uniqueSource[i]);
    }
}
console.log(uniqueValues);

// Əvvəlki yoxlama ilə təkrarlananları sil
const dedupeSource = [1, 2, 3, 4, 5, 4, 5];
const dedupedValues = [];
for (let i = 0; i < dedupeSource.length; i++) {
    let seenBefore = false;
    for (let j = 0; j < i; j++) {
        if (dedupeSource[i] === dedupeSource[j]) {
            seenBefore = true;
            break;
        }
    }
    if (!seenBefore) {
        dedupedValues.push(dedupeSource[i]);
    }
}
console.log(dedupedValues);

// İç-içə döngə ilə təkrarlanma sayını hesabla
const occurrenceSource = [1, 2, 2, 3, 1, 2, 4];
const countObject = {};
for (let i = 0; i < occurrenceSource.length; i++) {
    let count = 0;
    for (let j = 0; j < occurrenceSource.length; j++) {
        if (occurrenceSource[i] === occurrenceSource[j]) {
            count++;
        }
    }
    countObject[occurrenceSource[i]] = count;
}
console.log(countObject);

// Objektdən istifadə edərək sayları hesabla
const occurrenceSourceTwo = [1, 2, 2, 3, 1, 2, 4];
const countObjectTwo = {};
for (let i = 0; i < occurrenceSourceTwo.length; i++) {
    const currentValue = occurrenceSourceTwo[i];
    if (countObjectTwo[currentValue] === undefined) {
        countObjectTwo[currentValue] = 1;
    } else {
        countObjectTwo[currentValue]++;
    }
}
console.log(countObjectTwo);

// Ən çox təkrarlanan elementi tap
const frequencySource = [1, 2, 2, 3, 2, 4, 4];
const frequencyMap = {};
const frequencyValues = [];
let highestFrequency = -Infinity;
for (let i = 0; i < frequencySource.length; i++) {
    if (frequencyMap[frequencySource[i]] === undefined) {
        frequencyMap[frequencySource[i]] = 1;
    } else {
        frequencyMap[frequencySource[i]]++;
    }
    frequencyValues.push(frequencyMap[frequencySource[i]]);
    for (let j = 0; j < frequencyValues.length; j++) {
        if (frequencyValues[j] > highestFrequency) {
            highestFrequency = frequencyValues[j];
        }
    }
}
const frequencyKeys = Object.keys(frequencyMap);
let mostFrequentValue = 0;
for (let i = 0; i < frequencyKeys.length; i++) {
    if (frequencyMap[frequencyKeys[i]] === highestFrequency) {
        mostFrequentValue = frequencyKeys[i];
    }
}
console.log(mostFrequentValue);

// Ən çox təkrarlanan elementi başqa üsulla tap
const alternativeFrequencySource = [1, 2, 2, 3, 2, 4, 4];
const alternativeFrequencyMap = {};
let maxFrequencyCount = 0;
let mostFrequentResult;
for (let i = 0; i < alternativeFrequencySource.length; i++) {
    if (alternativeFrequencyMap[alternativeFrequencySource[i]] === undefined) {
        alternativeFrequencyMap[alternativeFrequencySource[i]] = 1;
    } else {
        alternativeFrequencyMap[alternativeFrequencySource[i]]++;
    }
    for (let j = 0; j < alternativeFrequencySource.length; j++) {
        if (alternativeFrequencyMap[alternativeFrequencySource[j]] > maxFrequencyCount) {
            maxFrequencyCount = alternativeFrequencyMap[alternativeFrequencySource[j]];
            mostFrequentResult = alternativeFrequencySource[j];
        }
    }
}
console.log(mostFrequentResult);

// Təkrarlanan dəyərləri topla
const duplicateListSource = [1, 2, 3, 2, 4, 1, 5, 3];
const duplicateValues = [];
for (let i = 0; i < duplicateListSource.length; i++) {
    let isRepeated = false;
    for (let j = i + 1; j < duplicateListSource.length; j++) {
        if (duplicateListSource[i] === duplicateListSource[j]) {
            isRepeated = true;
            break;
        }
    }
    if (isRepeated && !duplicateValues.includes(duplicateListSource[i])) {
        duplicateValues.push(duplicateListSource[i]);
    }
}
console.log(duplicateValues);

