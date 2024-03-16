import React from 'react';
import { TouchableOpacity,View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  
  
  const goToSecondScreen = () => {
    navigation.navigate('analytics');
  };

  const goToLocations = () => {
    navigation.navigate('Locations');

  };

  return (
    <View style={styles.container}>
      <Button title="Go to Second Screen" onPress={goToSecondScreen} />
      
      {/* Navigation bar view */}
     
     
      <View style={styles.bottomBar}>
      <TouchableOpacity onPress = {goToLocations}>
      <Icon name="map-marker" size={45} color="white" style={styles.icon} />
      </TouchableOpacity>
      
      <Icon name="home" size={45} color="red" style={styles.icon}/>
     
      <TouchableOpacity onPress = {goToSecondScreen}>
      <Icon name="line-chart" size={45} color="white"style={styles.icon}/>
      </TouchableOpacity>


     
     
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

export default HomeScreen;
