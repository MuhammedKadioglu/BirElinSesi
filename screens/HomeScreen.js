import React from 'react'
import {ImageBackground,StyleSheet, View, Text ,Dimensions} from 'react-native'
import { Button } from 'react-native-elements';
import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/FontAwesome';


const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const HomeScreen = (props)=>{
    return(
    
      <View style={styles.container}>
    <Video
          source={require("./../assets/video1.mp4")}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      <View style={styles.Button}>
      <Button   onPress={ ()=>{props.navigation.navigate('Map')} }
      icon={ 
        <Icon
        name="arrow-right"
        size={25}
        color="white"
      />
          }     
         title="YARDIMA BAŞLA"
        />
      < Button onPress={ ()=>{props.navigation.navigate('Profile')} }
      icon={
        <Icon
       name="arrow-right"
       size={25}
       color="white"
      />
          }
  title="PROJE OLUŞTUR"
/>        
       </View>
    </View>
  );
  }
  const styles = StyleSheet.create({
    backgroundVideo: {
      
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      flexDirection: "column"
    },
    
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    Button:{
      flex:1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-around',
    }
  });

export default HomeScreen;
