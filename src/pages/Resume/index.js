// imported files/libraries
import React, { useState } from 'react';
import "./style.css"
import { Document, Page, pdfjs } from 'react-pdf';
import PDFFile from '../../assets/react-resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  // Helps to initialise value of the page that is to be rendered
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
   // Helps render the PDF filed page to be successful
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  // Download code for pdf file
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = PDFFile;
    link.download = 'resume.pdf';
    link.click();
  };
    // Part that renders onto the page
  return (
    <section className='resume'>
      <h1>Resume</h1>
    <div className='pdf-container'>
      <div className="pdf-file">
        <Document file={PDFFile} onLoadSuccess={onDocumentLoadSuccess}>
         <Page size={{ width: 100, height: 150 }} pageNumber={pageNumber} width={500} />
        </Document>
      </div>
      <button className="download-btn" onClick={downloadPdf}>Download PDF</button>
    </div>
    </section>
  );
}

export default Resume;