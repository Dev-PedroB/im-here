import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
      },
      eventDate: {
        color: '#6B6B6B',
        fontSize: 16
      },
      input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        height:56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 20,
        marginRight: 12
      },
      buttomText:{
        color: '#FFF',
        fontSize: 24
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CE67',
        alignItems: 'center',
        justifyContent: 'center'
      },
      form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
      },
      listEmptyText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
      }
  });