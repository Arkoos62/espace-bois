import React ,{useEffect} from "react";
import { connect, styled } from "frontity";
import {InView} from "react-intersection-observer";
import {useMediaQuery} from "react-responsive";
import Link from '@frontity/components/link';



const Gallery = ({ state, libraries }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isDekstop = useMediaQuery({ query: '(min-width: 1224px) and (max-width: 1823px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 800px) and (max-width: 1223px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 601px) and (max-width: 799px)' });
    const isSmall = useMediaQuery({query: '(min-width: 401px) and (max-width: 600px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch posts
                const response = await libraries.source.api.get({
                    endpoint: "posts",
                    params: {
                        per_page: 100,
                        page: 1
                    }
                });
                const entitiesAdded = await libraries.source.populate({response, state});
            } catch (error) {
                console.error("Error fetching posts or media:", error);
            }
        }
    }, []);
    const allPosts = Object.values(state.source.post);




    return (
        <>
            <InView threshold={.1}>
                {({ inView, ref }) => (
                    <>
                    <h2 id="galerie">La <strong>Galerie</strong></h2>

                    <Container isMobile={isMobile} ref={ref} inView={inView}>

                        <PostList>
                    {allPosts.map((post) => {
                            const attachment = post.featured_media ? state.source.attachment[post.featured_media] : null;
                            const imageUrl = attachment ? attachment.source_url : "";

                            return (
                                <PostLink link={post.link}>
                                    <Card key={post.id}>
                                        <PostImage src={imageUrl} alt={post.title.rendered} />
                                        <PostTitle>
                                            <span>{post.title.rendered}</span>
                                        </PostTitle>
                                    </Card>
                                </PostLink>
                            );
                        })}

                        </PostList>
                    </Container>
                    </>
                )}
            </InView>
        </>
    );
};

export default connect(Gallery);


const Container = styled.div`
  transform: translateY(${({ inView }) => (inView ? "0" : "-50px")});
  transition: 1s cubic-bezier(.5, 0, 0, 1);
  opacity: ${({inView}) => (inView ? "1":"0")};
  padding: 2rem;
  display: flex;
  justify-content: center;
 
`;

const PostList = styled.div`  
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
`;

const Card = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-between; /* S'assure que l'image et le titre sont bien séparés */
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  
  width: 350px;
  height: 300px;
  overflow: hidden;
  background-color: #fff;
`;


const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 240px; /* Hauteur fixe pour l'image */
  flex-shrink: 0; /* Empêche l'image de se rétrécir */
`;

const PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Centre le texte horizontalement */
  flex-shrink: 0; /* Empêche le titre de se rétrécir */
  height: 10px; /* Hauteur fixe du titre */
  padding: 1em;
  
  span {
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5em;
    font-weight: 300;
    text-align: center;
    white-space: nowrap; 
   }
`;

const PostLink = styled(Link)` 
    text-decoration: none;
    cursor: pointer;
    color: black;
    
    &:hover {
      opacity: .6;
    } 
`;


