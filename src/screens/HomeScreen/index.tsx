import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { View, Image, StyleSheet } from 'react-native';
import LikeButton from 'components/LikeButton'

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
})

const HomeScreen = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Card>
            <Card.Cover source={require('assets/cloud.png')} />
            <Card.Content>
              <Text>My cloud.</Text>
            </Card.Content>
            <Card.Actions>
              <LikeButton count={0} hasLiked={false} />
            </Card.Actions>

            <Card.Cover source={require('assets/chick.jpg')} />
            <Card.Content>
              <Text>chick chick:)</Text>
            </Card.Content>
            <Card.Actions>
              <LikeButton count={0} hasLiked={false} />
            </Card.Actions>

            <Card.Cover source={require('assets/sky.jpg')} />
            <Card.Content>
              <Text>Sky in game</Text>
            </Card.Content>
            <Card.Actions>
              <LikeButton count={0} hasLiked={false} />
            </Card.Actions>
          </Card>

        </View>
      </Content>
    </Container>

  )
}

export default HomeScreen
