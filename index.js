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

