import { View } from "react-native";
import styles from "./styles";
import HeaderNavigation from "../headerNavigator/HeaderNavigation";


export interface IHeaderFormProps {
    title?: string;
}

const HeaderTitle = ({ title }: IHeaderFormProps) => {
    return (
        <View style={[styles.containerPrincipal, { backgroundColor: '#575AC0' }]}>
            <HeaderNavigation title={title} />
        </View>

    );
};

export default HeaderTitle;