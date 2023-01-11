import React, { useState } from "react";
import Modal from "react-modal";
import classNames from "classnames";
import { CodeBlock, dracula } from "react-code-blocks";
import styles from "./CredentialModal.module.css";
import padding from "../css/Padding.module.css";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const DARK_MODE_OVERYLAY_BACKGROUND_COLOR = "rgba(0, 0, 0, 0.75)";
const LIGHT_MODE_OVERLAY_BACKGROUND_COLOR = "rgba(1, 1, 1, 0.3)";
const DARK_MODE_THEME = dracula;
const LIGHT_MODE_THEME = null;

if (ExecutionEnvironment.canUseDOM) {
  Modal.setAppElement(document.querySelectorAll("div")[0]);
}

function afterOpenModal() {
  // Prevent overlay scrolling of background content
  document.body.style.overflow = "hidden";
}

function afterCloseModal() {
  // Re-enable scrolling of background content
  document.body.style.overflow = "unset";
}

const CredentialModal = ({ credential, isOpen, closeModal, onDelete }) => {
  const [theme, setTheme] = useState(function () {
    if (ExecutionEnvironment.canUseDOM && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_MODE_THEME;
    } else {
      return LIGHT_MODE_THEME;
    }
  }());

  const [overlayBackgroundcolor, setOverlayBackgroundColor] = useState(function () {
    if (ExecutionEnvironment.canUseDOM && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_MODE_OVERYLAY_BACKGROUND_COLOR;
    } else {
      return LIGHT_MODE_OVERLAY_BACKGROUND_COLOR;
    }
  }());

  if (ExecutionEnvironment.canUseDOM) {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        if (event.matches) {
          //dark mode
          setTheme(DARK_MODE_THEME);
          setOverlayBackgroundColor(DARK_MODE_OVERYLAY_BACKGROUND_COLOR);
        } else {
          //light mode
          setTheme(LIGHT_MODE_THEME);
          setOverlayBackgroundColor(LIGHT_MODE_OVERLAY_BACKGROUND_COLOR);
        }
      });
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderStyle: "none",
          },
          overlay: {
            backgroundColor: overlayBackgroundcolor
          },
        }}
        contentLabel="Credential Info Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className={classNames(styles.container)}>
          {credential !== null ?
            <div className={classNames(styles["modal-header"])}>
              <h2 className={classNames(padding["ml-1"], padding["mb-0"])}>{credential.identity.username}</h2>
              <div>
                <div
                  className={classNames(styles.icon)}
                  onClick={onDelete}
                  style={{ cursor: "pointer" }}>
                  <div className={classNames(padding["pl-half"], padding["pr-half"])}>&#128465;</div>
                </div>
                <div
                  className={classNames(styles.icon)}
                  onClick={closeModal}
                  style={{ cursor: "pointer" }}>
                  <div className={classNames(padding["pl-half"], padding["pr-half"])}>&#10005;</div>
                </div>
              </div>
            </div>
            : <div></div>
          }
          <div className={classNames(styles.modal)}>
            <CodeBlock
              text={JSON.stringify(credential, null, 2)}
              language="json"
              showLineNumbers={true}
              startingLineNumber={0}
              theme={theme}
              className={classNames(styles["code-block"])}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default CredentialModal;