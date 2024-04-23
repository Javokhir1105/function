// 2
// function triangle(a){
//     p=3*a
//     s=(a*a*Math.sqrt(3))/4
//     return [p,s]
// }
// console.log(triangle(6))

// 3
// function add(n){
//     let summ=0
//     for( i=0; i<=n; i++){
//         summ+=i
//     }
//     return summ
// }
// console.log(add(7))

// 4
// function square(k){
//     if(Math.sqrt(k)%1===0 ){
//         return true
//     }
//     else{
//         return false 
//     }
// }
// console.log(square(10))

// 5
// function size(k){
//     return k.length
// }
// console.log(size("1478"))

// 7
// function time(T){
//     D=T/3600
//     F=T/60
//     S=T%60
//     H=Math.floor(D)
//     M=Math.floor(F)
//     let soat = `${H}:${M}:${S}`
//     return soat
// }
// console.log(time(400))

// 8
// function incTime(H, M, S) {
//     S++;
//     if (S == 60) {
//         S = 0;
//         M++;
//         if (M == 60) {
//             M = 0;
//             H++;
//             if (H == 24) {
//                 H = 0;
//             }
//         }
//     }
//     return { hours: H, minutes: M, seconds: S };
// }
// let newTime = incTime(2, 35, 58);
// console.log(`1 sekund keyingi vaqt: ${newTime.hours}:${newTime.minutes}:${newTime.seconds}`);

// -------------------------------------------------Uyga vazifa-----------------------------------------------------------
// 1
// function daraja(a,n){
//     let s=Math.pow(a,n)
//     return s
// }
// console.log(daraja(3,5))

// 2
// function mean(a,b){
//     let S=(a+b)/2
//     let G=Math.pow((a*b),1/2)
//     return [S,G]
// }
// console.log(mean(12,48))\

// 3
// function sign(a){
//     if(a>0){
//         return 1;
//     }
//     else if(a<0){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// }
// console.log(sign(0))

// 4
// function roots(A,B,C){
//     let D=B*B-4*A*C
//     if(D>0){
//         return "2ta ildiz"
//     }
//     else if(D<0){
//         return "0 ta ildiz"
//     }
//     else{
//         return "1 ta ildiz"
//     }
// }
// console.log(roots(1,-6,9))

// 5
// function circle(r){
//     let S=Math.PI*r*r
//     return S
// }
// console.log(circle(5))

// 6
// function range(A,B){
//     if(A<B){
//         summ=0;
//         for(let i=A; i<=B; i++){
//             summ+=i;
//         }
//         return summ;
//     }
//     else{
//         return 0;
//     }
// }
// console.log(range(8,10))

// 7
// function calculate(A,B,S){
//     if(S=="+"){
//       C=A+B
//       return C
//     }
//     else if(S=="-"){
//         D=A-B
//         return D
//     }
//     else if(S=="*"){
//         F=A*B
//         return F
//     }
//     else if(S=="/"){
//         G=A/B
//         return G
//     }
// }
// console.log(calculate(10,15,"*"))

// 8
// function bool(k){
//     if(k%2==0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(bool(13))

// 9
// function sort(a,b,c){
//     if(a>b>c){
//         return [c,b,a]
//     }
//     else if(a>c>b){
//         return[b,c,a]
//     }
//     else if(b>a>c){
//         return[c,a,b]
//     }
//     else if(b>c>a){
//         return[a,c,b]
//     }
//     else if(c>a>b){
//         return[b,a,c]
//     }
//     else{
//         return [a,b,c]
//     }
// }
// console.log(sort(8,10,5))

// 10
// function power(K,N){
//     for(i=1;i<=K; i++){
//         if(K===Math.pow(N,i) && K>0){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(power(9,2))

// 11
// function prime(k){
//     for(i=3; i<=Math.sqrt(k); i++){
//         if(k%i===0 || k%2===0  ){
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }
// console.log(prime(229))

// 12
// function prime(n){
//     summ=0
//   for(j=1; j<n; j++){
//     if(j%2==0 && j%3==0 && j%5==0){
//     return false
//   }
//     else {
//     summ++
//     return summ
//   }
//  }
// }
// console.log(prime(10))
//  12
// isPrime funksiyasi: berilgan sonni tub sonmi yoki emasmi diqqatini ustiga olish
// function isPrime(num) {
//     if (num <= 1) return false; 
//     if (num <= 3) return true; 
//     if (num % 2 === 0 || num % 3 === 0) return false; 
//     // Soddalik sinovlari
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true; 
// }
// function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//         if (isPrime(i)) { 
//             count++;
//         }
//     }
//     return count; 
// }
// let N = 20; 
// console.log("1 dan", N, "gacha bo'lgan tub sonlar soni:", numberOfPrime(20)); // Natijani chiqarish

// 15
// function palindromikTekshirish(son) {
//     son = son.toString();
//     return son === son.split('').reverse().join('');
// }
// let son = 1345431;
// let natija = palindromikTekshirish(son);
// console.log(natija);

// 16
// function faktor(N){
//     let y=1
//     for(let i=1; i<=N; i++){
//         y*=i
//     }
//     return y
// }
// console.log(faktor(6))

// 17
// function three(n){
//     summ = 0
//     for( i=0; i<=n; i++){
//         if(i%3==0){
//             summ+=i;
//         }
//     }
//     return summ
// }
// console.log(three(15))


// 18
// function three(n){
//      let summ = 0
//      let b = 0
//     for( i=0; i<=n; i++){
//         if(i%2==0){
//             summ+=i;
//         }
//         else{
//             b+=i
//         }
//     }
//     return [summ,b]
// }
// console.log(three(10))

// 19
// function intime(H,D,S){
//     let F=H*3600+D*60+S
//     return F;
// }
// console.log(intime(0,6,40))

// 20
// function  incTime(H, M, S){
//        if(H>=0&&H<23&&M>=0&&S>=0&&S<59){
//         return [H, M, S-1]
//        }
//        else if(H>=0&&H<23&&M>=0&&M<59&&S==59){
//           return[ H, M-1,59]
//        }
//        else if(H>=0&&H<23&&M==59&&S==59){
//           return[ H-1, 59,59]
//        }
//        else if(H=23&&M==59&&S==59){
//           return [23,59, 58]
//        }
//        else{
//         return [23,59,59]
//        }
//     }
//     console.log(incTime(21, 53, 58));


// 11
// function isPrime(num) {
//     for(var i=2; i<Math.floor(Math.sqrt(num))+1; i++) {
//         if(num % i == 0) {
//             return "tub emas"
//          }
//     }
//     return "tub son";
// }
// console.log(isPrime(229))


