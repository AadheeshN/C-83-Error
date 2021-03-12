import React ,{Component} from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Card,Icon, ListItem } from 'react-native-elements'
import MyHeader from '../components/MyHeader.js'
import firebase from 'firebase';
import db from '../config.js'

export default class NotificationsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    getAllNotifications = () => {
        db.collection('all_notifications').where('book_name', '==', this.state.userId).onSnapshot(snapshot => {
            var allNotifications = snapshot.docs.map(document => document.data())
            this.setState({
              allDonations: allDonations,          
            })
          })
      }
    
      keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>(
    <ListItem
      key={i}
      title={item.book_name}
      subtitle={"Notification :" }
      leftElement={<Icon name="Notification" type="font-awesome" color ='#696969'/>}
      titleStyle={{ color: 'black', fontWeight: 'bold' }}
      bottomDivider
    />
  )

    render() {
        return (
            <View style = {{flex : 1}}>
                <MyHeader navigation={this.props.navigation} title="Notifications"/>
                <Text>Noti Screen</Text>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.allNotifications}
                renderItem={this.renderItem}
              />
            </View>
        )
    }
}