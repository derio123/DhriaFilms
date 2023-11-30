import { StyleSheet } from "react-native";
import colors from "./colors";
import fontSize from "./fontSize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: colors.black,
        fontSize: 16,
        fontFamily: 'helvetica, arial'
    },
    containerPrincipal: {
        // width:'100%',
        // height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '5%'
        // borderWidth: 1,
        // borderColor: 'black',
    },
    containerBorderScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        // borderWidth: 1,
        // borderColor: 'green',
    },
    containerScroll: {
        marginTop: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
    },
    containerInfos: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // paddingBottom:'35%',
        marginBottom: '15%',

        // marginRight: 20,
        // backgroundColor:'red',
        // borderWidth: 1,
        // borderColor: 'red',
    },

});

export default styles;