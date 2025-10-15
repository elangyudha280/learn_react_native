

// ! MATERI DIMENSION DI REACT NATIVE


//! 1. APA ITU DIMENSION
/*
    DIMENSION ADALAH SEBUAH OBJECT UNTUK BERINTERAKSI DENGAN UKURAN LAYAR
*/
// TODO: DENGAN DIMENSION KITA BISA MEMBUAT TAMPILAN  YG RESPONSIVE

//! 3. CARA MENGGUNAKAN DIMENSION
/*
    TODO: IMPORT TERLEBIH DAHULU Dimension

    TODO: KETIKA KITA INGIN PERUBHANANNYA OTOTAMIS KETIKA BERGANTI UKURAN LAYAR ATUR FIELD orientation MENJADI default

    * ada banyak property dan method yg bisa di akses lebih lengkap bisa lihat di doc
    
    * Dimension.get('window||screen').width = s sebuah method dan property untuk mengetahui ukuran lebar layar device
    * Dimension.get('window||screen').heigth = sebuah method dan property untuk mengetahui ukuran tinggi layar device

        * window = unutk menentukan ukuran layar sesuai yg terlihat di aplikasi
        *note: screen = untuk menentukan ukuran layar sesuai device  usernya
    */

//! 4. APA ITU useWindowDimensions()
/*
    useWindowDimension() adalah sebuah fungsi atau hook yang digunkan untuk menggunakan object Dimension di dalam sebuah component
*///todo:jadi kita bisa mengetahui ukuran layar secara realtime gaperlu di reload


//! 3. CARA MENGGUNAKAN useWindowDimensions()
/*

    TODO: IMPORT TERLEBIH DAHULU FUNGSINYA
    TODO:GUNAKAN DI DALAM COMPONENT
    todo: NOTE: FUNGSI useWindowDimensions() mengembalikan object sehingga kita bisa langsung destructuring

    function Component(){
            let {width,height} = useWindowDimensions()

            return (
                <Text>{width}</text> -> ukuran panjang / lebar layar
                <Text>{height}</text> -> ukuran tinggi layar
            )
    }

*/

