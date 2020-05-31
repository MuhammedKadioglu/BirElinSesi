import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer ,DefaultTheme , DarkTheme} from '@react-navigation/native';
import { Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme } from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'column',marginTop: 40,marginLeft: 40,marginBottom:40}} >
                        <Avatar.Image 
                            source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}
                            size={150}
                        />  
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>YARDIM ELİ</Paragraph>
                            
                        </View>
                        
                    </View>
                </View>
                {/* Drawer Section */}
                <Drawer.Section>
                    <DrawerItem 
                        icon = { ()=> ( <Icon name="home-outline" style={{fontSize:4*vh,color:'grey',marginLeft:20}} />  ) } 
                        label="Ana Sayfa"
                        onPress={ ()=>{props.navigation.navigate('Home')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:4*vh,color:'grey',marginLeft:20}} />  ) } 
                        label="Profil"
                        onPress={ ()=>{props.navigation.navigate('Profile')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="wallet-outline" style={{fontSize:4*vh,color:'grey',marginLeft:20}} />  ) } 
                        label="Harita"
                        onPress={ ()=>{props.navigation.navigate('Map')} }
                    />
                     
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="account-check-outline" style={{fontSize:4*vh,color:'grey',marginLeft:20}} />  ) } 
                        label="Destek"
                        onPress={ ()=>{props.navigation.navigate('Support')} }
                    />
                </Drawer.Section>
                
                
            </DrawerContentScrollView>
            
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
    },
    title: {
      fontSize: 2*vh,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      marginLeft: 70,
      marginBottom: 20,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });