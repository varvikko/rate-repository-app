import React from 'react';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme.json';
import useSignIn from '../hooks/useSignin';
import AuthStorage from '../utils/authStorage';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexGrow: 1,
        padding: 16
    },

    field: {
        marginBottom: 8
    },

    signInButton: {
        backgroundColor: theme.colors.background.primary,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 4
    }
});

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
});

export const SignInContainer = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={onSubmit}
                validationSchema={schema}>
                {({ handleSubmit }) => (
                    <>
                        <FormikTextInput
                            name='username'
                            placeholder='Username'
                            style={styles.field}
                            testID='username'
                        />
                        <FormikTextInput
                            name='password'
                            placeholder='Password'
                            style={styles.field}
                            secureTextEntry
                            testID='password'
                        />
                        <TouchableWithoutFeedback onPress={handleSubmit} testID='submit'>
                            <Text style={styles.signInButton}>Sign In</Text>
                        </TouchableWithoutFeedback>
                    </>
                )}
            </Formik>
        </View>
    );
};

const SignIn = () => {
    const [signIn, result] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
        } catch (e) {
            console.log(e);
        }
    };

    return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
