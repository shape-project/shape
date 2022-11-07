import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

export const EditShapeModal = () => {

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
      outline: "none",
    },
  };

  const { register, handleSubmit } = useForm();

  return (
    <Modal
      isOpen={false}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <form className="flex flex-col p-8 gap-5 bg-bg-form rounded-md">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-2xl text font-medium">
            Edite seu Shape
          </h3>
          <IoClose className="text-white text-3xl" />
        </div>
        <div className="flex items-center flex-row gap-20 mt-8">
          <div className="flex flex-col">
            <label
              htmlFor="command"
              className="text-grey-5 text-base mb-2 ml-1"
            >
              Qual comando você deseja usar?
            </label>
            <input
              type="text"
              id="command"
              defaultValue={"RENDERIZAR AQ O COMANDO DO SHAPE CLICADO"}
              required
              className="text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              {...register("command")}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="package"
              className="text-grey-5 text-base mb-2 ml-1 pr-9"
            >
              Qual gerenciador de pacote?
            </label>
            <select
              id="package"
              defaultValue={"yarn"}
              required
              {...register("package")}
              className={
                "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              }
            >
              <option value="npm" className="bg-bg-form">
                NPM
              </option>
              <option value="yarn" className="bg-bg-form">
                Yarn
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center flex-row gap-20 mt-8">
          <div className="flex flex-col">
            <label
              htmlFor="package"
              className="text-grey-5 text-base mb-2 ml-1 pr-2"
            >
              Qual ferramente de construção?
            </label>
            <select
              id="package"
              defaultValue={"vite"}
              required
              {...register("tool")}
              className={
                "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              }
            >
              <option value="create-react-app" className="bg-bg-form">
                Create React App
              </option>
              <option value="vite" className="bg-bg-form">
                Vite
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="language"
              className="text-grey-5 text-base mb-2 ml-1 "
            >
              Qual linguagem de programação?
            </label>
            <select
              id="language"
              defaultValue={"typescript"}
              required
              {...register("language")}
              className={
                "text-grey-4  h-10  rounded p-2 text-xs bg-transparent border-solid border-2 outline-none border-border-Inputs hover:border-purple-1 focus:border-purple-1 valid:border-purple-1"
              }
            >
              <option value="javascript" className="bg-bg-form">
                JavaScript
              </option>
              <option value="typescript" className="bg-bg-form">
                TypeScript
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h3 className="text-grey-5 text-base">
            Quais bibliotecas você deseja?
          </h3>
          <ul className="grid grid-rows-2 grid-flow-col gap-4 mt-6 overflow-x-auto max-w-xl p-2 text-center scrollbar-thin scrollbar-thumb-purple-1 scrollbar-track-border-Inputs pb-5 scrollbar-thumb-rounded-md ">
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Toastify</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Zustand</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">React Icons</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Framer Motion</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Tailwind</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Router Dom</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Toastify</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Zustand</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">React Icons</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Framer Motion</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Tailwind</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Router Dom</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Toastify</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Zustand</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">React Icons</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Framer Motion</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Tailwind</p>
            </li>
            <li className="text-grey-5 text-base font-light hover:text-purple-2 hover:font-medium cursor-pointer mw-14 p-2">
              <p className="">Router Dom</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-center gap-8">
          <button className="bg-button-register p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300">
            Editar
          </button>
          <button className="bg-grey-1 p-3 pl-16 pr-16 text-base font-medium text-white rounded-md shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 duration-300">
            Fechar
          </button>
        </div>
      </form>
    </Modal>
  );
};