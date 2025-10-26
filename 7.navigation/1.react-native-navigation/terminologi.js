

//! MATERI REACT NATIVE NAVIGATION

//! 1. APA ITU REACT NATIVE NAVIGATION
/*
<<<<<<< HEAD
    * REACT NATIVE NAVIGATION ADALAH SEBUAH PKG REACT NATIVE UNTUK MEMBUAT DAN MENGATUR ROUTER
=======
    REACT NATIVE NAVIGATION ADALAH SEBUAH PKG REACT NATIVE UNTUK MENGHUBUNKAN MENGATUR  DAN MEMBUAT ROUTER
>>>>>>> 50d25cdcb8698b0b22653c2f7e57a908fa85f76a
*/

//! 2. CARA MENGGUNAKAN REACT NATIVE NAVIGATION
/*
    * LEBIH LENGKAP BISA CEK DI DOKUMENTASI
    
    * install terlebih dahulu 
    * npm install @react-navigation/native
    * 
    todo: untuk projecr react native yg pke expo perlu nambah 2 pkg
    * npx expo install react-native-screens react-native-safe-area-context
*/

//! 3. component yg biasa digunakan di react native navigation
/*
    todo:note: lebih lengkap bisa cek di dokumentasinya

    ! 3.1 . <NavigationContainer>{children}</NavigationContainer> 
        * sebuah component untuk membungkus component supaya componennt di dalamnnya bisa menggunakan navigation 
    
    ! 3.2 <Link/>
        * component untuk mengarahkan user ke halaman lain
        *<Link  to={option}>{children}</Link>
            to ={
                screen:'router||title' -> untuk mengarahkan ke router mana,
                params{{params1:value ,...params}}
            }

    ! 3.3 useNavigate() => Sebuah fungsi hook yg dogunakan untuk mengarahkan user ke halaman lain
        * const navigate = useNavigate();


*/