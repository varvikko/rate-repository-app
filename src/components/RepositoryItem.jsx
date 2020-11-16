import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tag: {
        backgroundColor: '#0067d4',
        color: '#fff',
        padding: 4,
        borderRadius: 4,
        fontSize: 12
    },

    image: {
        width: 64,
        height: 64,
        borderRadius: 4,
        marginRight: 16
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    description: {
        marginTop: 8,
        marginBottom: 8
    },

    container: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc'
    },

    row: {
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    rowCount: {
        marginBottom: 8
    },

    rowItem: {
        display: 'flex',
        alignItems: 'center'
    }
});

const formatNumber = number => {
    return number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number;
};

const RepositoryItem = (props) => {
    const {
        fullName,
        description,
        language,
        stargazersCount,
        forksCount,
        reviewCount,
        ratingAverage,
        ownerAvatarUrl
    } = props.item;

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />

                <View style={{ display: 'flex', flex: 1 }}>
                    <Text size={'heading'}>{fullName}</Text>
                    <Text color={'secondary'} style={styles.description}>{description}</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                        <Text style={styles.tag}>{language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.rowItem}>
                    <Text style={styles.rowCount} size='heading'>{formatNumber(stargazersCount)}</Text>
                    <Text color='secondary'>Stars</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowCount} size='heading'>{formatNumber(forksCount)}</Text>
                    <Text color='secondary'>Forks</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowCount} size='heading'>{formatNumber(reviewCount)}</Text>
                    <Text color='secondary'>Reviews</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowCount} size='heading'>{formatNumber(ratingAverage)}</Text>
                    <Text color='secondary'>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
