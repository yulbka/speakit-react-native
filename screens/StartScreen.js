import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/micro.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Check your pronunciation</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Game')}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: '#78909c',
    textTransform: 'uppercase',
  },
  btn: {
    padding: 10,
    width: 250,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#ff8096', 
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  }
});

export default StartScreen;
