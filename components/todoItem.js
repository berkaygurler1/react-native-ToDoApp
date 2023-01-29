import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Icon} from '@rneui/themed';

export default function TodoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)} >
            <View style={styles.item}>
                <Icon name='delete' size={25} color='#333' />
            <Text style={styles.text} >{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    item: {
        padding: 16, 
        marginTop: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent:'flex-start',
        

    },
    text: {
        color: 'black',
        fontWeight: '60',
        fontSize: 20,
        marginLeft: 12,
        
        

    }
});