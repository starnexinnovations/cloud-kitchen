import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppUrl } from "../utils/whatsapp";

interface Props {
  message: string;
}

const WhatsAppButton = ({ message }: Props) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition duration-300"
      >
        {/* Pulse */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        <FaWhatsapp size={28} className="relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
