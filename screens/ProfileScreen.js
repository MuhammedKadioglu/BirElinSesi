import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text name='Kullanıcıtxt' style={styles.name}>Kullanıcı Adı</Text>
              <Text name='Biyotxt' style={styles.info}>Biyografi</Text>
              <Text name='Hakkındatxt' style={styles.description}>Kendi Hakkında Yazdıkları</Text>
              
              <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.props.navigation.navigate('ProfileDuzen')}  >
                <Text>Düzenle</Text>  
              </TouchableOpacity>              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:70
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
    
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "bold"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:30
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:40,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:30,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom:10,
    width:250,
    borderRadius:100,
    backgroundColor: "#00BFFF",
  },
});
 