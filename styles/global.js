import {StyleSheet} from 'react-native'

/*

    1   D8DDEF   
    2   AOA4B8
    3   7293AO
    4   45B69C
    5   21D19F

*/


const globalStyles = StyleSheet.create({

    contenedorLogin:{
        backgroundColor:'#21D19F' 
    },
    contenido:{
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal:'3%',
        flex:1,
    },
    contenidoCrearCuenta:{
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal:'4%',
        flex:1,
        marginTop: -80
    },
    titulo:{
        
        textAlign:'center',
        color: '#D8DDEF',
        fontSize : 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform:'uppercase',
        
    }, 
    tituloWhite:{
        textAlign:'center',
        color: '#fff',
        fontSize : 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform:'uppercase',
        
    }, 

    btnCrearCuenta:{
        textAlign:'center',
    },
    item:{
        marginBottom: 20,
    },
    input:{
        backgroundColor:'#ffffff' ,
        color: '#D6DBDF',
        borderBottomColor: 'black'

    },
    btnTexto:{
        textTransform:'uppercase',
        textAlign:'center',
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop:10
    },
    botonInicioSecion:{
        backgroundColor:'#f3969a' ,
        marginBottom:20,
        marginTop:20,
        marginHorizontal:'3%',
        fontWeight: 'bold',
    },
    botonCrearCuenta:{
        backgroundColor:'#45B69C' ,
        marginBottom:20,
        marginTop:0,
        marginHorizontal:'3%',
        fontWeight: 'bold',
    },
    textbotonInicioSecion:{
        fontWeight: 'bold',
        textTransform:'uppercase',
        
    }
    
});


export default globalStyles ;