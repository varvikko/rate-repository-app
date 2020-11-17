import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Linking,
    TouchableOpacity
} from 'react-native';
import Text from './Text';
import theme from '../theme.json';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY, GET_REPOSITORIES } from '../graphql/queries';
import { useParams, useHistory } from 'react-router-native';

const styles = StyleSheet.create({
    tag: {
        backgroundColor: theme.colors.background.primary,
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
    },

    openButton: {
        backgroundColor: theme.colors.background.primary,
        padding: 8,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        borderRadius: 4,
        marginTop: 16
    }
});

const formatNumber = (number) => {
    return number >= 1000 ? `${(number / 1000).toFixed(1)}k` : number;
};

const RepositoryItem = (props) => {
    const history = useHistory();
    const [getRepository, { called, data }] = useLazyQuery(GET_REPOSITORY, {
        onCompleted: (data) => console.log(data)
    });
    const params = useParams();

    if (props.single && !called) {
        getRepository({ variables: { id: params.id } });
    }

    return props.single ? (
        data ? (
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image
                        source={{ uri: data.repository.ownerAvatarUrl }}
                        style={styles.image}
                    />

                    <View style={{ display: 'flex', flex: 1 }}>
                        <Text size={'heading'} testID='fullname'>
                            {data.repository.fullName}
                        </Text>
                        <Text
                            color={'secondary'}
                            style={styles.description}
                            testID='description'>
                            {data.repository.description}
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                            <Text style={styles.tag} testID='language'>
                                {data.repository.language}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='stargazers'>
                            {formatNumber(data.repository.stargazersCount)}
                        </Text>
                        <Text color='secondary'>Stars</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='forks'>
                            {formatNumber(data.repository.forksCount)}
                        </Text>
                        <Text color='secondary'>Forks</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='reviews'>
                            {formatNumber(data.repository.reviewCount)}
                        </Text>
                        <Text color='secondary'>Reviews</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='rating'>
                            {formatNumber(data.repository.ratingAverage)}
                        </Text>
                        <Text color='secondary'>Rating</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback
                    onPress={() => Linking.openURL(data.repository.url)}>
                    <Text style={styles.openButton}>Open</Text>
                </TouchableWithoutFeedback>
            </View>
        ) : (
            <Text>Loading</Text>
        )
    ) : (
        <TouchableOpacity onPress={() => history.push(`/${props.item.id}`)}>
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image
                        source={{ uri: props.item.ownerAvatarUrl }}
                        style={styles.image}
                    />

                    <View style={{ display: 'flex', flex: 1 }}>
                        <Text size={'heading'} testID='fullname'>
                            {props.item.fullName}
                        </Text>
                        <Text
                            color={'secondary'}
                            style={styles.description}
                            testID='description'>
                            {props.item.description}
                        </Text>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row'
                            }}>
                            <Text style={styles.tag} testID='language'>
                                {props.item.language}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='stargazers'>
                            {formatNumber(props.item.stargazersCount)}
                        </Text>
                        <Text color='secondary'>Stars</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='forks'>
                            {formatNumber(props.item.forksCount)}
                        </Text>
                        <Text color='secondary'>Forks</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='reviews'>
                            {formatNumber(props.item.reviewCount)}
                        </Text>
                        <Text color='secondary'>Reviews</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text
                            style={styles.rowCount}
                            size='heading'
                            testID='rating'>
                            {formatNumber(props.item.ratingAverage)}
                        </Text>
                        <Text color='secondary'>Rating</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RepositoryItem;
