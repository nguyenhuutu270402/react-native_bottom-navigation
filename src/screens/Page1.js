import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as NavigationBar from 'expo-navigation-bar';
const Page1 = () => {
    const fectData = async () => {
        NavigationBar.setBorderColorAsync("black");
        await NavigationBar.setBackgroundColorAsync('#000')
    }
    useEffect(() => {
        fectData();
    }, [])

    return (
        <View>
            <Text>Page1</Text>
        </View>
    )
}

export default Page1

const styles = StyleSheet.create({})