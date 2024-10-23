import { FlatList, Text, View, Image } from "react-native";
import { styles } from "./services-screen.style";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import ServiceCard from "../../components/services-card/service-card";


function ServicesScreen(){
    return <View style={styles.container}>

        <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>Filipe</Text>
            <Text style={styles.specialty}>Cardiologista</Text>
        </View>


        <FlatList data={doctors_services}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <ServiceCard description={item.description}
                    price={item.price}/>
    }} />
    </View>
}

export default ServicesScreen;        