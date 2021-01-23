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
// codingan
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
// console.log(group)

// codingan logic
// var jalan='kamu makan bersama teman kamu';
// var arrjalan=[];
// var str=''

// for (var i=0;i<jalan.length;i++){
//     if (jalan[i]!==''){
//         if (str.length===0){
//             str+=jalan[i].toUpperCase()
//         }else{
//             str+=jalan[i]
//         }
//     } else (
//         arrjalan.push(str);
//         str=''
//     }
//     if(i=== jalan.length-1){
//         arrjalan.push(str);
//         str=''
//     }
// }
// console.log(arrjalan)

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
// console.log(group)