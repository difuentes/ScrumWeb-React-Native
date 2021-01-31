import React from 'react';
import {View} from 'react-native';
import {Container,Button,Text,H1,Input,Form ,Item,Toast} from 'native-base'
import {useNavigation} from '@react-navigation/native'

//styles
import globalStyles from '../styles/global';



const CrearCuenta = () => {

    //React Navigation
    const navegation = useNavigation(); 

    //View
    return ( 
        <Container style={globalStyles.contenedorLogin}> 
            <View style={globalStyles.contenidoCrearCuenta}>
                <H1 style={globalStyles.tituloWhite}>Crear Cuenta</H1>

                <Form>
                    <Item  style={globalStyles.item} >
                        <Input 
                            style={globalStyles.input}
                            placeholder="Nombre"
                        />
                    </Item>
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
 
export default CrearCuenta;