
let btn = document.getElementById("btn")

btn.addEventListener("click", read);

function read(){
    
}


const fs = require('fs');
const XLSX = require('xlsx');

// Read the content of the text file
const filePath = '/Desktop/baba proje/barcodes.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  console.log(data)
  /* // Process the data and create an Excel workbook
  const workbook = XLSX.utils.book_new();
  const sheetName = 'Sheet 1';
  const worksheetData = XLSX.utils.json_to_sheet([{ TextData: data }]);
  XLSX.utils.book_append_sheet(workbook, worksheetData, sheetName);

  // Save the Excel file
  const excelFilePath = 'output.xlsx';
  XLSX.writeFile(workbook, excelFilePath);

  console.log('Excel file created successfully:', excelFilePath); */
});
