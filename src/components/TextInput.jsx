import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme.json';

const styles = StyleSheet.create({
    field: {
        padding: 16,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 4,
        backgroundColor: theme.colors.background.secondary
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, styles.field];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
