import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';
import AuthStorage from './authStorage';

const createApolloClient = () => {
    return new ApolloClient({
        uri: Constants.manifest.extra.GRAPHQL_URI,
        request: async (operation) => {
            const token = await AuthStorage.getAccessToken();
            operation.setContext({
                headers: {
                    authorization: token ? `Bearer ${token}` : ''
                }
            });
        }
    });
};

export default createApolloClient;
