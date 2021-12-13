// import styles from '../styles/layout/header.module.scss'
import styled from 'styled-components'

const theme = {
    white: {
        default: '#fff',
        hover: 'transparent',
        textColor: '#000',
        textColorHover: '#fff',
    },
    transparent: {
        default: 'transparent',
        hover: '#fff',
        textColor: '#fff',
        textColorHover: '#000',
        border: '1px solid #fff'
    },

}
const Element = styled.button`
    width: 210px;
  height: 48px;
  border: none;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => theme[props.theme].textColor};
  cursor: pointer;
  transition: ease-in-out background-color 250ms;
  background-color: ${props => theme[props.theme].default};
  border: ${props => theme[props.theme].border};
  &:hover {
      background-color: ${props => theme[props.theme].hover};
        border: 2px solid #fff;
        color: ${props => theme[props.theme].textColorHover};
  };
  
`
Element.defaultProps = {
    theme: 'white',
}

const Button = (props) => {
    return (
        <>

            <Element theme={props.color} color={props.color}>{props.label}</Element>


        </>
    )
}

export default Button