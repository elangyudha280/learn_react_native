

// ! MATERI STYLING DI REACT NATIVE

//! 1. APA ITU STYLING 
/*
    STYLING ADALAH SEBUAH TEKNIK ATAU CARA UNTUK MEMBERIKAN STYLE KEPADA COMPONENT 
*/
// TODO: JADI CARA MEMBERIKANNYA DENGAN CARA MENGGUNAKAN ATTRIBUTE ATAU PROPS STYLE={{...FIELD}} dan api bernama stylesheet


// TODO: NOTE DI STYLING REACT NATIVE TIDAK SUPPORT STYLE INHERITANCE TAPI ADA BEBERAPA COMPNENT YG BISA SUPPORT CONTOHNYA  TEXT DI DALAM TEXT

//!2. cara menstyling component di react native
/*

    todo: ada 2 cara untuk memberikan style ke component

    * 1. inline style || berikan langsung ke props style={{...field}}
        * kita berikan langsung property cssnya ke props style dalam bentuk object
        * @contoh
            <View style={{
                backgroudColor:'red',
                fontSize:50,        
            }} > </View>
    
    * 2. menggunakan api stylesheet
        * STYLESHEET adalah sebuah fungsi yg digunakan untuk membuat class yg berisikan style css
        * cocok digunakan ketika kita ingin membuat class yg mengerjakan serangkai style css
        * ini lebih sering dipakai karena membuat code lebih mudah di baca
       
        * import dulu stylesheetnya StyleSheet
            const nama_variable = StyleSheet.create({
                nama_class1:{...propertyCss},
                ....anotherClass
            })

        * cara menggunakannya
            * jika hanya menggunakan  1 class
            * <Component style={nama_variable_stylesheet.nama_class} />
            * 
            * jika  menggunakan lebih dari 1 class
            * <Component style={[nama_variable_stylesheet.nama_class1,nama_variable_stylesheet.nama_class2,...]} />
    
    

*/



//! 4. SHADOW
/*
    TODO:SEBUAHC AR UNTUK MENAMPILKAN BANYANGAN
    TODO:NOTE: DI ANDROID SHADOW TIDAK DI SUPPORT JIKA INGIN DISUPPORT TAMBAHAKAN PROPERTY "elevation:value" supaya bisa di support


    * shadowColor (color) = untuk menentukan warna shadow
    * shadowRadius (int,float) = untuk menentukan keburaman shadow
    * shadowOpacity (0-1)= untuk menentukan transparansi shadow
    * shadowOffset (object) {..property}= untuk menentukan ukuran shadow

*/