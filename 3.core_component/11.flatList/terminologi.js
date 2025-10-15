

//! MATERI LIST DAN FLATLIST DI REACT NATIVE


//! 1. APA ITU LIST
/*
    LIST ADALAH SEBUAH TEKNIK ATAU CARA DI REACT NATIVE UNUTK MENAMPILKAN BANYAK ELEMENT
*/ //TODO: JADI MISAL KITA PUNYA DATA ARRAY OF OBJECT KITA BISA LANGSUNG MEMASUKAN DATA TERSEBUT DI COMPONENT 

//TODO ADA DUA COMPONENT YG BISA DIGUNAKAN FlatList dan SectionList

// TODO:NOTE klau tidak menggunakan component FlatList atau SectionList untk menampilkan banyak element||data itu nanti akan di tampilkan semua datanya jadi tidak efektik untuk performance 

//TODO: TAPI KALO MENGGUNAKAN FlatList atau SectionList ITU nanti datanya akan di tampilkan beberapa terlebih dahulu 

//! 2. APA ITU FLATLIST
/*
    FlatList adalah sebuah component yang digunakan untuk menampilkan banyak elemnt sekaligus
*/

//! 2.1 CARA MENGGUNAKAN Flatlist
/*
    todoL: import terlebih dahulu componentnnya FlatList

     * <FlatList  {...props} />

    todo: ada banya props yg bisa digunakan bisa cek di dokumentasinya

    * ada beberapa yg biasanya digunakan

    * 1. data (array) = sebuah props untuk menentukan data yg ingin di tampilkan
    * 2. renderItem (callback({item,index})=>{return <Component>}) = sebuah method untuk menentukan component mana yg ingin di tampilkan
    * 3. horizontal (boolean) = sebuah property untuk menentukan scrolling elemennya apakah secara vertikal atau horizontal
    * 4. keyExtractor (callback({item,index}=>{return data unik untuk componennya}))= sebuah method untuk menentukan nilai unik untuk membedakan component yg akan di tampilkan
    * 5. ItemSeparatorComponent (component) = sebuah property untuk menentukan component pemisah antar items
    * 6. ListEmptyComponent (component)= sebuah property untuk menentukan component yg akan ditampilkan jika datanya kosong atau tidak ada 
    * 7. ListHeaderComponent (component) = sebuah property untuk mentukan bagian header atau atas dari flatlist
    * 8  LisFooterComponent (component) = sebuah property untuk menentukan bagian footer atau bawah componnent    
*/


//! 3. APA ITU SectionList
/*
    SectionList adalah sebuah component yg digunakan untuk menampilkan banyak element dan memiliki beberapa bagian didalamnnya
*///todo: jadi section list ini cocok digunakan ketika kita mempunya data array yg bersarang



//! 3.1 cara menggunakan SectionList
/*
    todo:import terlebih dahulu componennya SectionList

    * <SectionList {...props}/>

     todo: ada banya props yg bisa digunakan bisa cek di dokumentasinya

    * ada beberapa yg biasanya digunakan
    
    * 1. sections (array)= sebuah proeprty untuk menentukan data mana yg ingin di tampilkan 
    * 2. renderItem (callback({item:data nested array,index})=>{return <Component>}) = sebuah method untuk menentukan component mana yg ingin di tampilkan
    * 3. renderSectionHeader (callback(sections:data global array))= sebuah property yg digunakan untuk menapilkan component header di masing" items
    * 4. ItemSeparatorComponent (component) = sebuah property untuk menentukan component pemisah antar items
    * 4. SectionSeparatorComponent (component) = sebuah property untuk menentukan component pemisah antar section items
*/