import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function Starships({ data }) {
  return (
    <>
      <h2>Starships</h2>
      <Grid centered stackable columns={3} className="starships">
        {data.map((starships, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color='yellow'>
                <Card.Content>
                  <Card.Header> {starships.name}</Card.Header>
                  <Card.Description>
                    <span class="ui small label">Official model name</span>
                    <p>{starships.model}</p>
                    <span class="ui small label">Starship class</span>
                    <p>{starships.starship_class}</p>
                    <span class="ui small label">Manufacturer</span>
                    <p>{starships.manufacturer}</p>
                    <span class="ui small label">Cost in galactic credits</span>
                    <p>{starships.cost_in_credits}</p>
                    <span class="ui small label">Hyperdrive rating</span>
                    <p>{starships.hyperdrive_rating}</p>
                    <span class="ui small label">Consumables</span>
                    <p>{starships.consumables}</p>
                    <span class="ui small label">MGLT</span>
                    <p>{starships.MGLT}</p>
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