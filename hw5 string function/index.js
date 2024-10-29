// 1. Преобразовать строку в массив слов. Напишите функцию
// stringToarray(str), которая преобразует строку в массив слов.
function stringToarray(str) {
    strArray = str.trim().split(" ");
    return strArray;
  }
  console.log("1. " + stringToarray("457 821 456 9"));
  console.log("1. " + stringToarray("мама мыла Раму"));

// 2. Напишите функцию deleteСharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества
// символов.

function deleteСharacters(str, length) {
    if ((str.constructor === String) && (length>0)) {
      return str.slice(0, length);
    }
  }

  console.log("2.  " + deleteСharacters("мама мыла Раму", 4));

// 3. Напишите функцию insertDash(str), которая принимает строку
// str в качестве аргумента и вставляет тире (-) между словами.
// При этом все символы строки необходимо перевести в
// верхний регистр.

function insertDash(str) {
    return str.trim().toUpperCase().replace(/[^a-zA-Zа-яА-Я0-9 -]/, " ").replace(/\s/g, "-");
  }
console.log("3.  " + insertDash("мама мыла Раму"));  //МАМА-МЫЛА-РАМУ

// 4. Напишите функцию, которая принимает строку в качестве
// аргумента и преобразует регистр первого символа строки из
// нижнего регистра в верхний.
  
function cursiveLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("4. " + cursiveLetter("мама мыла Раму")); 
// 5. Напишите функцию capitalize(str), которая возвращает строку,
// в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
    const lowerCaseString = str.trim().toLowerCase();
    return lowerCaseString
    .split(" ")
    .map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
  }
  console.log("5. " + capitalize("мама мыла Раму")); 
// 6. Напишите функцию changeRegister(str), которая принимает в
// качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
// оХоТнИк».
function changeRegister(str) {
    var changedStr = "";
      for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            changedStr += str[i].toUpperCase();
        } else {
            changedStr += str[i].toLowerCase();
        }
      }
      return changedStr;
    }
console.log("6. " + changeRegister("мама мыла Раму")); 

// 7. Напишите функцию removeChar(str), которая возвращает
// строку, очищенную от всех не буквенно-цифровых символов.
function removeChar(str) {
    return str.replace(/[^\p{L}\d]/gu, " ").replace(/\s+/g, " ");
    
  };

  console.log("7. " + removeChar("%:*)ма)(?;ма мыла/ЪХЗ|}{O} Рамуdgnny"));   

// 8. Напишите функцию zeros(num, len), которая дополняет нулями
// до указанной длины числовое значение с дополнительным
// знаком «+» или «-» в зависимости от передаваемого
// аргумента.
function zeros(num, len, sign) {
    let len_zer = len - (num + '').length, 
    num_zer = '';
      for ( ; len_zer > 0; len_zer--) {
        num_zer += 0;
      }        
      return (sign === undefined || sign === '') ? num_zer + num + '' : sign + num_zer + num +'';
    };



// 9. Напишите функцию comparison(str1, str2), которая сравнивает
// строки без учёта регистра символов.
function comparison(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
  }

  console.log("9. " + comparison("мама мыла Шиву","мама мыла Раму")); 


// 10. Напишите функцию insensitiveSearch(str1, str2), которая
// осуществляет поиск подстроки str2 в строке str1 без учёта
// регистра символов.
function insensitiveSearch(str1, str2) {
    let search_str = new RegExp(str2, "ig");
    return (str1.search(search_str) > 0) ? str1 + "Содержит " + str2 : "Вхождения строки 2 нет";  
}

console.log("10. " + insensitiveSearch("мама мыла Шиву", "Рама"));

// 11. Напишите функцию initCap(str), которая преобразует стиль
// написания составных слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов, при этом каждое
// слово внутри строки пишется с заглавной буквы.

// function initCap(str) {
//     return str.toLowerCase().replace(/(^|\s)\S/g, m=> m.toUpperCase());
//  };
const initCap = str => str.toLowerCase().replace(/(^|\s|-)+\S/g, m => m.toUpperCase()).replace(/\s+/g, '');

 console.log("11. " + initCap("hEllo woRld")); //HelloWorld
 console.log("11. " + initCap("mama мыла Раму мама мыла Шиву")); //MamaМылаРамуМамаМылаШиву

// 12. Напишите функцию initSnake(str), которая преобразует
// стиль написания составных слов строки из CamelCase в
// snake_case, при котором несколько слов разделяются
// символом подчеркивания (_), причём каждое слово пишется с
// маленькой буквы.


function initSnake(str) {    
  return str.replace(/[A-ZА-Я]/g, snake => "_" + snake.toLowerCase()).replace(/^_/, "");
}
// Заменяем все заглавные буквы (русс + англ ) символом подчеркивания (_), а затем строчными буквами
  // Удаляем символ подчеркивания (_) в начале строки
