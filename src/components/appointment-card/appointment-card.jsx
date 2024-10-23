import { Text, View, Image } from "react-native";
import {styles} from "./appointment-card.style";
import icon from "../../constants/icon.js";
import Button from "../button/button.jsx";

function AppointmentCard(props) {
    return <View style={styles.appointment}>
        <Text style={styles.name}>
            {props.service} - {props.doctor}
        </Text>
        <Text style={styles.specialty}>{props.specialty}</Text>

        <View style={styles.container}>

            <View style={styles.containerBooking}>

                <View style={styles.booking}>
                    <Image style={styles.icon}
                         source={icon.calendar}/>
                    <Text style={styles.bookingDate}>15/10/2024</Text>
                </View>

                <View style={styles.booking}>
                    <Image style={styles.icon}
                    source={icon.clock}/>
                    <Text style={styles.bookingHour}>08:30h</Text>
                </View>

            </View>

            <View style={styles.containerButton}>
                <Button text="Cancelar Agendamento" theme="danger" />
            </View>

        </View>
    </View>
}

export default AppointmentCard;