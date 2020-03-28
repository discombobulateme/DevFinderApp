import React from "react"; 
import { View } from "react-native"; 
import { Webview } from "react-native-webview";

function Profile({ navigation }) {
    const githubUsername = navigation.getParam('github_username');
    
    return <Webview style={{flex: 1}} source={{uri: `https://github.com/${githubusername}`}}/>
}

export default Profile; 