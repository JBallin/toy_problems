import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = props => (
  <Card>
    <Image src='/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{props.color}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default UserCard
