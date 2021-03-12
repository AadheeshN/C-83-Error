import * as React from 'react';
import { View, KeyboardAvoidingView, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert, Modal, ScrollView } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';


export default class RequestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            bookName: '',
            reasonToRequest: '',
            userId: firebase.auth().currentUser.email
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7)
    }

    addRequest = (bookName, reasonToRequest) => {
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();
        db.collection('requested_books').add({
            user_id: userId,
            book_name: bookName,
            reason_to_request: reasonToRequest,
            request_id: randomRequestId
        })
        this.setState({bookName: '', reasonToRequest: ''})
        return Alert.alert('Book Requested Successfully')
        }

    render() {
        return(
            <View style = {{flex: 1}}>
                <MyHeader title = "Request Books" navigation = {this.props.navigation}/>
                <KeyboardAvoidingView style = {styles.keyBoardStyle}>
                    <TextInput 
                    placeholder = 'Enter Book Name' 
                    style = {styles.formTextInput} 
                    value = {this.state.bookName} 
                    onChangeText = {(text) => {this.setState({bookName: text})}}/>

                   <TextInput 
                    placeholder = 'Reason for Request' 
                    style = {[styles.formTextInput, {height: 300}]} 
                    value = {this.state.reasonToRequest} 
                    onChangeText = {(text) => {this.setState({reasonToRequest: text})}}
                    multiline
                    numberOfLines = {5}
                    />

                    <TouchableOpacity style = {styles.button} onPress = {() => {this.addRequest(this.state.bookName, this.state.reasonToRequest)}}>
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    keyBoardStyle : { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    },

    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    },

    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000",

    shadowOffset: { 
        width: 0, 
        height: 8, 
    },

    shadowOpacity: 
    0.44, 
    shadowRadius: 10.32, 
    elevation: 16, 
    marginTop:20 
}, 
} 
)