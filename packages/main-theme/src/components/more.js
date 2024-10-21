import React, {useEffect} from "react"
import {connect, styled, } from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Image from "@frontity/components/image"
import Link from "@frontity/components/link";





const More = ({state}) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    return (
        <InView threshold={.2}>
            {({ inView, ref }) => (
                <Cell ref={ref} inView={inView} isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                    <TextCell isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>

                        Tous nos produits sont disponibles en plusieurs déclinaisons ou sous différentes formes, et peuvent même être modulables.
                        <br/>

                        Pour les professionnels, nous offrons également un service de conception sur mesure pour des installations très personnalisées.
                        <br/>

                        <strong>Marie</strong>, notre commerciale, est à votre disposition pour répondre à toutes vos questions concernant nos produits, vous fournir des devis, et concevoir des solutions adaptées à vos besoins.

                    </TextCell>
                    <FlexCell>
                        <ContactList>
                            <strong>CONTACTEZ UN EXPERT DÈS MAINTENANT !</strong>
                            <ContactLink>
                            <Link link="/contact">Formulaire de contact</Link>
                            </ContactLink>

                        </ContactList>
                    </FlexCell>

                </Cell>
            )}
        </InView>
    )}

export default connect(More)


const Cell = styled.div`
  display: flex;
  margin-left: 1em;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 32px;
  gap: 4rem;
`

const FlexCell = styled.div`
  flex: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
 
  img {
    border: 1px solid rgb(217, 34, 40, 0.6);
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }
`

const TextCell = styled.div` 
  flex: 60%;
  font-size: ${(props) => (
    props.isBigScreen ? "1.5rem" :
        props.isDekstop ? "1.2rem" :
            props.isMedium ? "1rem" :
                props.isLaptop ? ".8rem" :
                    props.isSmall ? ".7rem" :
                        props.isMobile ? ".650rem" :
                            "1.5rem")};
  text-align: justify;
  padding: 2rem;
  font-weight: 300;
  line-height: 2rem;
`;

const Name = styled.div`
  span {
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
  }
`

const ContactList = styled.div`
   display: flex;
   flex-flow: column nowrap;
   gap: 1rem;
 
    a {
       text-decoration: none;
       color: #fff;
       cursor: pointer;
       font-size: 16px;
       font-weight: 800;
       text-align: center;
       text-rendering: geometricprecision;
       text-transform: none;
       

       &:hover {
         opacity: .6;
       }
    }
`

const ContactLink = styled.div`
    border: 1px solid #df683f;
    background: #df683f;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box; 
    display: inline-block;
    line-height: 16px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
   
`

//<!-- HTML !-->
// <button class="button-24" role="button">Button 24</button>
//
// /* CSS */
// .button-24 {
//   background: #FF4742;
//   border: 1px solid #FF4742;
//   border-radius: 6px;
//   box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-block;
//   font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
//   font-size: 16px;
//   font-weight: 800;
//   line-height: 16px;
//   min-height: 40px;
//   outline: 0;
//   padding: 12px 14px;
//   text-align: center;
//   text-rendering: geometricprecision;
//   text-transform: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: middle;
// }
//
// .button-24:hover,
// .button-24:active {
//   background-color: initial;
//   background-position: 0 0;
//   color: #FF4742;
// }
//
// .button-24:active {
//   opacity: .5;
// }