import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({name, onRemove}: Props ) {
// export function Participant(props: props) { //Propriedades
  // ou export function Participant({name}) { // Forma desestruturada
    return(
        <View style={styles.container}>

        <Text style={styles.name}>{name}</Text>
        
        <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttomText}>-</Text>
        </TouchableOpacity>

      </View>
    )
}