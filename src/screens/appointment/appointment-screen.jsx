import { FlatList, View } from "react-native";
import { styles } from "./appointment-screen.style";
import { appointments } from "../../constants/data";
import AppointmentCard from "../../components/appointment-card/appointment-card";


function AppointmentScreen(){
    return <View style={styles.container}>

        <FlatList data={appointments}
            keyExtractor={(appoint) => appoint.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <AppointmentCard service={item.service}
                    doctor={item.doctor}
                    specialty={item.specialty} />
            }} />
    </View>
}

export default AppointmentScreen;        