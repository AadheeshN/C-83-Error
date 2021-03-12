import * as React from 'react';
import { Header, Icon } from 'react-native-elements';
import { Text, View, StyleSheet } from 'react-native';

const MyHeader = props => {
    return (
        <Header 
        backgroundColor = '#eaf8fe'
        centerComponent = {{text: props.title, style: {color: '#90a5a9', fontSize: 20, fontWeight: 'bold'}}}
        />
    )
}

export default MyHeader;