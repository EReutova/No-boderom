import styled from "styled-components"

import ListItem from "./ListItem";

const Favorites = ({favorites, setFavorites, setDisplayFav}) => {
    
    return(
        <Wrapper>
            {
                favorites.map((item, index) => {
                    return(
                        <ListItem 
                            key={index}
                            index={index} 
                            item={item} 
                            favorites={favorites}
                            setFavorites={setFavorites} 
                            setDisplayFav={setDisplayFav}
                        />
                    )
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
`;

export default Favorites;