import { useEffect, useState } from "react";
import QRCode from "qrcode";

import imagemqrcode from '../assets/qr.webp'
import logo from '../assets/logo.png';

import { IoMdEye } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { MdAlternateEmail, MdOutlineKeyboardArrowDown, MdOutlineSocialDistance, MdQrCodeScanner } from "react-icons/md";
import { FaAddressCard, FaLink, FaMapPin, FaSms, FaUser, FaWifi } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { PiWarningCircleBold } from "react-icons/pi";
import { RiErrorWarningFill } from "react-icons/ri";

export const GeradordeQRCODE: React.FC = () => {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState('');
  const [salvaQRCODE, setSalvaQRCODE] = useState<{ nome: string; qrCode: string }[]>([]);

  const GerarQrCode = async () => {
    try {
      const qrCodeURL = await QRCode.toDataURL(text);
      setQrCode(qrCodeURL);

      const novoValor = [...salvaQRCODE, qrCodeURL];
      setSalvaQRCODE(novoValor);
      localStorage.setItem('qrcode', JSON.stringify(novoValor));
    } catch (error) {
      console.log("Erro ao gerar QR Code:", error);
    }
  };

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('qrcode');
    if (dadosSalvos) {
      setSalvaQRCODE(JSON.parse(dadosSalvos));
    }
  }, []);

  return (
    <section className="flex flex-col justify-center items-center content-center">

      <header className="bg-white w-full h-20 items-center justify-center flex p-5 mb-5">
        <img className="w-12 h-12 rounded-lg" src={logo}></img>
        <nav className="flex items-center w-8/12">
          <ul className="flex items-center">
            <li className="text-gray-500 text-lg font-semibold text-center p-5">
              <a className="hover:underline transition-all duration-300 flex justify-center items-center text-blue-500 underline" href="#">Código QR&nbsp;<MdOutlineKeyboardArrowDown /></a>
            </li>
            <li className="text-gray-500 text-lg font-semibold text-center p-5">
              <a className="hover:underline transition-all duration-300" href="#">Precificação</a>
            </li>
            <li className="text-gray-500 text-lg font-semibold text-center p-5">
              <a className="hover:underline transition-all duration-300" href="#">Sobre nós</a>
            </li>
            <li className="text-gray-500 text-lg font-semibold text-center p-5">
              <a className="hover:underline transition-all duration-300" href="#">Contacte-nos</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <span className="hover:underline transition-all duration-300 font-semibold hover:text-blue-500">
            <FaUser className="w-5 h-5 cursor-pointer" /></span>
          <button
            className="bg-blue-600 text-white rounded-lg w-60 h-15 flex justify-center items-center hover:bg-blue-700 transition-all duration-300">
            Comece a avaliação gratuita
          </button>
        </div>
      </header>





      <div className="w-8/12 p-5 leading-0.75">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">Gerador de QR Code</h1>
        <p className="text-2xl text-gray-600 mb-5">Criador de QR codes personalizados</p>
      </div>


      <div className="bg-white w-8/12 h-full p-5 rounded-lg flex items-center gap-5 flex-wrap justify-center">
        <ul className="flex gap-10 flex-wrap justify-center">
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <FaLink className="w-8 h-8 text-blue-500" />URL</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <FaAddressCard className="w-8 h-8 text-blue-500" />vCard</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <IoDocumentText className="w-8 h-8 text-blue-500" />Documento</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <MdAlternateEmail className="w-8 h-8 text-blue-500" />E-mail</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <FaWifi className="w-8 h-8 text-blue-500" />Wifi</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <MdOutlineSocialDistance className="w-8 h-8 text-blue-500" />Social</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <FaSms className="w-8 h-8 text-blue-500" />SMS</li>
          <li className="cursor-pointer w-30 h-25 text-gray-800 font-semibold flex-col text-xl justify-center items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex gap-5 rounded-lg">
            <FaMapPin className="w-8 h-8 text-blue-500" />Localização</li>
        </ul>
      </div>


      <div className="flex w-8/12 pt-5 h-140 gap-5 justify-center items-center flex-col lg:flex-row">

        <div className="order-2 bg-white h-full p-4 rounded-lg flex flex-col items-center">
          <div className="w-80 h-80 bg-white flex justify-center items-center rounded-lg">
            {!qrCode && (
              <>
                <img className="w-60 h-60 opacity-50" src={imagemqrcode}></img>
              </>
            )}
            {qrCode && (
              <>
                <img
                  className="w-full rounded-3xl"
                  src={qrCode} alt="QR Code"
                />
              </>
            )}
          </div>
          <button
            className="bg-blue-600 text-white rounded-lg w-full h-15 mt-5 flex justify-center items-center hover:bg-blue-700 transition-all duration-300"
            onClick={GerarQrCode}>
            <IoMdEye className="w-12 h-12" />&nbsp; Gerar QRCode
          </button>
          <div className="flex justify-center items-center m-5 gap-3">
            <button
              className="w-50 flex justify-center items-center border-1 bg-red-400 rounded-full p-2 text-white hover:bg-red-500">
              Download&nbsp;<CiSaveDown2 className="w-5 h-5" />
            </button>
            <span className="w-30 flex justify-center items-center border-1 bg-green-500 rounded-full p-2 text-white hover:bg-green-600 cursor-pointer">Imprimir&nbsp;<MdQrCodeScanner className="w-5 h-5"/></span>
          </div>
        </div>

        <div className="flex w-full h-full bg-white rounded-lg m-0 p-0 flex-col">
          <div className="w-full h-15 bg-blue-500 rounded-t-lg flex justify-center items-center">
            <h2 className="text-white text-2xl font-semibold">Parametros do QR Code</h2>
          </div>

          <div className="flex flex-col w-full h-full items-start p-5 gap-5">
            <span className="text-4xl font-bold text-gray-800 ml-5">URL ou pagina da web</span>
            <div className="flex flex-col w-9/12 lg:w-6/12 h-30 bg-white justify-center items-center rounded-lg mt-5">
              <label className="font-bold text-gray-600 w-11/12" htmlFor="url">Insira o link:</label>
              <input
                className="bg-blue-100 w-11/12 rounded-lg h-15 text-blue-500 font-semibold p-3 ative:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="url"
                placeholder="Ex: https://www.exemplo.com"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <p className="ml-5 flex text-gray-700 gap-2 w-140">
              <RiErrorWarningFill className="w-13 h-13 text-blue-800" />
              Recomendamos que antes de clicar em criar código QR verifique que a informação do campo link esteja preenchida corretamente.
            </p>
          </div>
        </div>

      </div>

      <h3 className="mb-5 mt-10">QRcode salvos:</h3>
      <ul className="flex flex-wrap justify-center">
        {
          salvaQRCODE.map((valor, index) => (
            <li key={index} className="list-none">
              <p className="list-none text-center m-2">{valor.nome}</p>
              <img
                className="bg-blue-400 w-50 h-50 rounded-lg p-2 m-1 gap-1"
                src={valor}
                alt={`QR de ${valor.nome}`} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};
