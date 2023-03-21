import React from 'react'
import { Card, Grid } from "semantic-ui-react";

export default function Species({ data }) {
  return (
    <>
      <h2>Star Wars Species</h2>
      <Grid centered stackable columns={3}>
        {data.map((species, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color='yellow'>
                <Card.Content>
                  <Card.Header>{species.name}</Card.Header>
                  <Card.Description>
                    <span class="ui small label">Classification</span>
                    <p>{species.classification}</p>
                    <span class="ui small label">Designation</span>
                    <p>{species.designation}</p>
                    <span class="ui small label">Language </span>
                    <p>{species.language}</p>
                    <span class="ui small label">Average height</span>
                    <p>{species.average_height}</p>
                    <span class="ui small label">Average lifespan in years</span>
                    <p>{species.average_lifespan}</p>
                    <span class="ui small label">Eye colors</span>
                    <p>{species.eye_colors}</p>
                    <span class="ui small label">Hair colors</span>
                    <p>{species.hair_colors}</p>
                    <span class="ui small label">Films</span>
                    <ul>{species.films.map((film, index) => (
                      <li key={index}>
                        <a href={film} target="_blank" rel="noreferrer">{film}</a>
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