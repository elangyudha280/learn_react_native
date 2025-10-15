

//! MATERI PLATFORM DI REACT NATIVE 


//! 1. APA ITU PLATFORM
/*
    PLATFORM ADALAH SEBUAH OBJECT YG DIGUNAKAN UNTUK MENGETAHUI SISTEM OPERASI DARI DEVICE USER
*/
// TODO: JADI MISAL KITA INGIN MEMBAUT STYLE ATAU MENAMPILKAN COMPONENT hanya DI SISTEM OPERASI TERTENTU AJA BISA DENGAN OBJECT Platform


//! 2. CARA MENGGUNAKAN OBJECT Platform
/*
    todo: import dulu object nya Platform

    * Platform.property || Platform.method

    TODO: ADA BANYAK METHOD DAN PROPERTY BISA DI CEK DI DOK
    TODO: ADA BEBERAPA YG SERING DI PAKAI

    *1. Platform.os ('android','ios','macos','web','windows') = sebuah property untuk mengetahui sistem operasi device user

    *2. Platform.version = sebuah property untuk mengetahui versi sistem operasi    device user

    * 3. Platform.select(config:{}) = sebuah method yg digunakan untuk menjalankan beberapa style sekaligus hanya di sistem operasi tertentu (android,ios,web)

    * contoh
    {
        *platform.os
        padding:platform.os === 'ios' ? 20 :10 -> ini artinya jika  aplikasi di jalankan di sistem operasi ios maka paddingnya akan bernilai 20 sedangkan di android 10
         ,

         *platform.select()
        ...Platform.select({
            android: {
            * ini hanya akan di jalankan di os android
                backgroundColor: 'green',
            },
            ios: {
            * ini hanya akan di jalankan di os ios
                backgroundColor: 'red',
            },
            default: {
            * * ini hanya akan di jalankan di web atau selain ios dan android
                backgroundColor: 'blue',
            },
        }),
    }
*/
