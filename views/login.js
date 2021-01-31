import React from 'react';
import {View} from 'react-native';
import {Container,Button,Text,H1,Input,Form ,Item,Toast} from 'native-base'
import {useNavigation} from '@react-navigation/native'

//styles
import globalStyles from '../styles/global';



const Login = () => {

    //React Navigation
    const navegation = useNavigation(); 

    //View
    return ( 
        <Container style={globalStyles.contenedorLogin}> 
            <View style={globalStyles.contenido}>
                <H1 style={globalStyles.titulo}>Scrum Web</H1>

                <Form>
                    <Item  style={globalStyles.item} >
                        <Input 
                            style={globalStyles.input}
                            placeholder="Email"
                        />
                    </Item>
                    <Item style={globalStyles.item}  >
                        <Input
                            style={globalStyles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                        />
                    </Item>
                </Form>

                <Button
                style={globalStyles.botonInicioSecion} 
                 block
                >
                    <Text style={globalStyles.textbotonInicioSecion}>Iniciar Sesión</Text>
                </Button>

                <Button
                    style={globalStyles.botonCrearCuenta} 
                    block
                    onPress={()=>navegation.navigate("CrearCuenta")}
                >
                    <Text 
                        style={globalStyles.btnTexto}
                       
                    >
                        Crear Cuenta
                    </Text>
                </Button>   

              
            </View>
        </Container>
     );
}
 
export default Login;