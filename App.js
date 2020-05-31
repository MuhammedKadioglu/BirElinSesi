/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text,Button,StyleSheet,SafeAreaView,ScrollView,Dimensions,Image,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer ,DefaultTheme , DarkTheme} from '@react-navigation/native';
import { Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme } from 'react-native-paper';

import MapScreen     from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SupportScreen from './screens/SupportScreen';
import SideMenu from './screens/SideMenu';
import ProfileDuzen from './screens/ProfileDuzen';


const ProfileDuzenstack = createStackNavigator();
const Mapstack =  createStackNavigator();
const Profilestack = createStackNavigator();
const HomeStack = createStackNavigator();
const SupportStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen =({navigation}) => (
  <HomeStack.Navigator ScreenOptions={{
    
  }}>
    <HomeStack.Screen name = "Home" style= "center" component = {HomeScreen} options ={{
      title:'Ana Sayfa',
      
      headerLeft:()=>
      <TouchableOpacity style={styles.ImageIconStyle} activeOpacity={0.2}onPress={() => navigation.openDrawer()}>
 
         <Image 
          source={require('./assets/drawer.png')} 
          style={styles.ImageIconStyle} 
          /> 
       </TouchableOpacity>
       
    }}/>
  </HomeStack.Navigator>
);



const MapstackScreen =({navigation}) => (
  <Mapstack.Navigator ScreenOptions={{
    headerStyle:{
      backgroundColor: '#009337',
      
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <Mapstack.Screen name = "MAP" component = {MapScreen} options ={{
          title:'Harita',
          headerLeft:()=>
          <TouchableOpacity style={styles.ImageIconStyle} activeOpacity={0.5}onPress={() => navigation.openDrawer()}>
     
             <Image 
              source={require('./assets/drawer.png')} 
              style={styles.ImageIconStyle} 
              /> 
           </TouchableOpacity>
    }}/> 
  </Mapstack.Navigator>
);

const ProfileDuzenstackScreen = ({navigation}) => (
<ProfileDuzenstack.Navigator ScreenOptions={{
    headerStyle:{
      backgroundColor: '#009337',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
<ProfileDuzenstack.Screen name = "ProfileDuzen" component = {ProfileDuzen} options ={{
         
          title:'Düzenle',
          headerLeft:()=>
         
          <TouchableOpacity style={styles.ImageIconStyle} activeOpacity={0.5}onPress={() => navigation.openDrawer()}>
     
             <Image 
              source={require('./assets/drawer.png')} 
              style={styles.ImageIconStyle} 
              /> 
           </TouchableOpacity>
    }}/> 
  </ProfileDuzenstack.Navigator>

);

const ProfilestackScreen =({navigation}) => (
  <Profilestack.Navigator ScreenOptions={{
    headerStyle:{
      backgroundColor: '#009337',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <Profilestack.Screen name = "Profile" component = {ProfileScreen} options ={{
         title: 'Profil',
          
          headerLeft:()=>
         
          <TouchableOpacity style={styles.ImageIconStyle} activeOpacity={0.5}onPress={() => navigation.openDrawer()}>
     
             <Image 
              source={require('./assets/drawer.png')} 
              style={styles.ImageIconStyle} 
              /> 
           </TouchableOpacity>
    }}/> 
  </Profilestack.Navigator>
);

const SupportStackscreen=({navigation}) => (
  <SupportStack.Navigator ScreenOptions={{
    headerStyle:{
      backgroundColor: '#009337',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <SupportStack.Screen name = "Support" component = {SupportScreen} options ={{
         title: 'Destek',
          
          headerLeft:()=>
         
          <TouchableOpacity style={styles.ImageIconStyle} activeOpacity={0.5}onPress={() => navigation.openDrawer()}>
     
             <Image 
              source={require('./assets/drawer.png')} 
              style={styles.ImageIconStyle} 
              /> 
           </TouchableOpacity>
    }}/>    
  </SupportStack.Navigator>
);



const App = ()=>{
  return(
  <PaperProvider theme={PaperDefaultTheme}>
  <NavigationContainer theme={DefaultTheme} >
   
       <Drawer.Navigator drawerContent={ props => <SideMenu {...props} /> }>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Support" component={SupportStackscreen}/>
        <Drawer.Screen name="Map" component={MapstackScreen} />
        <Drawer.Screen name="Profile" component={ProfilestackScreen} />
        <Drawer.Screen name="ProfileDuzen" component={ProfileDuzenstackScreen} />
      </Drawer.Navigator> 
  </NavigationContainer>
  </PaperProvider>
  );
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  
  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5 ,
    margin: 5,
 
 },
 
 FacebookStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#485a96',
   borderWidth: .5,
   borderColor: '#fff',
   height: 40,
   borderRadius: 5 ,
   margin: 5,
 
 },
 
 ImageIconStyle: {
    padding:2,
    height: 40,
    width: 40,
    marginLeft: 4,
    paddingLeft: 4,
    
 
 },
 
 TextStyle :{
 
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
   
 },
 
 SeparatorLine :{
 
 backgroundColor : '#fff',
 width: 1,
 height: 40
 
 }
 
 });

export default App;
