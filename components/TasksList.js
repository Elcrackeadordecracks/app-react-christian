import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, RefreshControl, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const CARD_SIZE = 150;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    card: {
        width: CARD_SIZE,
        height: CARD_SIZE,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: "center",
    },
    cardImage: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: "center",
    },
    cardDescription: {
        fontSize: 10,
        marginBottom: 10,
        textAlign: "center",
    },
    viewButton: {
        backgroundColor: "#3498db",
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
    },
});

const TasksList = () => {
    const [data, setData] = useState([{
            id: 1,
            image: "https://forbes.es/wp-content/uploads/2022/11/ciberseguridad.jpg",
            title: "Título 1",
            description: "Descripción 1",
        },
        {
            id: 2,
            image: "URL de la segunda imagen",
            title: "Título 2",
            description: "Descripción 2",
        },
        {
            id: 3,
            image: "URL de la tercera imagen",
            title: "Título 3",
            description: "Descripción 3",
        },
        {
            id: 4,
            image: "URL de la cuarta imagen",
            title: "Título 4",
            description: "Descripción 4",
        },
        {
            id: 5,
            image: "URL de la quinta imagen",
            title: "Título 5",
            description: "Descripción 5",
        },
        {
            id: 6,
            image: "URL de la sexta imagen",
            title: "Título 6",
            description: "Descripción 6",
        },
    ]);

    const [refreshing, setRefreshing] = useState(false);
    const isFocused = useIsFocused();

    const onRefresh = () => {
        setRefreshing(true);
        // Lógica para cargar nuevamente los datos si es necesario
        setRefreshing(false);
    };

    useEffect(() => {
        // Lógica para cargar los datos iniciales si es necesario
    }, [isFocused]);

    const navigateToTaskForm = () => {
        navigation.navigate("TaskFormScreen");
    };

    const renderItem = ({ item }) => ( <
        View style = { styles.card } >
        <
        Image source = {
            { uri: item.image }
        }
        style = { styles.cardImage }
        /> <
        Text style = { styles.cardTitle } > { item.title } < /Text> <
        Text style = { styles.cardDescription } > { item.description } < /Text> <
        TouchableOpacity style = { styles.viewButton }
        onPress = {
            () => navigation.navigate("TaskFormScreen") } >
        <
        Text style = { styles.buttonText } > View < /Text> < /
        TouchableOpacity > <
        /View>
    );

    return ( <
        SafeAreaView style = {
            { flex: 1 }
        } >
        <
        FlatList data = { data }
        renderItem = { renderItem }
        keyExtractor = {
            (item) => item.id.toString()
        }
        refreshControl = { <
            RefreshControl
            refreshing = { refreshing }
            onRefresh = { onRefresh }
            colors = {
                ["#78e08f"]
            }
            progressBackgroundColor = "#0a3d62" /
            >
        }
        contentContainerStyle = { styles.container }
        /> < /
        SafeAreaView >
    );
};

export default TasksList;