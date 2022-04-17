import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView, Platform, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={ require('./assets/Group17.png')} resizeMode='stretch' style={{flex:1,}}>
        <View style={styles.heder}/>
        <Image source={ require('./assets/Menu.png')} style={styles.menu}/>
        <Image source={ require('./assets/projectlogoMini.png')} style={styles.logomini}/>
        <Text style={styles.head} >Ayurveda Medi App </Text>
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
  menu: {
  height:20, 
  width:20, 
  resizeMode:'contain',
  marginLeft:'2%', 
  marginTop:55, 
  position: 'absolute',
  },
  logomini:{
  alignSelf:'flex-end', 
  height:50, 
  width:50, 
  resizeMode:'contain', 
  marginTop:35, 
  position: 'absolute', 
  marginRight:'5%',
  },
  head:{
    textAlign:'center',
    fontSize:20,
    marginTop:-40,
    // fontFamily:'Arial',
  },
});
