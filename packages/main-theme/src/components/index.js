import React from "react";
import {Head, connect, Global, css, styled} from "frontity";
import Nav from './nav'
import Footer from "./footer";
import Switch from '@frontity/components/switch';
import Post from "./post";
import Carousel from "./carousel";
import Gallery from "./gallery";
import ImageText from "./ImageText";
import ParaBanner from "./parallax-banner";
import More from "./more";



const Root = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <>
            <Global
                styles={css`
                    body {
                        margin: 0;
                        font-family: "Helvetica Neue"; 
                        padding: 0;
                    }
                    main {
                        background-color: rgba(231, 225, 218, .4);
                        color: #000;
                    }
                `}
            />
            <Head>
                <title>{state.frontity.title}</title>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
                <link rel="canonical" href={state.router.link} />
            </Head>
            <Nav/>
            <Container>
                <ParaBanner/>
                <ImageText/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Carousel/>
                <br/>
                <br/>
                <br/>
                <Gallery/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Nous contactez</h2>
                <More/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </Container>
            <Switch>
                <Post when={data.isPost}/>
            </Switch>

            <Footer/>
        </>
    )
}

export default connect(Root);

const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;

`;

// COLOR CODE
// CHOCOLATE (MAIN) background-color: #8f7870;
// ORANGE (SECOND)  background-color: #df683f;
// LIME (THIRD)     background-color: #aed266;