console.log("12. " + initSnake("MamaМылаРамуМамаМылаШиву"));
console.log("12. " + initSnake('HelloWorld'));

// 13. Напишите функцию repeatStr(str, n), которая возвращает
// строку повторяемую определённое количество раз.
function repeatStr(str, n) {
   repStr= "";
   while (n--> 0) repStr += str; 
  return repStr;
};

console.log("13. " + repeatStr("MamaМылаРамуМамаМылаШиву",3)); //13. MamaМылаРамуМамаМылаШивуMamaМылаРамуМамаМылаШивуMamaМылаРамуМамаМылаШиву

// 14. Напишите функцию path(pathname), которая возвращает
// имя файла (подстрока после последнего символа "\" ) из
// полного пути к файлу.

const  path = pathname => pathname.split("/").pop();

console.log("14. " + path("Mama/Мыла/Раму/Мама/Мыла/Шиву")); //Шиву

// 15. Создайте функцию endsWith(), который сравнивает
// подстроку str1 с окончанием исходной строки str и определяет
// заканчивается ли строка символами подстроки.

String.prototype.endsWith = function(substring) {
  if(substring.length > this.length) return false;
  return this.substr(this.length - substring.length) === substring;
};
console.log("15. " + "Mama/Мыла/Раму/Мама/Мыла/Шиву".endsWith("Шиву")); //15. true
console.log("15. " + "Mama/Мыла/Раму/Мама/Мыла/Шиву".endsWith("Раму")); //15. false

// 16. Напишите функцию getSubstr(str, char, pos), которая
// возвращает часть строки, расположенную после или до
// указанного символа char в зависимости от параметра pos.
function getSubstr(str, char, pos) {
  if (pos ==='before')// до
   return str.slice(0, str.indexOf(char)); 
  else if (pos === 'after') // после
   return str.slice(str.indexOf(char) + 1);
  else
   return str;  
};

console.log("16. " + getSubstr("Mama/Мыла/Раму/Мама/Мыла/Шиву", "/", "before")); //16. Mama
console.log("16. " + getSubstr("Mama/Мыла Раму Мама Мыла Шиву", "/", "after")); //16. Мыла Раму Мама Мыла Шиву

// 17. Напишите функцию insert(str, substr, pos), которая вставляет
// подстроку substr в указанную позицию pos строки str. По
// умолчанию подстрока вставляется в начало строки.

const insert = (str, ins="", pos=0) =>
  str.slice(0, pos) + ins + str.slice(pos);

console.log("17. " + insert("Мыла Раму Мама Мыла Шиву", "мама ", pos = 0)); //17. мама Мыла Раму Мама Мыла Шиву
console.log("17. " + insert("мама мыла Раму Мама Мыла", " Шиву ", pos = 25)); //17. мама мыла Раму Мама Мыла Шиву

// 18. Напишите функцию limitStr(str, n, symb), которая обрезает
// строку, если она длиннее указанного количества символов n.
// Усеченная строка должна заканчиваться троеточием «...»
// (если не задан параметр symb) или заданным символом symb.
const limitStr = (str, n = 0, symb = '') =>
  str.slice(0, n) + ( symb ? symb : '...');

console.log("18. " + limitStr("мама мыла Раму Мама Мыла Шиву", 10,"...")); //18. мама мыла ...
console.log("18. " + limitStr("мама мыла Раму Мама Мыла Шиву", 20,"уо уо уо")); //18. мама мыла Раму Мама уо уо уо

// 19. Напишите функцию count(str, stringsearch), которая
// возвращает количество символов stringsearch в строке str.
function count(str, stringsearch) {
  let counter = 0;
  
  for (let char of str) {
  if (char === stringsearch) {
  counter++;
  }
  }  
  return counter;
  };

console.log("19. " + count("мама мыла Раму Мама Мыла Шиву", "м")); //19. 5
console.log("19. " + count("мама мыла Раму Мама Мыла Шиву", "т")); //19. 0

// 20. Напишите функцию strip(str), которая удаляет все лишние
// пробелы из строки str.
function strip(str) {
      return str.trim().replace(/\s+/g," ") 
 };

 console.log("20. " + strip("  мама     мыла    Раму  Мама   Мыла   Шиву   ")); //20. "мама мыла Раму Мама Мыла Шиву"

// 21. Напишите функцию cutString(str, n), которая удаляет лишние
// слова из строки str, оставив в ней n слов.

function cutString(str, n) {
  return str.split(" ").splice(0, n).join(" ");
};

console.log("21. " + cutString("мама мыла Раму Мама Мыла Шиву", 3)); //21. мама мыла Раму

// 22. Напишите функцию findWord(word, str), которая проверяет,
// существует ли в строке str слова word.

function findWord(word, str) {
  
  return str.includes(word) 
}

console.log("22. " + findWord("Мама" , "mama мыла Раму Мама Мыла Шиву")); //22. true