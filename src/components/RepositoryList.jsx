import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
    separator: {
        height: 10
    },

    container: {
        padding: 16
    }
});

const useRepositories = () => {
    const [repositories, setRepositories] = useState([]);
    const { data, error, loading } = useQuery(GET_REPOSITORIES);

    if (data && data.repositories && repositories.length == 0) {
        setRepositories(data.repositories);
    }

    return [repositories];
};

const ListItem = (props) => {
    return <RepositoryItem {...props} />;
};

export const RepositoryListContainer = ({ repositories }) => {
    const nodes =
        repositories && repositories.edges
            ? repositories.edges.map((edge) => edge.node)
            : [];

    return (
        <FlatList
            data={nodes}
            style={styles.container}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={ListItem}
        />
    );
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [repositories] = useRepositories();
    return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
