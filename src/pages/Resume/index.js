import React, { useState } from 'react';
import "./style.css"
import { Document, Page, pdfjs } from 'react-pdf';
import PDFFile from '../../assets/react-resume.pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = PDFFile;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section className='resume'>
      <h1>Resume</h1>
      <div className="pdf-file">
        <Document file={PDFFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page size={{ width: 210, height: 297 }} pageNumber={pageNumber} width={600} />
        </Document>
      </div>
      <button onClick={downloadPdf}>Download PDF</button>
    </section>
  );
}

export default Resume;