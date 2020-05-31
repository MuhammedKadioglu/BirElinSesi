import React, { Component } from 'react';
import { StyleSheet,TextInput,SafeAreaView,StatusBar,View,Text ,Button,Dimensions,} from 'react-native'
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Value } from 'react-native-reanimated';


const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;





onKullaniciAd = () => {
  
  alert('Sonraki Adıma Geçiliyor');
};
const ProfileDuzen = ({navigation})=>{
      
      return (
        
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <ProgressSteps>
            <ProgressStep onNext={this.onKullaniciAd} nextBtnText="Sonraki" label="Kullanıcı Adı">
              
              <View style={{alignItems:'center'}} > 
                <Text>Yeni Kullanıcı Adı Giriniz</Text>
              </View>
              <View style={{alignItems:'center'}} >
              <TextInput name='kullanıcıTXT'
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Buraya Giriniz"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                  
                />
                 
              </View>
            </ProgressStep>
            <ProgressStep  nextBtnText="Sonraki" previousBtnText="Önceki" label="Temel Bilgiler">
              <View style={{alignItems:'center'}} > 
                <Text>Temel Bilgilerinizi Giriniz</Text>
              </View>
              <View style={{alignItems:'center'}} >
                <TextInput 
                  style={styles.textArea }
                  underlineColorAndroid="transparent"
                  placeholder="Buraya Giriniz"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                />
              </View>
            </ProgressStep>
            <ProgressStep previousBtnText="Önceki" finishBtnText="Doğrula" label="Hakkında">
              <View style={{alignItems:'center'}} > 
                <Text>Bize Sizden Bahsedin</Text>
              </View>
              <View style={{alignItems:'center'}} >
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Buraya Giriniz"
                  placeholderTextColor="grey"
                  numberOfLines={10}
                  multiline={true}
                />
              </View>
              
            </ProgressStep>
          </ProgressSteps>
        </SafeAreaView>
      </>
    );
  }
  

export default ProfileDuzen;

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
  textAreaContainer: {
    borderColor: "#fff",
    borderWidth: 1,
    padding: 5
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
});
 