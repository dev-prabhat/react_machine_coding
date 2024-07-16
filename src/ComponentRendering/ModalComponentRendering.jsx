import { useState } from "react";
import { Modal } from "../Component";

const ModalComponentRendering = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClickModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <p>Modal Component</p>
      <button onClick={handleOnClickModal}>Toggle Modal</button>
      {showModal && <Modal removeModal={handleOnClickModal} />}
    </div>
  );
};

export default ModalComponentRendering;
