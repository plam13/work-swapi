import React from "react";
import { Card, Grid } from "semantic-ui-react";

export default function Films({ data }) {
  return (
    <>
      <h2>Films</h2>
      <Grid centered stackable columns={3}>
        {data.map((films, i) => {
          return (
            <Grid.Column key={i}>
              <Card centered color="yellow">
                <Card.Content>
                  <Card.Header header>{films.title}</Card.Header>
                  <Card.Description>
                    <span class="ui small label">Opening crawl</span>
                    <p>{films.opening_crawl}</p>
                    <span class="ui small label">Director</span>
                    <p>{films.producer}</p>
                    <span class="ui small label">Release date</span>
                    <p>{films.release_date}</p>
                    <span class="ui small label">Planets</span>
                    <ul>{films.planets.map((planet, index) => (
                      <li key={index}>
                        <a href={planet} target="_blank" rel="noreferrer">{planet}</a>
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
