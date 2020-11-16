import React from 'react';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

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
        backgroundColor: '#41c6a7',
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

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={() => console.log('submit')}
                validationSchema={schema}>
                {({ handleSubmit }) => (
                    <>
                        <FormikTextInput
                            name='username'
                            placeholder='Username'
                            style={styles.field}
                        />
                        <FormikTextInput
                            name='password'
                            placeholder='Password'
                            style={styles.field}
                            secureTextEntry
                        />
                        <TouchableWithoutFeedback onPress={handleSubmit}>
                            <Text style={styles.signInButton}>Sign In</Text>
                        </TouchableWithoutFeedback>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default SignIn;
