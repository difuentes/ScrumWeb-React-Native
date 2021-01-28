import {StyleSheet} from 'react-native'


const globalStyles = StyleSheet.create({

    contenedorLogin:{
        backgroundColor:'#f3969a' 
    },
    contenido:{
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal:'3%',
        flex:1
    },
    titulo:{
        
        textAlign:'center',
        color: '#ffffff',
        fontSize : 35,
        fontWeight: 'bold',
        marginBottom: 20,
        
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
    },
    botonInicioSecion:{
        backgroundColor:'#78c2ad' ,
        marginBottom:20,
        marginTop:20,
        marginHorizontal:'3%',
        fontWeight: 'bold',
    },
    textbotonInicioSecion:{
        fontWeight: 'bold',
        textTransform:'uppercase',
    }
    

    




});


export default globalStyles ;