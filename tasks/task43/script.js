"use strict"
let a = '5' + '2';
alert(a);//52
a = '5' + 2;
alert(a);//52
a = 5 + '2';
alert(a);//52
a = 5 + 2;
alert(a);//7
a = '5' * '2';
alert(a);//10
a = '5' - '2';
alert(a);//3
a = '5' / '2';
alert(a);//2.5
a = '5' % '2';
alert(a);//1
a = '5s' * '2';
alert(a);//NaN
a = '5s' + '2';
alert(a);//5s2
a = (-'5') + (-'2');
alert(a);//-7
a = '5' * 1 + '2' * 1;
alert(a);//7
a = '5' * '1' + '2' * '1';
alert(a);//7
a = '' + 3 + 1;
alert(a);//31