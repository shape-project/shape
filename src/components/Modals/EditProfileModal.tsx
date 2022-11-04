import handleModalStore from "../../stores/handleModalStore";
import Modal from "react-modal";

const EditProfileModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "none",
    },
  };

  const [modalIsOpen] = handleModalStore((state) => [state.modalIsOpen]);
  const [closeModal] = handleModalStore((state) => [state.closeModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="absolute"
    >
      <form className="flex items-start flex-col p-10 gap-5 bg-bg-form w-96 min-h-full rounded-md">
        <div className="min-w-full flex justify-center">
          <h1 className="text-xl text-white">Editar Perfil</h1>
        </div>

        <label htmlFor="user" className="text-grey-4 text-xs">
          Usuário
        </label>
        <input
          type="text"
          id="user"
          placeholder="Usuário"
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-purple-1"
        />

        <label htmlFor="email" className="text-grey-4 text-xs">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-purple-1"
        />

        <label htmlFor="password" className="text-grey-4 text-xs">
          Senha
        </label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-purple-1"
        />

        <label htmlFor="img" className="text-grey-4 text-xs">
          Imagem
        </label>
        <input
          type="text"
          id="img"
          placeholder="Imagem"
          className="text-grey-4 min-w-full h-10 rounded p-2 text-xs bg-transparent border-solid border-2 border-purple-1"
        />

        <button className="min-w-full bg-purple-1 h-10 rounded text-grey-4 text-xs mt-2 hover:animate-pulse">
          Editar
        </button>
      </form>
    </Modal>
  );
};

export default EditProfileModal;