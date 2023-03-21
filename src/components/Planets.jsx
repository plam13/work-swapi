import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function Planets({ data }) {
  return (
    <>
      <h2>Planets</h2>
      <Grid centered stackable columns={3}>
        {data.map((planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color='yellow'>
                <Card.Content>
                  <Card.Header>{planets.name}</Card.Header>
                  <Card.Description>
                    <span class="ui small label">Climate</span>
                    <p>{planets.climate}</p>
                    <span class="ui small label">Diameter</span>
                    <p>{planets.diameter}</p>
                    <span class="ui small label">Terrain</span>
                    <p>{planets.terrain}</p>
                    <span class="ui small label">Surface water</span>
                    <p>{planets.surface_water}</p>
                    <span class="ui small label">Population</span>
                    <p>{planets.population}</p>
                    <span class="ui small label">Residents</span>
                    <ul>{planets.residents.map((resident, index) => (
                      <li key={index}>
                        <a href={resident} target="_blank" rel="noreferrer">{resident}</a>
                      </li>
                    ))}
                    </ul>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  )
}