import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaTwitter} from "react-icons/fa";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quoteArray: [
        {quote: "You sit on a throne of lies.", author: "Elf"}, {quote: "It's just a flesh wound.", author: "Monty Python and the Holy Grail"}, {quote: "Hello, my name is Inigo Montoya. You killed my father. Prepare to die.", author: "The Princess Bride"}, {quote: "Looks like I picked the wrong week to quit sniffing glue.", author: "Airplane"}, {quote: "Leave the gun. Take the cannoli.", author: "The Godfather"}, {quote: "So you’re telling me there’s a chance...", author: "Dumb and Dumber"}, {quote: "Exsqueeze me?", author: "Wayne's World"}, {quote: "Inconceivable!", author: "The PrincessBride"}, {quote: "I'm in a glass case of emotion!", author: "Anchorman"}, {quote: "Keep the change, ya filthy animal.", author: "Home Alone"}, {quote: "The dude abides.", author: "The Big Lebowski"}, {quote: "That escalated quickly.", author: "Anchorman"}, {quote: "I award you no points, and may God have mercy on your soul.", author: "Billy Madison"}, {quote: "Do you understand the words that are coming out of my mouth?!", author: "Rush Hour"}, {quote: "I'm about to do to you what Limp Bizkit did to music in the late '90s.", author: "Deadpool"}, {quote: "It's not a man purse. It's called a satchel. Indiana Jones wears one.", author: "The Hangover"}, {quote: "Don't point that gun at him. He's an unpaid intern.", author: "The Life Aquatic with Steve Zissou"}, {quote: "If I'm not back in five minutes, just wait longer.", author: "Ace Ventura in Ace Ventura: Pet Detective"}, {quote: "Thank you very little.", author: "Caddyshack"}, {quote: "Stupid is as stupid does", author: "Forrest Gump"}, {quote: "I know you. You know you. And I know you know that I know you.", author: "Dodgeball: A True Underdog Story"}],
      ranNum: Math.floor(Math.random() * 22)
    };
    this.difNum = this.difNum.bind(this);
  };

  difNum() {
    this.setState(state => ({ranNum: Math.floor(Math.random() * 22)}));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card id="quote-box" border="primary" style={{ width: 'calc(30rem + 1vmin)', height: 'calc(16rem + 2vmin)'}} bg={'primary'}>
            <Card.Text id="text">
              "{this.state.quoteArray[this.state.ranNum].quote}"
            </Card.Text>
            <Card.Text id="author">
              -{this.state.quoteArray[this.state.ranNum].author}
            </Card.Text>
            <Card.Footer>
              <Row>
                <Col sm={3}>
                  <Button id="tweet-quote" variant="danger" href="https://twitter.com/intent/tweet" target="_blank">
                    <FaTwitter/>
                  </Button>
                </Col>
                <Col sm={5}></Col>
                <Col sm={4}>
                  <Button id="new-quote" onClick={this.difNum} variant="light">New Quote</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </header>
      </div>
    );
  }
}


export default App;
