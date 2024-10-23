import { Text, View } from "react-native";
import { styles } from "./service-card.style";
import Button from "../../components/button/button";


function ServiceCard(props) {
    return <View style={styles.service}>
        <View style={styles.containerText}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>
                {
                    new Intl.NumberFormat("pt-BR" , {
                        style: "currency", currency: "BRL"
                    }).format(props.price)
                }
            </Text>
        </View>

        <View style={styles.containerButton}>
            <Button text="Agendar"/>
        </View>
    </View>
}

export default ServiceCard;