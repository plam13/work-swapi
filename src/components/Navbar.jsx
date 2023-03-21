import React, { lazy, Suspense } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  let SwapiSearch;
  switch (location.pathname) {
    case "/films":
      SwapiSearch = lazy(() => import("./SwapiSearchFilms")); break;
    case "/planets":
      SwapiSearch = lazy(() => import("./SwapiSearchPlanets")); break;
    case "/people":
      SwapiSearch = lazy(() => import("./SwapiSearchPeople")); break;
    case "/vehicles":
      SwapiSearch = lazy(() => import("./SwapiSearchVehicles")); break;
    default:
      SwapiSearch = null;
  }
  return (
    <>
      <Menu pointing stackable inverted>
        <Container>
          <NavLink exact to="/" activeClassName="active" >
            <Menu.Item name="Home" />
          </NavLink>
          <NavLink exact to="/films" activeClassName="active" >
            <Menu.Item name="films"/>
          </NavLink>
          <NavLink exact to="/people" activeClassName="active" >
            <Menu.Item name="people"/>
          </NavLink>
          <NavLink exact to="/species" activeClassName="active" >
            <Menu.Item name="species"/>
          </NavLink>
          <NavLink exact to="/planets" activeClassName="active" >
            <Menu.Item name="planets"/>
          </NavLink>
          <NavLink exact to="/starships" activeClassName="active" >
            <Menu.Item name="starships"/>
          </NavLink>
          <NavLink exact to="/vehicles" activeClassName="active" >
            <Menu.Item name="vehicles"/>
          </NavLink>
          {SwapiSearch && (
            <Menu.Item className="search" style={{ padding: '0' }}>
              <Suspense fallback={<div>Loading...</div>}>
                <SwapiSearch />
              </Suspense>
            </Menu.Item>
          )}
        </Container>
      </Menu>
    </>
  );
}