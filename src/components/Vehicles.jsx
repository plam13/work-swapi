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
                    <span className="ui small label">Official model name</span>
                    <p>{vehicles.model}</p>
                    <span className="ui small label">Vehicle class</span>
                    <p>{vehicles.vehicle_class}</p>
                    <span className="ui small label">Manufacturer</span>
                    <p>{vehicles.manufacturer}</p>
                    <span className="ui small label">Cost in galactic credits</span>
                    <p>{vehicles.cost_in_credits}</p>
                    <span className="ui small label">Max atmosphering speed</span>
                    <p>{vehicles.max_atmosphering_speed}</p>
                    <span className="ui small label">Consumables</span>
                    <p>{vehicles.consumables}</p>
                    <span className="ui small label">Crew</span>
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
