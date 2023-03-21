import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function People({ data }) {
  return (
    <>
      <h2>Peoples</h2>
      <Grid centered stackable columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color="yellow">
                <Card.Content>
                  <Card.Header header>{people.name}</Card.Header>
                  <Card.Description>
                    <span class="ui small label">Height</span>
                    <p>{people.height}</p>
                    <span class="ui small label">Mass</span>
                    <p>{people.mass}</p>
                    <span class="ui small label">Hair Color</span>
                    <p>{people.hair_color}</p>
                    <span class="ui small label">Eye Color</span>
                    <p>{people.eye_color}</p>
                    <span class="ui small label">Height</span>
                    <p>{people.height}</p>
                    <span class="ui small label">PLay in Films</span>
                    <ul>{people.films.map((film, index) => (
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
  );
}
