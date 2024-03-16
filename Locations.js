import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Locations = ({ navigation }) => {
  const goToSecondScreen = () => {
    navigation.navigate('analytics');
  };

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text>Locations</Text>

      {/* Navigation bar view */}
      <View style={styles.bottomBar}>

      <Icon name="map-marker" size={45} color="red" style={styles.icon} />
       <TouchableOpacity onPress={goToHomeScreen}>
        <Icon name="home" size={45} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSecondScreen}>
          <Icon name="line-chart" size={45} color="white" style={styles.icon} />
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
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 20, // Adjust the spacing as needed
  },
});

export default Locations;
