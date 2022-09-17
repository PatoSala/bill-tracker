import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function MemberCard({ name, amount, id}) {

    const navigation = useNavigation();

    let [isSelected, setSelected] = useState(false);

    let handleOnPress = () => {
        console.log('pressed!');
        navigation.navigate('EditAmount', {
            name: name,
            amount: amount,
            id: id,
        });
    }

    return (
        <TouchableOpacity 
            style={[styles.container]}
            onPress={handleOnPress}
        >
            <Text style={styles.memberName}>{ name }</Text>
            <Text style={styles.memberAmount}>$ { amount }</Text>
        </TouchableOpacity>
    )
}

export default MemberCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        aspectRatio: 10 / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    memberName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    memberAmount: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})