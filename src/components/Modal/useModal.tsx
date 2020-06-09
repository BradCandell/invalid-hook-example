import React from "react";
import ReactModal from "react-modal";

/**
 * @typedef {Object} ModalReturn
 * @property {React.FC} Modal - Modal Window Container
 * @function show - Shows the Modal Window
 * @function hide - Hides the Modal Window
 * @function toggle - Shows or Hides the Modal Window based on its current state
 * @property {boolean} isVisible - A boolean indicating if the Modal Window is visible or not
 */

/**
 * Low-Level Hook for providing an easy-to-use Modal Window Component
 *
 * @export
 * @returns {ModalReturn} - An object consisting of properties and functions for defining and interacting with a Modal Window
 */
export function useModal() {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  // Improve Accessibility by setting the Modal Libraries App Element
  if (document.getElementById("root")) {
    ReactModal.setAppElement("#root");
  } else {
    ReactModal.setAppElement(document.body);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  /**
   * Show the Modal Window
   */
  const show = () => {
    setIsVisible(true);
  };

  /**
   * Hide the Modal Window
   */
  const hide = () => {
    setIsVisible(false);
  };

  /**
   * Toggle the visibility of the Modal Window
   */
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  /**
   * Modal Component (Wrapper)
   * @param props
   */
  const Modal: React.FC = ({ children }) => {
    return (
      <ReactModal
        isOpen={isVisible}
        onRequestClose={() => setIsVisible(false)}
        style={customStyles}
      >
        {children}
      </ReactModal>
    );
  };

  return {
    Modal,
    show,
    hide,
    toggle,
    isVisible,
  };
}
