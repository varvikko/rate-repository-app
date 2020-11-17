import React from 'react';
import RepositoryList from './RepositoryList';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import { Switch, Route, Redirect } from 'react-router-native';
import theme from '../theme.json';
import SignIn from './SignIn';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background.secondary,
        flexGrow: 1,
        flexShrink: 1
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin' exact>
                    <SignIn />
                </Route>
                <Route path='/:id' exact>
                    <RepositoryItem single />
                </Route>
                <Redirect to='/jaredpalmer.formik' />
            </Switch>
        </View>
    );
};

export default Main;
