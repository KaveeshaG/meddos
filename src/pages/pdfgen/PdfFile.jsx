import { Page, Text, Document, StyleSheet, View, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from "react";
import { userRows } from "../../datatablesource";
import { useParams } from "react-router-dom";

import "./pdffile.scss";

const styles = StyleSheet.create({
  view: {
    height: '100vh',
    width: '100%',
  },
  body: {
    padding: '10mm',
    border: '1mm solid black',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    lineHeight: 1.5,
  },
  border: {
    border: '1px solid black',
    height: '98%',
    boxSizing: 'border-box',
    padding: '15mm',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    textDecoration: 'underline',
    marginBottom: 30,
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
    padding: '40px',
    marginTop: -10,
  },
  text: {
    // marginVertical: 10,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  superText: {
    fontSize: 8,
    verticalAlign: 'super',
  },
  comment: {
    marginVertical: 12,
    fontSize: 10,
    textAlign: 'justify',
    marginTop: 30,
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
  },
  sign: {
    fontSize: 10,
    marginTop: 60,
  },
  note: {
    fontSize: 8,
    fontFamily: 'Times-Roman',
  },
  bmi: {
    fontSize: 10,
    marginTop: 15,
    fontFamily: 'Times-Roman',
    textDecoration: 'underline',
  },
  comVal: {
    fontSize: 10,
    marginTop: 6,
    fontFamily: 'Times-Roman',
  },
  header: {
    fontSize: 8,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 20,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    margin: 0,
    // borderStyle: "solid", 
    // borderWidth: 1, 
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    fontWeight: "bold",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    fontFamily: 'Times-Roman',
  },

  tableVal: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    // marginTop: 30,
  },
  tableRowVal: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColVal: {
    width: "25%",
    margin: 0,
    // borderStyle: "solid", 
    // borderWidth: 1, 
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  tableCellVal: {
    margin: "auto",
    // marginTop: 5,
    fontSize: 10,
    fontFamily: 'Times-Roman',
  },
  tableCellValH: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    // marginLeft: -50,
    fontFamily: 'Times-Roman',
  },
  tableCellValRef: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    // marginLeft: 60,
    fontFamily: 'Times-Roman',
  },
  tableCellVal2: {
    margin: "auto",
    fontSize: 10,
    fontFamily: 'Times-Roman',
  },
  tableCellVal3: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    fontFamily: 'Times-Roman',
    // marginLeft: 30,
  }
});

const PdfFile = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams(); // Access the ID parameter from the URL
  console.log("StudentId: ", id); // Verify if the ID is correctly received
  useEffect(() => {
    console.log("userRows:", userRows);
    const foundStudent = userRows.find((row) => row.id === Number(id));
    console.log("Found student: ", foundStudent);
    setStudent(foundStudent);
  }, [id]);

  // ...

  if (!student) {
    return "Student not found";
  }

  return (
    <PDFViewer style={styles.view}>
      <Document>
        <Page size="A4" style={styles.body}>
          <View style={styles.border}>
            <Text style={styles.title} fixed>DEPARTMENT OF MEDICAL LABORATORY SCIENCE <br />FACULTY OF ALLIED HEALTH SCIENCES UNIVERSITY OF <br />SRI JAYEWARDENEPURA</Text>
            <Text style={styles.text}>
              Reference no : 0{student.id}
            </Text>
            <Text style={styles.text}>
              Sample date : {student.sampleCollectionDate}
            </Text>
            <Text style={styles.text}>
              Report date : {student.sampleProcessedDate}
            </Text>
            <Text style={styles.text}>
              Patient name : {student.name}
            </Text>
            <Text style={styles.text}>
              Age : {student.age}
            </Text>
            <Text style={styles.text}>
              Sex : Female
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>TEST</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>RESULT</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>FLAG</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>RFERENCE VALUE</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableVal}>
              <View style={styles.tableRowVal}>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellVal}>Haemoglobin</Text>
                </View>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellValH}>{student.hbValue.toFixed(2)} g/dl</Text>
                </View>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellVal3}> {student.hbValue < 12 ? "Low" :
                    student.hbValue >= 12 && student.hbValue <= 15.5 ? ' ' :
                      student.hbValue > 15.5 ? "High" : " "
                  } </Text>
                </View>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellValRef}>12 - 15.5</Text>
                </View>
              </View>
            </View>
            <View style={styles.tableVal}>
              <View style={styles.tableRowVal}>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellVal}>BMI</Text>
                </View>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellVal}>{student.bmi.toFixed(2)} Kg/m<Text style={styles.superText}>2</Text></Text>
                </View>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellVal2}>
                    {
                      student.bmi < 18.5 ? "Underweight" :
                        student.bmi >= 25 && student.bmi <= 29.9 ? "Overweight" :
                          student.bmi >= 30 ? "Obesity" : ""}
                  </Text>
                </View>
                <View style={styles.tableColVal}>
                  <Text style={styles.tableCellVal}> </Text>
                </View>
              </View>
            </View>
            <Text style={styles.comment}>Comment:-</Text>
            <Text style={styles.bmi}>BMI</Text>
            <Text style={styles.comVal}>Underweight &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &lt; 18.5 Kg/m       <Text style={styles.superText}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2</Text></Text>
            <Text style={styles.comVal}>Normal weight &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 18.5 - 22.9 Kg/m      <Text style={styles.superText}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2</Text></Text>
            <Text style={styles.comVal}>Risk to overweight &emsp; &emsp; &emsp; 23 - 24.9 Kg/m   <Text style={styles.superText}>&emsp;&emsp;&emsp;&emsp;2</Text></Text>
            <Text style={styles.comVal}>Overweight &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; 25 -29.9 Kg/m        <Text style={styles.superText}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2</Text></Text>
            <Text style={styles.comVal}>Obesity &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &nbsp; &lt; 30 Kg/m          <Text style={styles.superText}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2</Text></Text>

            <Text style={styles.sign}>................................................</Text>
            <Text style={styles.text}>Prof. P.P.Rasika Perera (MBBS, PhD),</Text>
            <Text style={styles.text}>Department of Biochemistry,</Text>
            <Text style={styles.text}>Faculty of Medical Sciences,</Text>
            <Text style={styles.text}>University of Sri Jayewardenepura.</Text>
            <Text style={styles.text}>Contact no - 0714402928.</Text>
            <Text style={styles.text}>For further information please contact the supervisor Prof. P.P.Rasika Perera, Faculty of Medical <br /> Sciences, University of Sri Jayewardenepura.</Text>
            <Text style={styles.note}>*This test was performed as a part of undergraduate research project conducted in the Faculty of Allied Health Sciences, University of Sri Jayewardenepura.</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer >
  )
}

export default PdfFile