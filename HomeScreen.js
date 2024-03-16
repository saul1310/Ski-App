import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const goToSecondScreen = () => {
    navigation.navigate('Second');
  };

  return (
    <View style={styles.container}>
      <Button title="Go to Second Screen" onPress={goToSecondScreen} />
      <View style={styles.bottomBar}>
      <Icon name="home" size={45} color="white"/>
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
