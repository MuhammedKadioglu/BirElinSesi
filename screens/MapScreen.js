import React, { Component } from 'react';
import { View, Text,Button,StyleSheet ,Dimensions} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';




import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';


const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;


const MapScreen = ({navigation})=>{
    return(
  <>
    <MapView
      style={{height:'100%'}}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude:36.552506,
        longitude:31.998049,
        latitudeDelta: 0.09,
        longitudeDelta:0.035,
      }}>  

      <Marker coordinate = {{latitude:36.552506,longitude:31.998049}}/>
  
    </MapView>

     <ActionButton buttonColor="rgba(231,76,60,1)">
     <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
       <Icon name="md-create" style={styles.actionButtonIcon} />
     </ActionButton.Item>
     <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
       <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
     </ActionButton.Item>
     <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
       <Icon name="md-done-all" style={styles.actionButtonIcon} />
     </ActionButton.Item>
   </ActionButton>

   
   </>
    );
  }

  const styles = StyleSheet.create({
    actionButtonIcon: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });

export default MapScreen;