import React, { useState, useEffect, } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import uniqolor from 'uniqolor';
import randomEmoji from '../Utils/randomEmoji';

function MemberCard({ name, amount, id}) {

    const navigation = useNavigation();

    let [isSelected, setSelected] = useState(false);
    let [emoji, setEmoji] = useState(undefined);

    let handleOnPress = () => {
        console.log('pressed!');
        navigation.navigate('EditAmount', {
            name: name,
            amount: amount,
            id: id,
        });
    }

    useEffect(() => {
        setEmoji(randomEmoji());
    }, [])

    return (
        <TouchableOpacity 
            style={[styles.container]}
            onPress={handleOnPress}
        >
            <View style={styles.innerContainer}>
                <View style={[styles.memberCircle, { backgroundColor: uniqolor(id).color}]}>
                    <Text style={styles.emoji}>{ emoji }</Text>
                </View>
                <Text style={styles.memberName}>{ name }</Text>
            </View>

            <View style={styles.innerContainer}>
                <Text style={styles.memberAmount}>$ { amount }</Text>
            </View>
            
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
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    memberCircle: {
        width: 50,
        aspectRatio: 10 / 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 25,
    },
    memberName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    memberAmount: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})