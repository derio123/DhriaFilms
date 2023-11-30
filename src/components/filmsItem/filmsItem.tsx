/* eslint-disable react/require-default-props */
import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image,
    View,
    TouchableOpacityProps,
} from 'react-native';

import styles from './styles';
import colors from '../../styles/colors';

interface PreviewItemProps extends TouchableOpacityProps {
    //sinopse: String;
    title: string;
    diretor: string;
    production: string;
    data: any;
}

const FilmsItem = ({
    //sinopse,
    title,
    diretor,
    production,
    data,
    ...rest
}: PreviewItemProps) => {
    return (
        <TouchableOpacity style={[styles.container]} {...rest}>
            {/* <View style={[styles.containerImagem]}>
                <Image style={styles.icon} source={{ uri: imagemUrl }} />
            </View> */}
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Filme: {title} </Text>
                <Text style={{ fontSize: 16, color: colors.green }}>Diretor:{diretor} </Text>
                <Text style={styles.textProduction}>Produtores: {production}</Text>
                <Text style={{ fontSize: 16, color: colors.purple }}>Lançamento: {data}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default FilmsItem;
