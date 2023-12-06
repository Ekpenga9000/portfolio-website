import { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "../../assets/resume/Omogbare_Louis_Ekpenga_ab.pdf";
import "./PdfComponent.scss";
import DownloadButton from "../download/DownloadButton";
import { IoCloseOutline } from "react-icons/io5";



const PdfComponent = ({handleResume}) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages }) => {
    setNumPages(numPages);
    };
    
    const handleClick = () => {
        handleResume();
    }

  return (
    <section className="pdf">
      <p className="pdf__p">
        Page {pageNumber} of {numPages}
          </p>
          <div className="pdf__page">
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page, i) => {
            return (
              <Page
                key={"pdf-a" + i}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
              </Document>
          </div>
          <div className="pdf__btn-div">
          <DownloadButton/>
          <button onClick={handleClick} className="pdf__btn"><IoCloseOutline />Close</button>
          </div>
    </section>
  );
};

export default PdfComponent;
