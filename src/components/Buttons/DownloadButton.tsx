import { Download } from "lucide-react";

interface DownloadButtonProps {
  imageUrl: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ imageUrl }) => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = imageUrl.split("/").pop() || "downloaded-image"; // Use the last part of the URL as filename
    a.click();
  };

  return (
    <button
      onClick={handleDownload}
      className=" text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-600"
    >
      <Download />
    </button>
  );
};

export default DownloadButton;
