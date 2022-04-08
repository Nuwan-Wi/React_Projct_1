import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={ require('./assets/Group17.png')} resizeMode='stretch' style={styles.container}>
        <View style={styles.heder}></View>
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
  marginTop: 40,
  height: 60,
  width: 400,
  backgroundColor: '#fff',
  alignItems: 'center',  
  }
});
