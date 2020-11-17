import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
    console.log(Constants.manifest.extra.env);
    return (
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                <Main />
            </ApolloProvider>
        </NativeRouter>
    );
};

export default App;
