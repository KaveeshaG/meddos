export const userColumns = [
  { field: "id", headerName: "SampleNo", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "phoneNo",
    headerName: "Phone Number",
    width: 100,
  },
  {
    field: "sampleCollectionDate",
    headerName: "Samp COll.Date",
    width: 100,
  },
  {
    field: "sampleProcessedDate",
    headerName: "Repo.Date",
    width: 100,
  },
  {
    field: "bmi",
    headerName: "BMI",
    width: 100,
  },
  {
    field: "hbValue",
    headerName: "hbValue.",
    width: 100,
  },

];

export const fetchData = async () => {
  try {
    const response = await fetch('https://meddos-api.onrender.com/api/v1/students');
    const data = await response.json();
    const transformedData = data.map((item) => ({
      id: item.sampleNumber,
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      name: item.name,
      age: item.age,
      phoneNo: item.phoneNo,
      sampleCollectionDate: item.sampleCollectionDate,
      sampleProcessedDate: item.sampleProcessedDate,
      bmi: item.bmi,
      hbValue: item.hbValue,
    }));
    return transformedData;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};

// Update userRows using fetchData
export const userRows = await fetchData();


//temporary data
// export const userRows = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     name: "Wathsala",
//     age: 26,
//     sex: "Female",
//     sampleDate: 20062023,
//     reportDate: 20062023,
//     ethnicity: "Sinhala",
//     academicYear: 3,
//     faculty: "AHS",
//     weight: 58.7,
//     height_m: 1.6,
//     height_cm: 160,
//     waistCircumference: 84,
//     hipCircumference: 95,
//     midUpperArmCircumference: 26,
//     midThighCircumference: 49,
//     triceps: 23,
//     subscapular: 20,
//     suprailiac: 22,
//     midThigh: 26,
//     bmi: 22.9296875,
//     waistThighRatio: 1.714285714,
//     waistHipRatio: 0.8842105263,
//     weightHeightRatio: 36.6875,
//     byBioelectricalImpedanceAnalyzer: 31.2,
//     bySkinfoldThickness: 31.24303231,
//     visceralFatIndex: 5,
//     haemoglobinConcentration: 9.2,
//   },
//   {
//     sampleNumber: 2,
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     name: "Bakani",
//     age: 26,
//     sex: "Female",
//     sampleDate: 20062023,
//     reportDate: 20062023,
//     ethnicity: "Sinhala",
//     academicYear: 3,
//     faculty: "AHS",
//     weight: 58.7,
//     height_m: 1.6,
//     height_cm: 160,
//     waistCircumference: 84,
//     hipCircumference: 95,
//     midUpperArmCircumference: 26,
//     midThighCircumference: 49,
//     triceps: 23,
//     subscapular: 20,
//     suprailiac: 22,
//     midThigh: 26,
//     bmi: 22.9296875,
//     waistThighRatio: 1.714285714,
//     waistHipRatio: 0.8842105263,
//     weightHeightRatio: 36.6875,
//     byBioelectricalImpedanceAnalyzer: 31.2,
//     bySkinfoldThickness: 31.24303231,
//     visceralFatIndex: 5,
//     haemoglobinConcentration: 9.2,
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     name: "Pukini",
//     age: 26,
//     sex: "Female",
//     sampleDate: 20062023,
//     reportDate: 20062023,
//     ethnicity: "Sinhala",
//     academicYear: 3,
//     faculty: "AHS",
//     weight: 58.7,
//     height_m: 1.6,
//     height_cm: 160,
//     waistCircumference: 84,
//     hipCircumference: 95,
//     midUpperArmCircumference: 26,
//     midThighCircumference: 49,
//     triceps: 23,
//     subscapular: 20,
//     suprailiac: 22,
//     midThigh: 26,
//     bmi: 22.9296875,
//     waistThighRatio: 1.714285714,
//     waistHipRatio: 0.8842105263,
//     weightHeightRatio: 36.6875,
//     byBioelectricalImpedanceAnalyzer: 31.2,
//     bySkinfoldThickness: 31.24303231,
//     visceralFatIndex: 5,
//     haemoglobinConcentration: 9.2,
//   },
//   {
//     id: 4,
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     name: "Hashini",
//     age: 26,
//     sex: "Female",
//     sampleDate: 20062023,
//     reportDate: 20062023,
//     ethnicity: "Sinhala",
//     academicYear: 3,
//     faculty: "AHS",
//     weight: 58.7,
//     height_m: 1.6,
//     height_cm: 160,
//     waistCircumference: 84,
//     hipCircumference: 95,
//     midUpperArmCircumference: 26,
//     midThighCircumference: 49,
//     triceps: 23,
//     subscapular: 20,
//     suprailiac: 22,
//     midThigh: 26,
//     bmi: 22.9296875,
//     waistThighRatio: 1.714285714,
//     waistHipRatio: 0.8842105263,
//     weightHeightRatio: 36.6875,
//     byBioelectricalImpedanceAnalyzer: 31.2,
//     bySkinfoldThickness: 31.24303231,
//     visceralFatIndex: 5,
//     haemoglobinConcentration: 9.2,
//   },
// ];