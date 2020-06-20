// console.log('Bai 1:');
// console.log('1. Var vs Const: Phạm vi của const bị giới hạn trong scope giống let và const ko thể cập nhật được giá trị của biến.')
// console.log('2. Let vs Var: Phạm vi sử dụng của var rộng hơn let. Var có thể sử dụng xuyên qua scope {} => Code chính xác hơn');
// console.log('3. Let vs Const: Biến Const chỉ được khai báo 1 lần và không thể thay đổi giá trị của nó.');
// console.log('4. Var dùng khi muốn biến tồn tại bên ngoài scope. Let sử dụng khi cần sự chính xác và dễ đọc. Const dùng khi muốn một iến khônng thể thay đổi trong suốt thời gian')
// console.log('Bai 2:');
// console.log('1. Boolean là biểu thức chỉ có true và false');
// console.log('2. Boolean trả lại kiểu true hoặc false');
// console.log('Bai 3:');
// console.log('A. In số từ 1-7:');
// for(let i =1; i<=7; i++)
// {
//    console.log(i);
// }
// console.log('B. In số do người dùng nhâp:')
// let n  =prompt('Enter number: ')
// for(let x =0; x < n; x++)
// {
//     console.log(x);
// }
// console.log('C. In số do người dùng nhâp và bắt đầu đến từ 3:')
// let m  =prompt('Enter end number: ')
// for(let x = 3; x < m; x++)
// {
//     console.log(x);
// }
// console.log('D. In dãy số do người dùng nhập số đầu và cuối (n và c):')
// let n = prompt('Enter n: ')
// let c = prompt('Enter c: ')
// for(let i= n; i<c; i++)
// {
//     console.log(i);
// }
// console.log('E. In dãy số do người dùng nhập số đầu và cuối (n và c) có bước nhảy là 3:')
// var n = prompt('Enter n: ')
// var x = prompt('Enter c: ')
// do{
//     n++;
//     n++;
//     n++;
//     console.log(n);
// }while (n<x);
// console.log('F. In dãy số do người dùng nhập số đầu và cuối (n và c) có bước nhảy là s:')
// var a = prompt('Enter n: ')
// let n = Number(a);
// var x = prompt('Enter c: ')
// let c = Number(x)
// var z = prompt('Enter S: ')
// let s = Number(z);
// do{
//     n+=s;
//     console.log(n);
// }while (n<c);
// console.log('4. Tính giai thừa đựa vào số nhập vào');
// let a= Number(prompt('Enter factoriala number: ')) ;
// let x=1;
// for(var i = 1; i< a; i++)
// {
//     x=x*i;
// }
// console.log(x);
// console.log('5. Kiểm tra xem đủ tuổi 14:');
// let age = prompt('Enter age: ');
// if(age < 14)
// {
//     alert('Chưa đủ tuổi!');
// }
// else{
//     alert('hợp lệ');
// }
// console.log('6. Kiểm tra x: ')
// let x = prompt('Enter x');
// if(x <=4)
// {
//     alert(x+ " is lower half of 9");
// }
// else{
//     alert(x+ " is higher half of 9");
// }
// console.log('7. Kiểm tra lower và higher half của số nhập vào: ');
// let x = prompt('Enter x: ');
// let n = prompt('Enter n: ');

// if(x<(n/2))
// {
//     alert(x + " is lower half of "+ n);
// }
// else
// {
//     alert(x + " is higher half of "+ n);
// }
// console.log('8. Kiểm tra số nhập vào là chẵn hay lẻ: ')
// let a = prompt('Enter number: ');
// if(a%2 == 0)
// {
//     alert(a+ " is even number.");
// }
// else{
//     alert(a+ " is odd numeber.");
// }
// console.log('Bài 9: Chương trình in L và H');
// console.log('A. L + H = 6')

//     for(let i=0;i<(6/2);i++)
//     {
//         console.log('L');
//     }
//     for(let i=0;i<(6/2);i++)
//     {
//         console.log('H');
//     }
// console.log('B. User nhập tổng L và H ')
// let num=Number(prompt('Enter total number of L and H: ')) ;
// if(num%2==0)
// {
//     for(let i=0;i<(num/2);i++)
//     {
//         console.log('L');
//     }
//     for(let i=0;i<(num/2);i++)
//     {
//         console.log('H');
//     }
// }
// else
// {
//     let a = num/2;
//     let b = (num%2)/2;
//     let h = a-b;
//     for(let i=0; i<(num-h); i++)
//     {
//         console.log('L');
//     }
//     for(let i=0; i<h; i++)
//     {
//         console.log('H');
//     }
// }
// console.log('C. In ra 1 và 0 lần lượt trong 8 lần')
// for(let i=0; i<8/2;i++)
// {
//     console.log(0);
//     console.log(1);
// }
// console.log('D. In ra 1 và 0 theo số lần người dùng nhập:')
// let a = Number(prompt('Enter number: '));
// if(a%2==0)
// {
//     for(let i=0; i<a/2;i++)
//     {
//         console.log(0);
//         console.log(1);
//     }
// }
// else{
//     for(let i=0; i<(a/2-1);i++)
//     {
//         console.log(0);
//         console.log(1);
//     }
//     console.log(0);
// }
// console.log('Bài 10: Tính BMI:');
// let weight = prompt('Enter Weight:');
// let height = Number(prompt('Enter Height in cm: '))/100;
// let a = alert('Your BMI is '+ (weight/(height*height)));
// if(a<16)
// {
//     alert('You are severely underweight');
// }
// else if(a>=16 &&a<18.5)
// {
//     alert('You are underweight');
// }
// else if(a>=18.5 &&a<25)
// {
//     alert('You are normal');
// }
// else if(a>=25 &&a<30)
// {
//     alert('You are overweight');
// }
// else if(a>30)
// {
//     alert('You are obese');
// }
// console.log('Chương trình tính nghiệm 3 số a,b,c: ');
// let a = prompt('Enter a: ');
// let b= prompt('Enter b:');
// let c = prompt('Enter c: ');
// let delta = (b*b)-(4*a*c);
// if(delta>0)
// {
//     alert('Phương trình có 2 nghiệm phân biệt');
// }
// else if(delta<0)
// {
//     alert('Phương trình vô nghiệm');
// }
// else
// {
//     alert('Phương trình có 1 nghiệm duy nhất');
// }