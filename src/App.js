import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BsFillHeartFill, BsFillXSquareFill, BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

import GlobalStyles from "./GlobalStyles";
import Favorites from './Favorites';

function App() {
	const [activity, setActivity] = useState("It's fun time");
	const [favorites, setFavorites] = useState([]);
	const [displayFav, setDisplayFav] = useState(false);
	const [toggle, setToggle] = useState(true);
	
	useEffect (() => {
		const fetchData = async () => {
			const respons = await fetch `http://www.boredapi.com/api/activity/`;
			const data = await respons.json();
			setActivity(data.activity)
		}
		fetchData();
	}, [toggle])

	const handleDisLike = () => {
		setToggle(!toggle);
	}

	const handleLike = () => {
		let array = favorites;
		array.push(activity);
		setFavorites(array);
		setToggle(!toggle);
	}

	const handleDisplayFavorites = () => {
		if(favorites.length !== 0){
			setDisplayFav(true);
		}
	}

	const handleHideFavorites = () => {
		setDisplayFav(false)
	}
	
	return (
		<>
			<GlobalStyles />
			<Wrapper>
				<DisLike onClick={handleDisLike}><BsFillXSquareFill/></DisLike>
				<Par>{activity}</Par>
				<Like onClick={handleLike}><BsFillHeartFill/></Like>
			</Wrapper>
			<Container>
				{
					!displayFav 
					?
					<Show onClick={handleDisplayFavorites}>Show <Down/></Show>
					:
					<>
						<Show onClick={handleHideFavorites}>Hide <Up/></Show>
						<Favorites favorites={favorites} setFavorites={setFavorites} setDisplayFav={setDisplayFav}/>
					</>
				}			
			</Container>
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	background: rgba(0,0,0,0.5);
	border: 2px solid #f9b8f9;
	border-radius: 5px;
	box-shadow: 0 0 10px #8901be, 0 0 40px #8901be, 0 0 80px #8901be;
	@media all and (max-width: 1180px) {
		width: 80%;
	}
	@media all and (max-width: 768px) {
		width: 95%;
		height: 90px;
	}
	@media all and (max-width: 540px) {
		margin-top: 30px;
	}
	@media all and (max-width: 414px) {
		margin-top: 20px;
		height: 70px;
	}
	@media all and (max-width: 360px) {
		height: 60px;
	}
`;
const Par = styled.p`
	font-size: 28px;
	text-align: center;
	color: white;

	@media all and (max-width: 1180px) {
		font-size: 26px;
	}
	@media all and (max-width: 912px) {
		font-size: 24px;
	}
	@media all and (max-width: 768px) {
		font-size: 22px;
	}
	@media all and (max-width: 540px) {
		font-size: 18px;
		max-width: 26ch;
	}
	@media all and (max-width: 414px) {
		font-size: 14px;
		max-width: 24ch;
	}
	@media all and (max-width: 360px) {
		font-size: 12px;
	}
`;
const Like = styled.button`
	text-align: center;
	font-size: 30px;
	width: 70px;
	height: 70px;
	margin: 10px;
	border: none;
	background: transparent;
	color: #8901be;
	transition: ease-in-out 200ms;
	&:hover{
		cursor: pointer;
		font-size: 40px;
	}
	&:active{
		font-size: 20px;
	}
	@media all and (max-width: 1180px) {
		font-size: 28px;
		width: 60px;
		height: 60px;
	}
	@media all and (max-width: 912px) {
		font-size: 26px;
		width: 60px;
		height: 60px;
		&:hover{
			font-size: 34px;
		}
		&:active{
			font-size: 20px;
		}
	}
	@media all and (max-width: 768px) {
		font-size: 24px;
		width: 50px;
		height: 50px;
		&:hover{
			font-size: 30px;
		}
		&:active{
			font-size: 20px;
		}
	}
	@media all and (max-width: 540px) {
		font-size: 22px;
		width: 40px;
		height: 40px;
		&:hover{
			font-size: 26px;
		}
		&:active{
			font-size: 18px;
		}
	}
	@media all and (max-width: 414px) {
		font-size: 18px;
		width: 30px;
		height: 30px;
		&:hover{
			font-size: 22px;
		}
		&:active{
			font-size: 12px;
		}
	}
	@media all and (max-width: 360px) {
		font-size: 16px;
		&:hover{
			font-size: 18px;
		}
		&:active{
			font-size: 10px;
		}
	}
`;
const DisLike = styled(Like)`
	color: #b83260;
`;
const Down = styled(BsCaretDownFill)`
	font-size: 30px;
	color: #f891e5;
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
const Up = styled(BsCaretUpFill)`
	font-size: 30px;
	color: #f891e5;
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
const Show = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 130px;
	height: 70px;
	font-size: 26px;
	text-align: center;
	border: none;
	background: transparent;
	color: white;
	margin-left: auto;
	margin-right: auto;
	@media all and (max-width: 1180px) {
		width: 120px;
		height: 60px;
	}
	@media all and (max-width: 912px) {
		font-size: 24px;
		height: 55px;
	}
	@media all and (max-width: 768px) {
		width: 100px;
		font-size: 22px;
	}
	@media all and (max-width: 540px) {
		font-size: 20px;
		height: 50px;
	}
	@media all and (max-width: 414px) {
		width: 80px;
		font-size: 18px;
		height: 45px;
	}
	@media all and (max-width: 360px) {
		font-size: 14px;
	}
`;
const Container = styled.div`
	background: rgba(0,0,0,0.5);
	width: 40%;
	margin: 30px auto;
	border: 2px solid #f9b8f9;
	border-radius: 5px;
	box-shadow: 0 0 10px #8901be, 0 0 40px #8901be, 0 0 80px #8901be;
	@media all and (max-width: 1180px) {
		width: 60%;
	}
	@media all and (max-width: 912px) {
		width: 80%;
	}
	@media all and (max-width: 768px) {
		width: 95%;
	}
	@media all and (max-width: 540px) {
		margin-top: 20px;
	}
`;
export default App;
