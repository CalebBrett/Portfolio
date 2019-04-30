import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import Particles from 'react-particles-js'
import './index.css';

class Document extends React.Component
{
	render()
	{
		return(
			<div className="document">
				<Title/>
				<About/>
				<ContentList data={[
				{name: 'Chess Robot', extension: '.mp4', blerb:'          I along with two of my classmates built a robot that plays chess with you. The robot can accurately navigate the board, pick up the pieces and preform complex moves such as castling. It is also able to detect where the pieces are on the board and make a move \n\rautonomously\r.\n          We used a Lego NXT kit and laser cut gear tracks to build the robot. \n\rRobotC\r was used to program the movements in the NXT brick and to connect the brick via Bluetooth to an app. We made the app in \n\rJava\r using \n\rAndroid Studio\r. The app was divided into three parts: Bluetooth communications, computer vision and the neural network. I made the \n\rcomputer vision\r using \n\rOpenCV\r. My part of the app would take a picture and detect what colors were present and where they were in the image. Colors were painted on the top of each piece so I could convert this information into an output string which contained the location and type of piece present on the board. This output string was fed into a \n\rcustom neural network\r that my classmate made, where the next best move would be calculated. The neural network would output this move as a command that our RobotC program could interpret. Finally, the command was given to the \n\rBluetooth\r communications part of the app where it was then sent to the robot to be executed.'},
				{name: 'ecoSphere', extension: '.png', blerb:'          This was a project for the hackathon \n\thttps://www.facebook.com/events/Networking/ecoding-hacks/2003209586428199/\tECOding Hacks\t. EcoSphere is an \n\randroid app\r that encourages people to recycle through fun animations and pictures. Users are presented with a virtual environment that is polluted. In order to clean up the pollution they must recycle in real life. Each time they \n\rrecycle in real life\r they can press the recycle bin button on the app to increase their score. As your score increases the environment brightens up, the fish come back to life and the garbage goes away. In other words, users can see this virtual environment being cleaned as they continue to report that they have recycled.\n          This was \n\rmy first hackathon\r and I had a ton of fun. Even though we only had \n\r7 hours\r to come up with an idea and create a prototype we were able to make this app. I had to learn how to program using \n\rLua\r during the hackathon which was a fun challenge to face while under a time constraint. EcoSphere came close to winning in its category, so close that the organizers created an \n\rhonorable mention\r just for our project as usually they would only announce the winners of each category.\n          This application was built primarily with \n\rCorona SDK\r, but the graphics were made in \n\rAdobe Photoshop\r. Corona SDK uses the programming language Lua and allowed me to quickly create and emulate a \n\rmobile application\r.'},
				{name: 'Pong', extension: '.jpg', blerb:'          I made this game using \n\rJavaScript\r. This was my first program built using JavaScript, so I started by making a basic game of Pong and then adding extra features. I added \n\rsingle player\r and \n\rmultiplayer\r modes that you can switch between by pressing the "1" and "2" keys. I also added the ability to pause the game when you press "p". As well as some small features such as changing background colors and sounds that will play when you hit the ball. The “w”, “s” and arrow keys move the paddles. If you would like to play, \n\thttps://calebbrett.github.io/Pong/PongRetroWColor.html\tclick here\t.'},
				{name: 'Camera Mount', blerb:'          I built a motorized pan and tilt camera mount that is controlled by an Arduino, C#, C++ and OpenCV. The \n\rOpenCV\r program was written in \n\rC++\r. This program contains the \n\rGUI\r, buttons for control and a display to show the input from the camera. The control data is sent form this program to a \n\rC#\r program which serializes the data and sends it to the \n\rArduino\r. The Arduino then moves the motors to the appropriate position.'},
				{name: 'Tip n Tilt', blerb:'          This is the first \n\rmobile application\r I built. The controls for the game are tilting and taping. Tilting your phone one way or the other causes the smiley face to roll in that direction. Tapping on the side of the screen will cause the character to jump in that direction. The goal of the game is to gain as many points as possible by rolling down the \n\rprocedurally generated map\r while avoiding the spikes.\n          I built this using the \n\rUnity game engine\r and \n\rC#\r. I wanted to try incorporating many things I did not have experience with. So, when designing the app, I wanted to try to use different input methods like tilting. I also wanted to make a procedurally generated map so that the game could be played for a long time and the level would keep changing. This app was on the \n\rGoogle Play store\r for a few years but due to a policy change it was taken off.'},
				{name: 'Raft', extension: '.jpg', blerb:'          I designed and built a raft to leave out on the river so that my family could swim to it and jump off in the summer. I used wooden boards to make the frame, plastic barrels to make it float and metal straps to keep the barrels secured to the frame. It is about 12x12 feet and uses 6 barrels to stay afloat. I designed the raft so that the boards on top of the frame are removeable. This made the raft much lighter and easier to transport.'}
				]}/>
			</div>
		);
	}
}

class Title extends React.Component
{
	render()
	{
		return(
			<div id="TitleBar">
				<div id="Slider"></div>
				<img id="TitleImage" src="./Images/Title.svg" alt="NO"></img>
			</div>
		);
	}
}

