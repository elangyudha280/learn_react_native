


//! materi Native Stack di pkg react native navigation


//! 1. apa itu Native Stack
/*
    Native Stack adalah sebuah pkg tambahan react native navigation untuk membuat router
*/


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
    * 2. <Stack.Screen {...props} /> = untk menentukan router
    * !
    * name = sebuah props untuk menentukan route atau nama title 
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

    * cara bisa melalui props
    * nama propsnya 'navigation' navigation.navigate('nama_halaman_lain'.{option})
    * 
    TODO:NOTE : navigation.setParamns({key_params:value}) = untuk mengeset parameter ke halaman lain

*/
