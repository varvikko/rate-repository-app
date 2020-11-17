import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
    static namespace = 'auth';

    static async getAccessToken() {
        const token = await AsyncStorage.getItem(`${this.namespace}:access_token`);
        return token || null;
    }

    static async setAccessToken(accessToken) {
        await AsyncStorage.setItem(`${this.namespace}:access_token`, accessToken);
    }

    static async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:access_token`);
    }
}

export default AuthStorage;
