// # TASK - ARRAY

// ## Mengelompokkan buah sesuai abjad

// Kelompokkan buah sesuai abjad dari A - Z

// ```javascript
//    //Input : ['blueberry','apple','orange','anggur','banana']
//    /*Output : [
//        ['anggur','apple'],
//        ['banana','blueberry'],
//        ['orange']
//    ] */
// // codingan
// var buah =['blueberry','apple', 'orange','anggur', 'banana'];
// var kamus ='abcdefghijklmnopqrstuvwxyz'
// var result =[];
// var temp=[];

// for (var i= 0; i< kamus.length; i++){
//     for(var j=0;j<buah.length;j++){
//        if(kamus[i]===buah[j][0]){
//            temp.push(buah[j])
//        }
//     }
//     if(temp.length !==0){
//         result.push(temp);
//     }
//     temp=[]
// }
// console.log(result)
// ## Mengubah kalimat menjadi array dan capital case

// Diberikan sebuah kalimat, pecahkan dan jadikan capital case

// ```javascript
//     //Input : "kamu makan bersama teman kamu"
//     /* Output : [
//         ['Makan','Bersama','Teman'],
//         ['Kamu']
//     ]
//     */
//     // Input : "jalan jalan dan makan makan enak"
//     /* Output : [
//         ['Dan','Enak'],
//         ['Jalan','Makan']
//     ]
//     */
// codingan
// 1. buat variable array kosong
// 2. buat variable kelipatan 2 dengan array kosong
// 3. buat variable kelipatan 1 dengan array kosong
// 4. looping tiap string dari input
// 5. jika kelipatan 2, maka push ke var kelipatan 2
// 6. jika kelipatan 1, maka push ke var kelipatan 1
// 7. push var kelipatan 2 dan 1 ke dalam variable array kosong 

// var jalan='kamu makan bersama teman kamu';
// var arrjalan= []; 
// var result=[]
// var str=''
// for (var i=0; i<jalan.length;i++){
//     if (jalan[i]!==' '){
//         str+=jalan[i]
//         } else{
//         arrjalan.push(str);
//         str=''
//     }
//     if (i===jalan.length-i){
//         arrjalan.push(str);
//         str=''
//     }
//     if ( arrjalan.length !==0){
//         result.push(arrjalan)
//     }
// }
// console.log(result)

// var jalan='kamu makan bersama teman kamu';
// var arrjalan= []; 
// var result=[]
// var str=''
// for (var i=0; i<jalan.length;i++){
//     if (jalan[i]!==' '){
//         str+=jalan[i]
//         } else{
//         arrjalan.push(str);
//         str=''
//     }
//     if (i===jalan.length-1){
//         arrjalan.push(str);
//         str=''
//     }
// }
//     if ( arrjalan.length !== arrjalan ){
//         result.push(arrjalan);
//         }

// console.log(result)

// var makan ='kamu makan bersama teman kamu';
// var count=0
//  var found = false 
// var smakan=[];
// var ringkas=[];
// var akhir=[];
// var result=[];
// var output=[];
// var group=[];
// var pisah= makan.split(' ');
//     for (var i =0; i<pisah.length;i++){
//         smakan.push(pisah[i][0].toUpperCase() + pisah[i].slice(1));
//     }  
// for (var j=0; j<smakan.length; j++){
//     for(var x=0; x<ringkas.length; x++){
//             if (smakan[j]==ringkas[x]){
//                 found= true;
//             }
//     }
//     count++;
//     if ( count == 1  && found == false){
//         ringkas.push(smakan[j]);
//     }
//     count =0;
//     found= false;  
// }
// akhir= ringkas.sort();
// var parray= Math.max(akhir.length/2,1);
//     for(var k = 0; k<2 ; k++){
//         if(parray*(k+1)<= akhir.length){
//             result.push(akhir.slice(parray*k,parray*(k+1)));
//         }
//         result[0].splice(1);    
//     }

// console.log(result)

// var jalan='jalan jalan dan makan makan enak';
// var arrjalan= jalan.trim().split(' ');
// var group=[]
// var kelipatan2=[]
// var kelipatan1=[]
// for (var i=0; i < arrjalan.length;i++){
//     if(arrjalan.indexOf(arrjalan[i])!== arrjalan.lastIndexOf(arrjalan[i])){
//         kelipatan2.push(arrjalan[i].toUpperCase(0))
//     }else {
//         kelipatan1.push(arrjalan[i].toUpperCase(0))
//     }
// }
// group.push(kelipatan2);
// group.push(kelipatan1);

// var makan = 'jalan jalan dan makan makan enak'

//  var count=0
//  var found = false 
// var smakan=[];
// var ringkas=[];
// var akhir=[];
// var result=[];
// var output=[];
// var group=[];
// var pisah= makan.split(' ');
//     for (var i =0; i<pisah.length;i++){
//         smakan.push(pisah[i][0].toUpperCase() + pisah[i].slice(1));
//     }  
// for (var j=0; j<smakan.length; j++){
//     for(var x=0; x<ringkas.length; x++){
//             if (smakan[j]==ringkas[x]){
//                 found= true;
//             }
//     }
//     count++;
//     if ( count == 1  && found == false){
//         ringkas.push(smakan[j]);
//     }
//     count =0;
//     found= false;  
// }
// akhir= ringkas.sort();
//     var parray= Math.max(akhir.length/2,1);
//     for(var k = 0; k<2 ; k++){
//         if(parray*(k+1)<= akhir.length){
//             result.push(akhir.slice(parray*k,parray*(k+1)));
//         }
//     }
//     console.log(result)