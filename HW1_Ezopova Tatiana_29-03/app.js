//1) ⁃ дан массив [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50].
// Пройдитесь циклом и выведите только те числа, которые начинаются на 2 и 5.
// Результат должен вывестись в новом массиве newArray
var array2 = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
for (var i = 0; i < array2.length; i++) {
    var newArray  = String(array2[i]);
    // console.log(array2)
    // console.log(newArray)
    if (newArray[0] === '2' || newArray[0] === '5') {
        console.log(`numbers starts from 2 or 5 - ${newArray}`)
    }
}
//2)   Написать функцию (любой из видов пройденных на уроке),
// которая принимает аргумент и возвращает его тип данных в консоли.
//  Пример:
//  getDataType(false) => boolean
//  getDataType('hello world!') => string
//  getDataType(42) => number
//
var getDataType = function (a) {
    return console.log(typeof a)
}
getDataType(false)
getDataType('hello world')
getDataType(42)

//3) Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’].
// Вам нужно посчитать каких тегов сколько штук.
// Обязательные условия:
// Конечный результат должен вывестись как объект {}, где ключ - это сам тег,
// а значение - это количество сколько раз этот тег встречается в массиве.
var array = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
var arrayObject = {}
for (var i = 0; i < array.length; i++) {
    if (arrayObject.hasOwnProperty(array[i])) {
        arrayObject[array[i]] += 1
    } else {
        arrayObject[array[i]] = 1
    }
}
console.log(arrayObject)










