// console.log("Selamat pagi")

// #TASK-CONDITIONAL DAN LOOPING

// #cek ganjil dan genap

// input :5 
// outpit: 5 adalah ganjil

//codingan
// var i = 5;
// if (i %2 === 0){
//     console.log(i+' adalah genap')
// } else if ( i%2===1){
//     console.log(i+'adalah ganjil')
// }


// ## Score sutdent

// Dalam sebuah sekolah, seorang guru diminta membuat score dan grade. Dengan syarat:
// Nilai 100-85 diberi grade A
// nilai 84-70 diberi grade B
// nilai 69-50 diberi grade C
// nilai 49-30 diberi grade D
// nilai 30-0 diberi grade E

// input :87
// output: student mendapatkan grade A

//codingan
//  var nilai = 100;
//  if (nilai >=85 && nilai <=100){
//      console.log ("student mendapatkan grade A")
//  } else if  ( nilai >=70 && nilai <=100){
//          console.log ("student mendapatkan grade B")
//      } else if (nilai >=50 && nilai <= 69){
//              console.log ("student mendapatkan grade C")
//          } else if ( nilai >=30 && nilai <=49){
//                  console.log ("student mendapatkan grade D")
//                 } else if (nilai >=0 && nilai <=30){
//                      console.log ("student mendapatkan grade E")
//                  }
// ## tiket masuk

// Dalam sebuah wahana, terdapat syarat masuk untuk penghujung. Dengan syarat:
// -umur harus di atas 15, jika kurang maka tidak boleh masuk 
// - jika uang kurang dari 50000, maka print " uang tidak cukup"
// -jika lebih maka boleh masuk

//codingan
// var umur = 15;
// var uang = 50000;
//  if ( umur < 15 ){
//      console.log ("maaf tidak boleh masuk kafe")
//  } else {
//      if(uang < 50000){
//          console.log("maaf uang tidak cukup (uang)")}
//          else{
//              console.log ("uang cukup dan boleh masuk")}
//          }
     
// ## looping kelipatan 3 dan 5

// input : 15
// output: 
// // codingan

// var number=15;

// for (var i=1; i<= number ; i ++){
//     if ( i % 3 === 0 && i!= 15){
//         console.log ( i+ 'adalah kelipatan 3')
//     }else if (i %5 ===0 && i !=15){
//         console.log(i+'adalah kelipatan 5')
//     }else if (i % 15 ===0){
//         console.log( i+ 'adalah kelipatan 3 dan 5')
//     } else {
//         console.log (i)
//     }
// }
// ## Looping segitiga

// Input : 5
// Output :
// *
// **
// ***
// ****
// *****
//  var bintang = '*'
//  var number = 5
//  for (var i = 0; i <= number; i ++){
//      for (var j = 1; j <=i; j ++){
//      bintang+='*' }
//           console.log (bintang)}
       

  