import React from 'react'
import {Container} from "react-bootstrap";
import {PDFDownloadLink} from "@react-pdf/renderer";
import InvoicePdfExample from "./InvoicePdfExample";

class PdfExportContainer extends React.Component {

    render() {
        return (
            <Container className={"pdf-export"}>
                <h2>PDF Export</h2>
                <PDFDownloadLink
                    document={<InvoicePdfExample/>}
                    fileName="invoice.pdf"
                    style={{
                        textDecoration: "none",
                        padding: "10px",
                        color: "#4a4a4a",
                        backgroundColor: "#f2f2f2",
                        border: "1px solid #4a4a4a"
                    }}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download Pdf"
                    }
                </PDFDownloadLink>
            </Container>
        )
    }
}

export default PdfExportContainer