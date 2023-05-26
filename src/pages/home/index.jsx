import styled, { css } from "styled-components";
import data from "../../data.json";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import lupa from "../../assets/lupa.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [cardType, setCardType] = useState(data);
  const handleInputChange = (value) => {
    if (value != "") {
      const cardsSearch = data.filter((card) =>
        card.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setCardType(cardsSearch);
    } else {
      setCardType(data);
    }
  };
  const handleSelectChange = (value) => {
    if (value != "") {
      const cardsSelects = data.filter((card) => card.region === value);
      setCardType(cardsSelects);
    } else {
      setCardType(data);
    }
  };
  return (
    <Container theme={theme}>
      <Div theme={theme}>
        <label htmlFor="search">
          <img src={lupa} alt="Lupa" />
          <input
            type="search"
            id="search"
            placeholder="Search for a country..."
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </label>
        <select onChange={(event) => handleSelectChange(event.target.value)}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </Div>
      <Ul theme={theme}>
        {cardType.map((country, index) => {
          const { name, population, region, capital, flags } = country;
          return (
            <Li key={index} theme={theme} className="card">
              <Link to={`/${name}`}>
                <img src={flags.png} alt="Bandeira" />
                <div>
                  <h3>{name}</h3>
                  <p>
                    Population:
                    <span> {population.toLocaleString("pt-BR")}</span>
                  </p>
                  <p>
                    Region:
                    <span> {region}</span>
                  </p>
                  <p>
                    Capital:
                    <span> {capital}</span>
                  </p>
                </div>
              </Link>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  height: calc(100vh - 73px);
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 55px 15px;

  label {
    position: relative;
  }

  img {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 11px;
    left: 20px;
    ${(props) =>
      props.theme.mode == "Light" &&
      css`
        filter: invert(100%);
      `}
  }
  input {
    padding: 15px 20px 15px 60px;
    width: 175%;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.color};
    border: none;
    border-radius: 4px;
    box-shadow: rgba(20, 20, 20, 0.2) 0px 7px 29px 0px;
  }
  input::placeholder {
    color: ${(props) => props.theme.color};
    opacity: 0.8;
    font-size: 12px;
  }
  select {
    background-color: ${(props) => props.theme.elements};
    padding: 15px 40px 15px 20px;
    color: ${(props) => props.theme.color};
    border: none;
    border-radius: 4px;
    font-size: 12px;
    border-right: 15px solid transparent;
    box-shadow: rgba(20, 20, 20, 0.2) 0px 7px 29px 0px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 35px;
    padding: 40px 30px 15px;
    input {
      width: 130%;
    }
  }
  @media (max-width: 600px) {
    input {
      width: 110%;
    }
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 80px;
  justify-content: center;
  padding: 30px;
  background-color: ${(props) => props.theme.background};
  .not-found {
    color: ${(props) => props.theme.color};
    height: 100%;
    font-size: 30px;
    margin-top: 12%;
    font-family: "Nunito Sans", sans-serif;
  }
`;
const Li = styled.li`
  width: 20%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.elements};
  font-family: "Nunito Sans", sans-serif;
  transition: 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
  :hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 5px 15px;
  }
  h3 {
    margin-bottom: 15px;
  }
  p {
    font-weight: 600;
    line-height: 25px;
  }
  span {
    font-weight: 300;
    opacity: 0.6;
  }
  img {
    width: 100%;
    height: 160px;
    border-radius: 5px 5px 0 0;
  }
  div {
    padding: 25px 30px 50px;
  }
  a {
    color: ${(props) => props.theme.color};
  }
  @media (max-width: 1024px) {
    width: 27%;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

export { Home };
