import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: { padding: 20 },
  section: { marginBottom: 10 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 12 },
});

// Faculty CV Component
const FacultyCV = ({ faculty }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Faculty CV</Text>
        <Text style={styles.text}>Name: {faculty.name}</Text>
        <Text style={styles.text}>Department: {faculty.department}</Text>
        <Text style={styles.text}>Email: {faculty.email}</Text>
        <Text style={styles.text}>Experience: {faculty.experience} years</Text>
        <Text style={styles.text}>Research Interests: {faculty.research}</Text>
      </View>
    </Page>
  </Document>
);

// Button to Download PDF
const FacultyCVDownload = ({ faculty }) => (
  <div>
    <PDFDownloadLink document={<FacultyCV faculty={faculty} />} fileName={`${faculty.name}_CV.pdf`}>
      {({ loading }) => (loading ? "Generating PDF..." : "Download CV")}
    </PDFDownloadLink>
  </div>
);

export default FacultyCVDownload;
