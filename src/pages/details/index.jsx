import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import arrow from "../../assets/seta.png";
import { ThemeContext } from "../../contexts/theme-context";
import data from "../../data.json";

const Details = () => {
  const { theme } = useContext(ThemeContext);
  const [country, setCountry] = useState({});
  let { name } = useParams();
  const countrySelect = data.filter((countryFilter) => countryFilter.name == name);
  useEffect(() => {
    setCountry(countrySelect[0]);
  }, []);
  // console.log(country.population.toLocaleString())
  return (
    <Container theme={theme}>
      <Link to={"/"} theme={theme}>
        <img src={arrow} alt="Seta para Voltar" className="arrow" />
        Back
      </Link>
      <DetailsCountry theme={theme}>
        <img src={country.flag} alt="Bandeira" />
        <div>
          <h2>{country.name}</h2>
          <div className="div-infos">
            <p>
              Native Name:<span> {country.nativeName}</span>
            </p>
            <p>
              Region:<span> {country.region}</span>
            </p>
            <p>
              Population:
              <span> {country.population?.toLocaleString("pt-Br")}</span>
            </p>
            <p>
              Sub Region:<span> {country.subregion}</span>
            </p>
            <p>
              Capital:<span> {country.capital}</span>
            </p>
            <p className="top-level">
              Top Level Domain:<span> {country.topLevelDomain}</span>
            </p>
            <p>
              Currencies:
              <span> {country.currencies?.[0].name}</span>
            </p>
            <p>
              languages:
              <span>{country?.languages?.map((item) => ` ${item.name}, `)}</span>
            </p>
          </div>
          <Borders>
            <p>Border Countries:</p>
            <ul>
              {country.borders ? (
                country.borders.map((item, index) => {
                  const countryFilter = data.filter(
                    (a) => a.alpha3Code == item
                  );
                  return (
                    <li key={index}>
                      <Link
                        to={`/${countryFilter[0].name}`}
                        onClick={() =>
                          sessionStorage.setItem(
                            "country",
                            JSON.stringify(countryFilter[0])
                          )
                        }
                      >
                        {countryFilter[0].name}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li className="not-borders">
                  Esse país não faz fronteita com nenhum outro país!
                </li>
              )}
            </ul>
          </Borders>
        </div>
      </DetailsCountry>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: calc(100vh - 73px);
  padding: 40px 10px 40px 60px;
  font-family: "Nunito Sans";

  a {
    margin-bottom: 50px;
    padding: 10px 30px 10px 25px;
    background-color: ${(props) => props.theme.elements};
    border-radius: 4px;
    border: none;
    box-shadow: rgba(20, 20, 20, 0.2) 0px 7px 29px 0px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    color: ${(props) => props.theme.color};
  }
  .arrow {
    width: 20px;
    transform: rotate(180deg);
    ${(props) =>
      props.theme.mode == "Light" &&
      css`
        filter: invert(100%);
      `}
  }
  @media (max-width: 500px) {
    padding: 30px;
    a {
      font-size: 13px;
      margin-bottom: 25px;
    }
  }
`;
const DetailsCountry = styled.div`
  display: flex;
  gap: 130px;
  color: ${(props) => props.theme.color};

  img {
    width: 40%;
    height: 400px;
    box-shadow: rgba(20, 20, 20, 0.2) 0px 7px 29px 0px;
    border-radius: 4px;
  }
  h2 {
    font-size: 35px;
    margin-bottom: 30px;
  }
  p {
    font-weight: 600;
    margin-top: 15px;
  }
  span {
    font-weight: 300;
    opacity: 0.6;
  }
  div {
    width: 100%;
    height: 100%;
  }
  .div-infos {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 200px;
  }
  @media (max-width: 1200px) {
    gap: 90px;
    img {
      width: 45%;
    }
  }
  @media (max-width: 870px) {
    flex-direction: column;
    img {
      width: 95%;
      box-shadow: none;
    }
  }
  @media (max-width: 500px) {
    gap: 40px;
    img {
      height: 220px;
    }
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 15px;
    }
    .div-infos {
      height: 100%;
    }
    .top-level {
      margin-top: 50px;
    }
  }
`;
const Borders = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: baseline;
  p {
    min-width: 20%;
    max-width: 50%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 13px 0;
  }
  .not-borders {
    opacity: 0.6;
    margin-top: 10px;
  }
  a {
    margin-bottom: 0;
    transform: scale(0.8);
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 770px) {
    flex-direction: row;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin-top: 20px;
    ul {
      margin-top: 20px;
    }
  }
`;
export { Details };
