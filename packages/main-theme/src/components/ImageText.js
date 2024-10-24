import React, {useEffect} from "react"
import {connect, styled, } from "frontity"
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Image from "@frontity/components/image"




const ImageText = ({state}) => {

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
                    <FlexCell>


                    </FlexCell>
                    <TextCell isBigScreen={isBigScreen} isDekstop={isDekstop} isMedium={isMedium} isLaptop={isLaptop} isSmall={isSmall} isMobile={isMobile}>
                        Aménager un espace de travail stimulant et propice à la concentration est essentiel pour la réussite d'une entreprise. Le mobilier de bureau joue un rôle crucial dans la création d'un environnement de travail agréable et productif.
                        le choix des couleurs et des matériaux est également important pour créer une ambiance de travail agréable. Des couleurs claires et des matériaux naturels favorisent la concentration et la créativité.

                        En choisissant soigneusement le mobilier de bureau, il est possible de créer un espace de travail qui inspire la créativité, la productivité et le bien-être des employés.


                    </TextCell>
                </Cell>
            )}
        </InView>
    )}

export default connect(ImageText)


const Cell = styled.div`
  display: flex;
  margin-left: 1em;
  
  justify-content: space-evenly;
  align-items: center;
  height: 83vh;
  margin: 0;
  padding: 0 1rem 0;
  gap: 4rem;
`

const FlexCell = styled.div`
  flex: 40%;
  width: 50%;

  display: flex;
  justify-content: center;
  margin: 0 0 0 5rem;

  img {
    justify-content: center;
    width: 100%;
  }
`

const TextCell = styled.div` 
  flex: 60%;
  font-size: ${(props) => (
    props.isBigScreen ? "2rem" :
        props.isDekstop ? "1.7rem" :
            props.isMedium ? "1.5rem" :
                props.isLaptop ? "1.25rem" :
                    props.isSmall ? "1rem" :
                        props.isMobile ? ".850rem" :
                            "1.4rem")};
  text-align: justify;
  padding: 2rem;
  font-weight: 300;
  line-height: 2rem;
`;