class About extends React.Component
{

	goToProjects()
	{
		var aboutSection = document.getElementById('About-Section');
		window.scrollTo(0, aboutSection.offsetTop + aboutSection.offsetHeight); 
	}

	goToGithub()
	{
		window.open("https://github.com/CalebBrett/",'_newtab');
	}

	goToLinkedIn()
	{
		window.open("https://www.linkedin.com/in/caleb-brett/", '_newtab2');
	}

	render()
	{
		return(
			<div id="About-Section">
				<Particles className='particles' params={particleOptions}/>
				<div id="About">
					<img id="portrait" src="./Images/Portrait.png" alt=""/>
					<h1><u>About Me</u></h1>
					<p>I am a <b>Mechatronics Engineering</b> student at the University of Waterloo. I have <b>7 years</b> of programming experience, most of which is self-taught. I am a skilled <b>full stack and desktop developer</b>. I can use a variety of programming languages including <b>Java, C#, C++, Visual Basic, Javascript, SQL and many more</b>. I am also interested in hardware, so I have created many circuits from scratch as well as with microcontrollers such as Arduino. I enjoy playing a variety of sports and outdoor activities. My favorites are sailing, surfing, running, skiing and camping. I am always looking for opportunities to expand my knowledge and <b>learn new things</b>. Currently, I am focusing on gaining more experience with <b>Mechanical Design</b> and <b>Hardware</b>. I am a passionate, enthusiastic, problem solver with excellent collaborative and interpersonal skills.</p>
					<div id="Links">
						<button onClick={this.goToProjects}><img src="./Images/arrow.svg" alt=""/>   Projects</button>
						<button onClick={this.goToGithub}><img src="./Images/github.svg" alt=""/>   GitHub</button>
						<button onClick={this.goToLinkedIn}><img src="./Images/linkedin.svg" alt=""/>   LinkedIn</button>
					</div>
				</div>
			</div>
		);
	}
}

class ContentList extends React.Component
{
	render()
	{
		return(
			<div  className="content">
					{this.props.data.map(function(element, i){
						return(
						<div className="contentItem" key={i}>
								<ContentElements name={element.name} extension={element.extension} data={element.blerb} number={i}/>
						</div>)
					})}
			</div>
		);
	}
}

class ContentElements extends React.Component
{
	render()
	{
		let textStyle = { float: 'left',};
		let mediaStyle = { float: 'right', marginLeft: '5%'};
		if(this.props.number % 2 === 0)
		{
			textStyle = { float: 'right',};
			mediaStyle = { float: 'left', marginRight: '5%'};
		}

		return(
			<div className="contentElement">
				<h1 align="centered"><u>{this.props.name}</u></h1>
				{displayMedia(this.props.name, mediaStyle, this.props.extension)}
				<pre style={textStyle}>{textFormatting(this.props.data)}</pre>
			</div>
		);
	}
}

function displayMedia(name, mediaStyle, extension)
{
	if(extension != null)
	{		
		if(name === "Chess Robot")
			return <ReactPlayer height="30vw" width="30%" style={mediaStyle} alt="" url={"./Images/" + name + extension} playing loop controls muted/>;
		else
			return <img id={name + "-img"} width="30%" style={mediaStyle} src={"./Images/" + name + extension} alt=""/>
	}
}

function textFormatting(text) 
{
    let lines = text.split('\n');
    let elements = [];
    let linkData;
    for (let i = 0; i < lines.length; i++) 
    {
        if (lines[i].charAt(0) === '\t')		//Add links
        {
			elements.splice(-1);
        	linkData = lines[i].split('\t')
        	elements.push(<a href={linkData[1]} target="_blank" rel="noopener noreferrer">{linkData[2]}</a>);
        	lines[i] = linkData[3]
        }
        else if (lines[i].charAt(0) === '\r')		//Add highlighted word
        {
			elements.splice(-1);
        	linkData = lines[i].split('\r')
        	elements.push(<b>{linkData[1]}</b>);
        	lines[i] = linkData[2]
        }
        elements.push(lines[i]);
        
     	if (i < lines.length-1) 		//Add linebreaks
        {
        	elements.push(<br key={i}/>);
        }
    }
    return elements;
}

function fadeInContent()
{
	if( contentItemsIndex < elementsInPage.length && window.pageYOffset + (window.innerHeight/8)*7 >= elementsInPage[contentItemsIndex].offsetTop)
	{
		elementsInPage[contentItemsIndex].style.animationPlayState = "running";
		contentItemsIndex++;		
	}
}
var contentItemsIndex = 0;
var elementsInPage = document.getElementsByClassName('contentItem')
window.onscroll = fadeInContent;
window.onload = fadeInContent;

const particleOptions = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#FFFFFF"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#FFFFFF"
      },
      "polygon": {
        "nb_sides": 7
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#FFFFFF",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 0.4,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  }
}

// ========================================

ReactDOM.render(
  <Document />,
  document.getElementById('root')
);