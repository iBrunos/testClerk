import logoArchei from "../../../../public/assets/images/Archei.png";
import Image from "next/image";
import {BsDiscord} from "react-icons/bs"
const Footer: React.FC = () => {
  return (
    <>

    <footer className="text-gray-600 body-font dark:border-[#000000] bg-[#000000f8] dark:bg-[#000000] relative bottom-24 w-full h-24 pb-0 flex">
    <Image src={logoArchei} alt="Logo da Archei Software" className="w-64 h-64 relative top-[-5.5rem] left-0" width={1000} height={1000}></Image>
    <div className="align-middle justify-between flex sm:flex-row flex-col mt-8 ml-20">
      <p className="text-[0.75rem] text-white font-bold sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4 italic mr-[60rem]">© 2023 COPYRIGHT ARCHEI, TODOS OS DIREITOS RESERVADOS</p>
      <div className="mb-8">
        <a className="">
          <BsDiscord className='text-white hover:text-indigo-500 text-[3rem] cursor-pointer'></BsDiscord>
        </a>
      </div>
    </div>
  </footer>
  </>
  );
};

export default Footer;