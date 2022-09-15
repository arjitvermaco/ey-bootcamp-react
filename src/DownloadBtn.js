import downloadImage from './images/download.gif'
function DownloadBtn(){
    return(
        <div className="download-block animate__animated animate__bounce">
        <a href="https://github.com/nathansmith/960-Grid-System/archive/master.zip" className="tool_link">
            <img src={downloadImage} alt="Download Btn"/>
        </a>
    </div>
    )
}

export default DownloadBtn