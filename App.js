import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View ,FlatList,ActivityIndicator} from 'react-native';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/*Put Your API here*/')
      .then((response) => response.json())
      .then((json) => setData(json.city))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.warn(data);

  if(isLoading){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{data.name}</Text>
        <Text>{data.id}</Text>
        <Text>{data.coord.lat}</Text>
        <Text>{data.coord.lon}</Text>
        <Text>Hello World</Text>
        <Image source={require('./assets/icon.png')} style={{ width: 305, height: 159 }} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
