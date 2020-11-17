import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme.json';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED } from '../graphql/queries';
import AuthStorage from '../utils/authStorage';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.background.primary,
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
    const [signedIn, setSignedIn] = useState(null);
    useQuery(AUTHORIZED, {
        onCompleted: (data) => {
            if (data.authorizedUser) {
                setSignedIn(true);
            }
        }
    });

    const signOut = async () => {
        await AuthStorage.removeAccessToken();
        setSignedIn(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/' component={TouchableOpacity}>
                    <Text style={styles.tab}>Repositories</Text>
                </Link>
                {!signedIn ? (
                    <Link to='/signin' component={TouchableOpacity}>
                        <Text style={styles.tab}>Sign in</Text>
                    </Link>
                ) : (
                    <TouchableWithoutFeedback
                        component={TouchableOpacity}
                        onPress={signOut}>
                        <Text style={styles.tab}>Sign out</Text>
                    </TouchableWithoutFeedback>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;
