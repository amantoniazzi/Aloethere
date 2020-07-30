import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlantItem = ({ id, name, type, light, water, air_purifying }) => {
  console.log(name);
  return (
    <SafeAreaView>
      {/* <View>
        <Image source={require('../assets/' + id + '.jpg')}
          style={{
            width: 250,
          }}
          alt={name}
        />
      </View> */}
      <View>
        <Text>{name}</Text>
        <Text>{type}</Text>
      </View>
      <View>
        <View>
          <Text>
            {light === 'any' ? (
              <Ionicons name="ios-cloudy" />
            ) : light === 'medium' ? (
              <Ionicons name="ios-partly-sunny" />
            ) : (
              <Ionicons name="ios-sunny" />
            )}
          </Text>
        </View>
        <View>
          <Text>
            {water === 'two weeks' ? (
              <Ionicons name="ios-water" />
            ) : water === 'weekly' ? (
              <Text>
                <Ionicons name="ios-water" />
                <Ionicons name="ios-water" />
              </Text>
            ) : (
              <Text>
                <Ionicons name="ios-water" />
                <Ionicons name="ios-water" />
                <Ionicons name="ios-water" />
              </Text>
            )}
          </Text>
        </View>
        <View>
          <Text>
            {air_purifying ? (
              <Ionicons name="ios-checkmark-circle-outline" />
            ) : null}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
// });

export default PlantItem;
