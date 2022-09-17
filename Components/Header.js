import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function Header() {

    let members = useSelector(state => state.members.value);

    let [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        let totalCount = 0;
        members.map(member => {
            totalCount = totalCount + member.amount
        });
        console.log('Total amount: ' + totalCount);
        setTotalAmount(totalCount);
    }, [members]);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Total</Text>
            <Text style={styles.headerText}>$ {totalAmount}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7978B8",
        width: "100%",
        aspectRatio: 10 / 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 30,
        fontWeight: '700'
    }
})