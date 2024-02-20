import Modal from "react-modal";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ReactModal = ({
  id,
  onClick,
  button,
  disabled,
  children,
  className,
  buttonClassName,
  childrenClassName,
  title,
  closeButton,
  bottomButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
    onClick && onClick(e);
  };

  return (
    <>
      <button
        disabled={disabled}
        id={id}
        className={`${buttonClassName} ${
          disabled
            ? "bg-bee-lightgray dark:bg-bee-matterHornDark cursor-not-allowed"
            : ""
        } outline-none`}
        onClick={() => {
          handleClick();
        }}
      >
        {button}
      </button>
      {
        <Modal
          overlayClassName={
            "w-full h-full bg-black bg-opacity-50 fixed top-0 bottom-0 left-0 right-0 !z-[1005]"
          }
          className={`${className ? className : "w-11/12 sm:w-8/12 lg:w-1/2"} ${
            isOpen ? "animate-ease-in-y" : "animate-ease-in-y-reverse"
          } bg-gray-50 dark:bg-gray-950 border !border-gray-200 dark:!border-gray-700 p-0 overflow-hidden rounded-3xl shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          // style={customStyles}
          // h-[70vh]
          isOpen={isOpen}
          onRequestClose={handleClick}
          ariaHideApp={false}
          // closeTimeoutMS={300}
        >
          <div className="p-3 bg-gray-50 dark:bg-gray-950 z-10 sticky top-0 flex justify-between items-center border-b !border-gray-200 dark:!border-gray-700">
            {title ? <h1 className="text-xl text-white font-bold">{title}</h1> : null}
            {closeButton === true ? (
              <button
                onClick={handleClick}
                className={`p-2 flex justify-center items-center rounded-full border !border-gray-200 dark:!border-gray-700 font-medium bg-gray-50 hover:bg-gray-200 text-gray-700 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-bee-primary transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 cursor-pointer`}
              >
                <span
                  className={`text-gray-500 hover:text-bee-primary dark:text-gray-400 dark:hover:text-bee-primary`}
                >
                  <RxCross2 className="text-xl dark:text-white" />
                </span>
              </button>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`${
              childrenClassName ? childrenClassName : "bg-gray-50 dark:bg-bee-blackRussian px-3"
            } relative w-full dark:text-white overflow-auto`}
          >
            {children}
            {bottomButton === true ? (
              <div className="flex justify-center space-x-2 mt-4">
                <button className="px-4 py-1 rounded-lg text-white bg-red-500">
                  {t("header:yes")}
                </button>
                <button
                  className="px-4 py-1 rounded-lg bg-gradient-to-r from-[#2193B0] to-[#6DD5ED] text-white"
                  onClick={handleClick}
                >
                  {t("header:no")}
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Modal>
      }
    </>
  );
};

export default ReactModal;
