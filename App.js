import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView, Platform, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={ require('./assets/Group17.png')} resizeMode='stretch' style={styles.container}>
        <View style={styles.heder}/>
        <Image source={ require('./assets/Menu.png')} style={{marginLeft:20, marginTop:55, position: 'absolute',}}/>
        <Text>Hello my name is Nuwan Wijeweera</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      
  },

  heder: {
  paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
  marginTop: 30,
  height: 60,
  width: '100%',
  backgroundColor: '#fff',
  },

});
