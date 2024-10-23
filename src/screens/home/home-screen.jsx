import { FlatList, Text, View } from "react-native";
import { styles } from "./home-screen.style";
import { doctors } from "../../constants/data";
import DoctorCard from "../../components/doctor-card/doctor-card";
import icon from "../../constants/icon";


function HomeScreen(){
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços médicos</Text>

        <FlatList data={doctors}
            keyExtractor={(doc) => doc.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <DoctorCard name={item.name}
                    icon={item.icon == "M" ? icon.male : icon.female}
                    specialty={item.specialty}/>
    }}
    />
    </View>
}

export default HomeScreen;        