import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


function PlusButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('NewMember')}>
            <Ionicons name="add" size={48} color="black" />
        </TouchableOpacity>
    )
}

export default PlusButton;

const styles = StyleSheet.create({
    container: {
        width: '20%',
        aspectRatio: 100 / 100,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})