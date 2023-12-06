import "./DownloadButton.scss"; 
import { BsDownload } from "react-icons/bs";

const DownloadButton = ({ fileName, fileUrl }) => {

    const handleDownload = () => {
        const link = document.createElement('a'); 
        link.href = fileUrl; 
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    }

    return (
        <button onClick={handleDownload} className="download">
          <BsDownload />  Download Resume
        </button>
    )
}

export default DownloadButton; 