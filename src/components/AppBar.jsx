import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#41c6a7',
        display: 'flex',
        flexDirection: 'row'
    },

    tab: {
        color: '#fff',
        fontWeight: '600',
        margin: 16
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/' component={TouchableOpacity}>
                    <Text style={styles.tab}>Repositories</Text>
                </Link>
                <Link to='/signin' component={TouchableOpacity}>
                    <Text style={styles.tab}>Sign In</Text>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;
