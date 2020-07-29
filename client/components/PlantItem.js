import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const PlantItem = ({ id, name, type, light, water, air_purifying }) => {
  console.log(name);
  return (
    <SafeAreaView>
      <View styles={styles.plantcard_img}>
        <img
          style={{
            width: 250,
          }}
          src={require('../assets/' + id + '.jpg')}
          alt={name}
        />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{type}</Text>
      </View>
      <View>
        <View>
          <Text>
            {light === 'any' ? '*' : light === 'medium' ? '**' : '***'}
          </Text>
        </View>
        <View>
          <Text>
            {water === 'two weeks' ? '^' : water === 'weekly' ? '^^' : '^^^'}
          </Text>
        </View>
        <View>
          <Text>{!air_purifying ? '-' : '+'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  plantcard_img: {
    display: 'flex',
    flexDirection: 'vertical',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
  img: {
    width: 250,
  },
});

export default PlantItem;
