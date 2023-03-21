import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function Vehicles({ data }) {
  return (
    <>
      <h2>Vehicles</h2>
      <Grid centered stackable columns={3}>
        {data.map((vehicles, i) => {
          console.log(vehicles);
          return (
            <Grid.Column key={i}>
              <Card centered color='yellow'>
                <Card.Content>
                  <Card.Header>{vehicles.name}</Card.Header>
                  <Card.Description>
                    <strong>Official model name</strong>
                    <p>{vehicles.model}</p>
                    <strong>Starship class</strong>
                    <p>{vehicles.vehicle_class}</p>
                    <strong>Manufacturer </strong>
                    <p>{vehicles.manufacturer}</p>
                    <strong>Cost in galactic credits </strong>
                    <p>{vehicles.cost_in_credits}</p>
                    <strong>Max atmosphering speed</strong>
                    <p>{vehicles.max_atmosphering_speed}</p>
                    <strong>Consumables</strong>
                    <p>{vehicles.consumables}</p>
                    <strong>Crew</strong>
                    <p>{vehicles.crew}</p>
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
