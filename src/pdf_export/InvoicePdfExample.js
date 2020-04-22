import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#ffffff"
    },
    section: {
        flexGrow: 1
    },
    text: {
        fontSize: 10
    }
});

const MyDocument = (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Hello World!</Text>
            </View>
            <View style={styles.section}>
                <Text>We're inside a PDF!</Text>
            </View>
        </Page>
    </Document>
);

class InvoicePdfExample extends React.Component {
    render() {
        return MyDocument
    }
}

export default InvoicePdfExample