import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import uuid from 'react-native-uuid';
import { Ionicons } from '@expo/vector-icons';
import { addMember } from '../Redux/Slices/membersSlice';

function PlusButton() {

    const dispatch = useDispatch();
    /* const members = useSelector(state => state.value.payload.members) */

    let addMemberPrompt = () => {

        Alert.prompt(
            'Member Name',
            'Enter a name',
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Add",
                    onPress: name => dispatch(addMember({
                        name: name,
                        amount: 0,
                        id: uuid.v4()
                    }))
                }
              ],
            )
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => addMemberPrompt()}>
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