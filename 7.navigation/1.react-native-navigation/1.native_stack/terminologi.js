


//! materi Native Stack di pkg react native navigation


//! 1. apa itu Native Stack
/*
    Native Stack adalah sebuah pkg tambahan react native navigation untuk membuat router DENGAN GAYA STACK ATAU TUMPUKAN
*/
//TODO: JADI NANTIH HALAMAN BARU ROUTENYA AKAN MENIMPA HALAMAN SEBELUMNNYA


//! 2. cara menggunakan stack
/*
    * Install terlebih dahulu
    * npm install @react-navigation/native-stack
    * 
    * 
    * createNativeStackNavigator() sebuah fungsi untuk membuat instance object dari native stack
    * const Stack = createNativeStackNavigator()
    * 
    * useNavigation() = hook untuk mengarahkan user ke halaman lain
    ! BEBERAPA COMPONTENT YG DIGUNAKAN
    * 1. <Stack.Navigator>{children}</Stack.Navigator> = untuk mendefinisikan router
    * 2. <Stack.Screen {...props} /> = untk menentukan router ATAU MEMBUAT PATHNYA 
    * !
    * name = sebuah props untuk menentukan nama path route atau nama title 
    * component = sebuah props untuk menentukan component yg akan di tampilkan 
    * initialParams ({option}) = sebuah props untuk mengirimkan atau menentukan parameter ke sebuah halaman 
    * options = props untuk berintaksi dengan component stack seperti ngatur title set background dll 


    * Setup
        <NavigationContainer>
            <Stack.Screen name='home' component={HomePage} />
            <Stack.Screen name='about' component={AboutPage} />
        </NavigationContainer> 

*/

// !3. navigation
/*
    sebuah cara untuk mengarhakan user ke halaman lain
*/

//! cara menggunakan navigation di Stack
/*

    * cara bisa melalui props note: hanya bisa di pake oleh componentnya yg di panggil di props component pada <Stack.Screen>
    * nama propsnya 'navigation' navigation.navigate('nama_halaman_lain'.{option})
    * nama props route = itu untuk mengakses parameter
    * 
    TODO:NOTE : navigation.setParamns({key_params:value}) = untuk mengeset parameter ke halaman lain

    TODO:NOTE PROPS navigation di component yg di panggil di props component  Stack.Screnn itu berisi object untuk berinteraksi dengan navigasi routernya

    ! NAVIGATION BEETWEEN SCREEN
    * CARA UTNUK MEMINDAHKAN USER KE HALAMA LAIN
    TODO: ADA 2 CARA

    ! 1.
    * bisa pke props navigation' di component yg  di panggil di props 'component' pada <Stack.Screen>
    * navigation.method()
    * * ada beberapa 
    *  1. navigation.navigation('path',{...options}) = untuk mengarahkan user ke halaman lain note: option itu object dengan nama key dan value untuk dikirim ke halaman yg dituju
    * contoh
    * /
    *   navigation.navigate('detail',{
    *       id:'producid;
    *   }) -> ini artinya kita akan mengarahan user ke halaman detail dan mengirim data  id
    * /
    * 2. navigation.setParams({...option}) = method untuk mengatur data parameter

    !2. bisa menggunakan hook useNaviation()
    * methodnya hampir sama kaya props navigation

    */

