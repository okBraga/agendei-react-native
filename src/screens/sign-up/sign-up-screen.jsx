import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import {styles} from "./sign-up-screen.style.js";
import Button from "../../components/button/button.jsx"

function SignUpScreen() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo}/>
        </View>

        <View>
        <View style={styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input}/>
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input}
                secureTextEntry={true} />
            </View>
            <Button text="Acessar"/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta. </Text>
            <TouchableOpacity>
                <Text style={styles.footerLink}>Fazer Login.</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default SignUpScreen;