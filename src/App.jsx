import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Container, Dimmer, Loader } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import People from "./components/People";
import Films from "./components/Films";
import Species from "./components/Species";
import Planets from "./components/Planets";
import Starships from "./components/Starships";
import Vehicles from "./components/Vehicles";
import Footer from "./components/Footer";

function App() {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films/?format=json");
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchSpecies() {
      let res = await fetch("https://swapi.dev/api/species/?format=json");
      let data = await res.json();
      setSpecies(data.results);
      setLoading(false);
    }
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }
    async function fetchStarships() {
      let res = await fetch("https://swapi.dev/api/starships/?format=json");
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }
    async function fetchVehicles() {
      let res = await fetch("https://swapi.dev/api/vehicles/?format=json");
      let data = await res.json();
      setVehicles(data.results);
      setLoading(false);
    }
    fetchFilms();
    fetchPeople();
    fetchSpecies();
    fetchPlanets();
    fetchStarships();
    fetchVehicles();
  }, []);

  return (
    <>
      <Router>
        <div className="header-site"><Link to="/" /></div>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted></Loader>
            </Dimmer>
          ) : (
            <Routes>
              <Route exact path="/" caseSensitive={false} element={<Home />} />
              <Route
                exact path="/films"
                caseSensitive={false}
                element={<Films data={films} />}
              />
              <Route
                exact path="/people"
                caseSensitive={false}
                element={<People data={people} />}
              />
              <Route
                exact path="/species"
                caseSensitive={false}
                element={<Species data={species} />}
              />
              <Route
                exact path="/planets"
                caseSensitive={false}
                element={<Planets data={planets} />}
              />
              <Route
                exact path="/starships"
                caseSensitive={false}
                element={<Starships data={starships} />}
              />
              <Route
                exact path="/vehicles"
                caseSensitive={false}
                element={<Vehicles data={vehicles} />}
              />
            </Routes>
          )}
          <Footer />
        </Container>
      </Router>
    </>
  );
}
export default App;
