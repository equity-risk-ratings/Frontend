import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CharacterCard({ cryp }) {
  return (
    <Card>
      <Image src={cryp.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{cryp.name}</Card.Header>
        <Card.Meta>{cryp.species}</Card.Meta>
        <Card.Description>{cryp.location.name}</Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <a href='#'>
          <Icon name="user" />
          episodes
        </a>
      </Card.Content> */}
    </Card>
  );
}
