import { Text, View } from "react-native";
import styles from "./styles";
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import React from "react";
import { useNavigation } from '@react-navigation/native';

interface INavigationHeaderProps {
    title: string;
}

const HeaderNavigation = (props: INavigationHeaderProps) => {
    const navigation = useNavigation();
    const { title } = props;

    return (
        <View style={styles.containerArrowBack}>
            <View style={styles.iconArrowBack}>
                <Ionicons
                    name="chevron-back-sharp"
                    size={35}
                    color="white"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> {title} </Text>
            </View>
        </View>
    );
};

export default HeaderNavigation;