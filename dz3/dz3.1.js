/** 1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

'use strict';

for (let a = 0; a <= 10; a++) {
    if (a == 0) {
        console.log(a + ' - это ноль');
    } else if (a % 2 == 0) {
        console.log(a + ' - это четное число');
    } else {
        console.log(a + ' - это нечетное число');
    }
}
