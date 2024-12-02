import React, { useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { FaCameraRetro } from "react-icons/fa";

const QRScannerPage = () => {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState("");
  const [isScanning, setIsScanning] = useState(false);

  const startScanning = async () => {
    setIsScanning(true);
    const codeReader = new BrowserMultiFormatReader();

    try {
      await codeReader.decodeFromVideoDevice(
        null,
        videoRef.current,
        (result, err) => {
          if (result) {
            setScannedData(result.getText());
            stopScanning(codeReader);
          }
        }
      );
    } catch (error) {
      console.error("Error starting scanner: ", error);
    }
  };

  const stopScanning = (codeReader) => {
    codeReader.reset();
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">QR Code Scanner</h1>

      {!isScanning ? (
        <button
          onClick={startScanning}
          className="flex items-center justify-center gap-2 p-4 bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300"
        >
          <FaCameraRetro className="w-5 h-5" />
          <span>Start Scanning</span>
        </button>
      ) : (
        <div className="relative w-full max-w-md bg-gray-900 p-4 rounded-lg shadow-lg">
          <p className="text-center text-sm text-gray-300 mb-4">
            Point your camera at a QR code.
          </p>
          <video ref={videoRef} className="w-full rounded-lg" autoPlay></video>
        </div>
      )}

      {scannedData && (
        <div className="mt-6 bg-gray-900 p-4 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold">Scanned Data:</h2>
          <p className="text-green-400 mt-2 break-words">{scannedData}</p>
          <button
            onClick={() => setScannedData("")}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default QRScannerPage;
