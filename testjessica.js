/**
 * ARLOJI COLLECTION
 * 
 * A punya koleksi arloji yang dia banggakan, dan teman-teman nya ingin bertanya koleksi arloji apa saja yang dia punya.
 * 
 * let watches = ["Swiss Army","Daniel Wellington","Dublot"]
 * Hasil yang di harapkan : Saya punya Swiss Army, Daniel Wellington, dan Dublot.
 * 
 * Hasil harus sama persis seperti yang di contohkan, dimana :
 * 1. Result di print dalam 1 string 
 * 2. Tanda ',' (koma) dan '.' (titik) harus sesuai
 * 
 * Contoh lain :
 * let arloji = ['A', 'B', 'C', 'D','E']
 * Hasil yang di harapkan : Saya punya A, B, C, D, dan E.
 * 
 * BUAT PSEUDOCODE DAN SOLUSI CODINGNYA
 * 1. set function split sentences (string)
 * 2. set variable arr input dengan array kosong
 * 3. set variabel str dengan string kosong 
 * 4. set looping setiap huruf
 * 5. 
 *  
 * 
 * Rules : Tidak boleh menggunakan built in function apapun!
 */
var watches=["Swiss Army","Daniel Wellington","Dublot"]
function mentionWatch(watches) {
    
  
  }
  
  console.log(mentionWatch(["Swiss Army", "Daniel Wellington", "Dublot"])) 
  // Saya punya Swiss Army, Daniel Wellington, dan Dublot.
  console.log(mentionWatch(["A", "B", "C", "D", "E"]))
  // Saya punya A, B, C, D, dan E.
  console.log(mentionWatch([]))
  // Saya tidak punya arloji, trims.
  console.log(mentionWatch())
  // Saya tidak punya arloji, trims.
  
  // abaikan kode di bawah ini
  module.exports = mentionWatch

 /**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()
 
*/

//Tulislah Pseudocode disini

 // ================================================================================
function subset(arr1, arr2) {
    //tulis function disini 

}

console.log(subset([3, 9, 5], [1, 3, 9, 9, 8, 44])); //false
console.log(subset([1, 3], [1, 3, 5, 7, 8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false  