import React from 'react';
import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme.json';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.text.primary,
        fontSize: theme.fontSizes.normal,
        fontFamily: (Platform.OS === 'android' ? theme.fonts.androidFont : theme.fonts.iosFont) || theme.fonts.fallbackFont
    },

    textPrimary: {
        color: theme.colors.text.primary
    },

    textSecondary: {
        color: theme.colors.text.secondary
    },

    textHeading: {
        fontSize: theme.fontSizes.heading
    }
});

const Text = ({ color, size, style, ...props }) => {
    const textStyles = [
        styles.text,
        color === 'secondary' && styles.textSecondary,
        size === 'heading' && styles.textHeading,
        style
    ];

    return <NativeText style={textStyles} {...props} />;
};

export default Text;
