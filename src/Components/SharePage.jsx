import QRCode from "react-qr-code";

const SharePage = () => {
    return (
        <QRCode value={window.location.href} />
    )
}

export default SharePage;