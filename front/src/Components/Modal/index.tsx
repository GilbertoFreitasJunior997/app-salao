import { FC, useRef } from "react";
import ReactDOM from "react-dom";
import ModalProps from "./props";
import { CloseButton, FooterButton, ModalBackground, ModalContainer, ModalFooter, ModalHeader, ModalTitle } from './styles';

const modalCloseAnim = 'modal-close';
const modalShowAnim = 'modal-show';
const Modal: FC<ModalProps> = ({ visible, onClose, onConfirm }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    if (!visible) return null;

    const handleClose = () => {
        modalRef.current?.classList.remove(modalShowAnim);
        modalRef.current?.classList.add(modalCloseAnim);
    }

    const comp = (
        <ModalBackground
            onClick={handleClose}
        >
            <ModalContainer
                onClick={e => e.stopPropagation()}
                className={modalShowAnim}
                onAnimationEnd={e => {
                    if (e.animationName === modalCloseAnim)
                        onClose();
                }}
                ref={modalRef}
            >
                <ModalHeader>
                    <CloseButton onClick={handleClose}>
                        X
                    </CloseButton>
                    <ModalTitle>
                        TITLE
                    </ModalTitle>
                </ModalHeader>

                <ModalFooter>
                    <FooterButton onClick={handleClose}>
                        Close
                    </FooterButton>

                    <FooterButton onClick={onConfirm}>
                        Confirm
                    </FooterButton>
                </ModalFooter>
            </ModalContainer>
        </ModalBackground>
    )

    return ReactDOM.createPortal(comp, document.body);
}

export default Modal;
