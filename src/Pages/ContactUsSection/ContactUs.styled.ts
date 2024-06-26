import styled from "styled-components";

const ContactUsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 100px;
  margin: 20vh 0;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: start;
    padding: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 767px) {
    margin-bottom: 100px;
  }
`;

const ContactFormSection = styled.div`
  width: 40%;

  h2 {
    font-size: 70px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;

    h2 {
      font-size: 10vw;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  background: none;
  color: black;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 0;
    font-size: 12px;
    color: #000;
    background-color: #fff;
    padding: 0 4px;
    border: none;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #000;
  transition: all 0.2s ease-out;
  pointer-events: none;

  span {
    color: #808080;
  }
`;

const MessageLabel = styled.label`
  position: absolute;
  left: 15px;
  top: 15px;
  font-size: 14px;
  color: #000;
  transition: all 0.2s ease-out;
  pointer-events: none;
`;

const MessageInput = styled.textarea`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 100px;
  resize: vertical;
  color: black;
  background: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 12px;
    color: #000;
    background-color: #fff;
    padding: 0 4px;
  }
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
  align-self: flex-start;
`;

const MapSection = styled.div`
  height: auto;
  max-height: 300px;
  display: flex;
  flex-direction: column;

  iframe {
    border: none;
    max-width: 100%;
  }
`;

const MapContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const VisitUsSection = styled.div`
  h3 {
    font-size: 3vh;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 5vw;
      font-weight: 600;
    }
  }
`;

const GetInTouchSection = styled.div`
  h3 {
    font-size: 3vh;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 5vw;
      font-weight: 600;
    }
  }
`;

export {
  ContactUsWrapper,
  ContactFormSection,
  ContactForm,
  InputContainer,
  InputField,
  InputLabel,
  MessageInput,
  MessageLabel,
  SubmitButton,
  MapSection,
  VisitUsSection,
  GetInTouchSection,
  MapContent,
};
