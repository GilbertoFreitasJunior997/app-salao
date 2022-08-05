import styled from 'styled-components';
import Button from '../Button';

export const ModalBackground = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;

  display: flex;
  place-content: center;
  place-items: center;

  z-index: 5;

  @keyframes modal-close {
      from {
        transform: scale(1);
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      to {
        transform: scale(0);
        opacity: 0;
      }
  };

  @keyframes modal-show{
    from {
        transform: scale(0.3);
        opacity: 0.3;
      }
      30% {
        opacity: 0.4;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
  }

  .modal-close {
      animation: modal-close 200ms ease-in-out forwards;
  }

  .modal-show {
      animation: modal-show 200ms ease-in-out forwards;
  }
`;

export const ModalContainer = styled.div`
    width: 40vw;
    aspect-ratio: 1 / 1;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;

    background-color: white;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);

    border-radius: 10px;

    padding: 10px;
    z-index: 10;
`;

export const ModalHeader = styled.div`
    height: 10%;
    display: flex;
    align-items: center;

    padding-left: 20px;

    border-bottom: 1px solid black;
    position: relative;
`;

export const CloseButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;

    border: none;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    border-radius: 25%;

    width: 30px;
    aspect-ratio: 1 / 1;
`;

export const ModalTitle = styled.div`
    font-size: 1.7em;
    font-weight: bold;
`;

export const ModalFooter = styled.div`
    height: 10%;
    width: 80%;
    
    display: flex;
    place-items: center;
    margin: auto auto 0 auto;
    justify-content: space-between;
`

export const FooterButton = styled(Button)<{

}>`
    width: 100px;
`;
