import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {Icon} from '@rneui/themed';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.head}>
      <Image style={styles.logo} source={require('./images/beg.png')} />
      </TouchableOpacity>

      

      <Text style={styles.title}>Yapılacaklar Listem</Text>
      <TouchableOpacity>
        <Icon style={styles.cizgi} name="keyboard-control" color={'white'}  />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5e65fb',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,

  },
  cizgi: {
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 10,

  },
  title: {
    fontSize: 21,
    fontWeight: '800',
    color: 'white',
  },
});
