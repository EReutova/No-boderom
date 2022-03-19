import React from "react";
import { useState } from "react";
import styled from "styled-components"

import { BsFillXCircleFill, BsCheckCircleFill } from 'react-icons/bs';

const ListItem = ({item, favorites, setFavorites, setDisplayFav, index}) => {
    const [doneItem, setDoneItem] = useState(false);

    const handleCancel = (i) => {
        let arr = favorites.filter((item, index) => {
            return index !== i
        })
        if (arr.length === 0) {
            setDisplayFav(false);
            setFavorites(arr);
        }
        else {
            setFavorites(arr);
        }
    }

    const handleDone = () => {
        setDoneItem(!doneItem);
    }

    return(
        <React.Fragment key={index}>
            {
                !doneItem 
                ?
                <ListIt>
                    <Done onClick={handleDone}><BsCheckCircleFill/></Done>
                    {item}
                    <Cancel onClick={() => handleCancel(index)}><BsFillXCircleFill/></Cancel>
                </ListIt>
                :
                <ListItemDone>
                    <Done onClick={handleDone}><BsCheckCircleFill/></Done>
                    {item}
                    <Cancel onClick={() => handleCancel(index)}><BsFillXCircleFill/></Cancel>
                </ListItemDone>
            }
        </React.Fragment >
    )
}
const ListIt = styled.li`
    color: white;
    width: 98%;
    display: flex;
    margin: 5px;
    font-size: 24px;
    @media all and (max-width: 912px) {
        font-size: 22px;
    }
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
    @media all and (max-width: 540px) {
        font-size: 18px;
    }
    @media all and (max-width: 414px) {
		font-size: 14px;
    }
    @media all and (max-width: 360px) {
        font-size: 12px;
    }
`;
const ListItemDone = styled(ListIt)`
    text-decoration: line-through;
`;
const Done = styled.button`
    font-size: 30px;
    margin: 0 10px;
    border: none;
    background: transparent;
    transition: ease-in-out 200ms;
    color: #13e652;
    &:hover{
        cursor: pointer;
    }
    @media all and (max-width: 912px) {
        font-size: 26px;
    }
    @media all and (max-width: 768px) {
        font-size: 24px;
    }
    @media all and (max-width: 540px) {
        font-size: 22px;
    }
    @media all and (max-width: 414px) {
        font-size: 18px;
    }
    @media all and (max-width: 360px) {
        font-size: 16px;
    }
`;
const Cancel = styled(Done)`
    margin-left: auto;
    padding-left: 10px;
    color: #b83260;
`;
export default ListItem;