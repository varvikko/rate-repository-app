import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { LOG_IN } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
    const [mutate, result] = useMutation(LOG_IN);
    const client = useApolloClient();

    const signIn = async({ username, password }) => {
        const data = await mutate({ variables: {username, password } });
        await AuthStorage.setAccessToken(data.data.authorize.accessToken);
        await client.resetStore();
        return data;
    };

    return [signIn, result];
};

export default useSignIn;
