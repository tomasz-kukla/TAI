import styled from "styled-components";
import Form from 'react-bootstrap/Form';


export const Theme = {

    bgPrimary: "#fbfbfb",

    btnPrimary: "#c60021",
    btnTextPrimary: "#fefefe",
    textDefault: "rgb(61, 72, 82)",
}

export const Label = styled.span`
    font-weight:600;
    color: ${props => Theme.textInfo};
    text-transform:lowercase;
    opacity:0.9;
    font-variant:small-caps;
`;

export const Field = styled(Form.Control)`
    border-radius: 2px !important;
    background-color: white !important;
    color: ${Theme.textMuted};
    text-align:end;
    border: none;
    box-shadow: 2px 2px 2px ${Theme.shadow};
`;