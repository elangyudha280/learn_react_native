


//! MATERI COMPONENT STACK AND SLOT DI EXPO ROUTER

//!. 1. APA ITU STACK
/*
    * STACK adalah sebuah komponen navigasi  yang digunakan untuk menentukan dan mengatur halaman-halaman route dalam aplikasi dengan gaya navigasi bertumpuk
    TODO: JADI HALAMAN PADA ROUTE BARUNYA AKAN MENINMPA HALAMAN ROUTE SEBELUMNNYA  
*/


//! 2. CARA MENGGUNAKAN STACK
/*
    TODO: BIASANYA STACK DI GUNAKAN DI FILE LAYOUT.JS

    TODO: IMPORT DULU COMPINENT  Stacknya

    * 1. otomatis stack routing yg di buat oleh expo router
    /
        return (
            <Stack/> -> //todo: ini artinya expo router akan secara otomati membuat atau mendifinisikan halaman route sesuai dengan file yg tersidia di folder appnya
        )
    /

    * 2. manual definisi stack routing
    /
        return (
            <Stack>
                <Stack.Screen name="nama_file_route" options={{title:'judul halaman',...options}} />
                <Stack.Screen name="nama_file_route2" options={{title:'judul halaman',...options}} />
                <Stack.Screen name="nama_file_route3" options={{title:'judul halaman',...options}} />
            </Stack> -> //todo: ini kita secara manual mendefinisikan atau mendaftarkan halaman route sesuai dengan file yg tersedia di folder appnya
        ) 
        todo:note: jika kita tidak mendefinisikan atau mendaftarkan alamat routing stacknya padahal file nya ada di folder app atau sub folder maka file atau routing  tersebut tidak akan bisa di akses 
    /

*/


//! 3. APA ITU SLOT
/*
    * SLOT ADALAH COMPONENT PENAMPUNG (PLACEHOLDER) YG DIGUNAKAN UNTUK MENAMPILKAN CONTENT DARI CHILD ROUTE DI DALAM SEBUAH LAYOUT TERTENTU 

    TODO: NOTES: JADI HALAMAN ROUTE BARU TIDAK AKAN MENIMPA HALAMAN ROUTE SEBELUMNYA
*/