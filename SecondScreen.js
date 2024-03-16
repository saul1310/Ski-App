import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SecondScreen = ({ navigation }) => {
  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const goToLocations = () => {
    navigation.navigate('Locations')

  };

  return (
    <View style={styles.container}>
      <Text> Analytics</Text>
      
      
        <View style={styles.bottomBar}>

        <TouchableOpacity onPress = {goToLocations}>
      <Icon name="map-marker" size={45} color="white" style={styles.icon} />
      </TouchableOpacity>
      
          <TouchableOpacity onPress = {goToHomeScreen}>
          <Icon name="home" size={45} color="white" style={styles.icon}/>
          </TouchableOpacity>

        <Icon name="line-chart" size={45} color="red"style={styles.icon}/>
        </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection:"row",
    
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20, // Adjust the spacing as needed
  },
});


export default SecondScreen;
