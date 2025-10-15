

//! materi component button DAN pressable di react native

//! 1. apa itu button
/*
    button adalah sebuah component yang digunakan untuk membuat tombol 
*/


//!2. cara menggunakannya
/*

todo: panggil componennya <Button/>

    * <Button {...props}/>
    * ada banyak props yg digunakan bisa diliat di docnya secara lengkap
    * 
    * onPress = sebuah event untuk melakukan sesuatu ketika tombol di tekan
    * disable = untuk menentukan apakah tombol iini di nonaktifkan
    * color = untuk mengatur warna bg
    * title = untuk menentukan tulisan di dlam button

*/


//! 3. APA ITU PRESSABLE
/*
    PRESSABLE ADALAH SEBUAH COMPONENT PEMBUNGKUS YG DIGUNAKAN UNTK MEMBUAT COMPONENT LAIN BISA MENGGUNAKAN EVENT TEKAN ATAU PRESS
*/
// todo: misal ketika ingin membuat gambar ketika di tekan berubah bisa memasukan ke dalam component pressable supaya bisa menggunakan event pressnya

//!4. cara menggunakan pressable
/*
    todo import componentnya Pressable

    * <Pressable {...props}>{children}</Pressable>

    * contoh
    <Pressable onPress={()=>{console.log(text ditekan)}}>
        <Text>ini text</Text>
    </Pressable>

    contoh di atas adalah penerapan dari pressable yg mana kita membuat sebuah text bisa menggunakan event press sama seperti di component button

    jika tidak memasukannya ke dalam cmoponent <Pressable> kita tidak bisa melakukan aksi press ke textnya
*/


