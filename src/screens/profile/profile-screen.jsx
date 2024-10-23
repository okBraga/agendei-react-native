import { Text, View } from "react-native";
import { styles } from "./profile-screen.style";


function ProfileScreen() {
    return <View style={styles.container}> 
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>Heber Stein Mazzuti</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>heber@teste.com</Text>
        </View>

    </View>
}

export default ProfileScreen;