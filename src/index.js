import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import Particles from "react-particles-js";
import "./index.css";
import projects from "./projects.json";

class Document extends React.Component {
	render() {
		return (
			<div className="document">
				<SideBar data={projects} />
				<Page />
			</div>
		);
	}
}

class SideBar extends React.Component {
	render() {
		return (
			<div className="sideBar">
				<a href="#page"> About Me </a>
				<p> Projects: </p>
				{this.props.data.map(function (element, i) {
					return (
						<a key={i} href={"#" + element.name}>
							{" "}
							{element.name}
						</a>
					);
				})}
			</div>
		);
	}
}

class Page extends React.Component {
	render() {
		return (
			<div id="page">
				<Title />
				<About />
				<ContentList data={projects} />
			</div>
		);
	}
}

class Title extends React.Component {
	render() {
		return (
			<div id="TitleBar">
				<div id="Slider"></div>
				<img id="TitleImage" src="./Images/Title.svg" alt=""></img>
			</div>
		);
	}
}

class About extends React.Component {
	goToProjects() {
		var aboutSection = document.getElementById("About-Section");
		window.scrollTo(0, aboutSection.offsetTop + aboutSection.offsetHeight);
	}

	goToGithub() {
		window.open("https://github.com/CalebBrett/", "_newtab");
	}

	goToLinkedIn() {
		window.open("https://www.linkedin.com/in/caleb-brett/", "_newtab2");
	}

	render() {
		return (
			<div id="About-Section">
				<Particles className="particles" params={particleOptions} />
				<div id="About">
					<div id="About-Grid">
						<img id="portrait" src="./Images/Portrait.jpg" alt="" />
						<h1>
							<u>About Me</u>
						</h1>
						<p>
							I am a <b>Mechatronics Engineering</b> graduate from the
							University of Waterloo. I <b>started programming in 2012</b> and
							am skilled in many areas such as{" "}
							<b>full stack, mobile, desktop and firmware development</b>. I use
							a variety of programming languages and I'm always learning more. I
							am continually looking for opportunities to expand my knowledge in
							all areas. Currently I would like to focus on{" "}
							<b>mechanical and electrical design</b> as these two areas
							fascinate me the most. I am doing this by working on woodworking
							and PCB design projects. I enjoy playing a variety of sports and
							outdoor activities. I am a passionate, enthusiastic, problem
							solver with excellent collaborative and interpersonal skills.
						</p>
						<div id="Links">
							<button onClick={this.goToProjects}>
								<img src="./Images/arrow.svg" alt="" /> Projects
							</button>
							<button onClick={this.goToGithub}>
								<img src="./Images/github.svg" alt="" /> GitHub
							</button>
							<button onClick={this.goToLinkedIn}>
								<img src="./Images/linkedin.svg" alt="" /> LinkedIn
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class ContentList extends React.Component {
	render() {
		return (
			<div className="content">
				{this.props.data.map(function (element, i) {
					return (
						<div className="contentItem" key={i}>
							<ContentElements
								name={element.name}
								extension={element.extension}
								landscape={element.landscape}
								isUnder={element.isUnder}
								tools={element.tools}
								data={element.blerb}
								number={i}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

class ContentElements extends React.Component {
	render() {
		let reverseClass = "reverse ";
		let landscapeClass = "landscape";
		let isUnderClass = " under";
		if (this.props.isUnder == false) {
			isUnderClass = "";
		}
		if (this.props.landscape == false) {
			landscapeClass = "";
		}
		if (this.props.number % 2 === 0) {
			reverseClass = "";
		}

		return (
			<div
				className={
					"contentElement " + reverseClass + landscapeClass + isUnderClass
				}
				id={this.props.name}
			>
				<h1 align="centered">
					<u>{this.props.name}</u>
				</h1>
				{displayMedia(this.props.name, this.props.extension)}
				<ul>{displayTools(this.props.tools)}</ul>
				<pre>{textFormatting(this.props.data)}</pre>
			</div>
		);
	}
}

function displayTools(tools) {
	if (tools != null) {
		let toolsLI = [];
		const toolsList = tools.split(",");
		for (let i = 0; i < toolsList.length; i++) {
			toolsLI.push(<li>{toolsList.at(i)}</li>);
		}
		return toolsLI;
	}
}

function displayMedia(name, extension) {
	if (extension != null) {
		if (extension === ".mp4")
			return (
				<ReactPlayer
					className="media"
					width="100%"
					alt=""
					url={"./Images/" + name + extension}
					playing
					loop
					controls
					muted
				/>
			);
		else
			return (
				<img
					className="media"
					width="100%"
					src={"./Images/" + name + extension}
					alt=""
				/>
			);
	}
}

function textFormatting(text) {
	let lines = text.split("\n");
	let elements = [];
	let linkData;
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].charAt(0) === "\t") {
			//Add links
			elements.splice(-1);
			linkData = lines[i].split("\t");
			elements.push(
				<a href={linkData[1]} target="_blank" rel="noopener noreferrer">
					{linkData[2]}
				</a>,
			);
			lines[i] = linkData[3];
		} else if (lines[i].charAt(0) === "\r") {
			//Add highlighted word
			elements.splice(-1);
			linkData = lines[i].split("\r");
			elements.push(<b>{linkData[1]}</b>);
			lines[i] = linkData[2];
		}
		elements.push(lines[i]);

		if (i < lines.length - 1) {
			//Add line breaks
			elements.push(<br key={i} />);
		}
	}
	return elements;
}

const particleOptions = {
	particles: {
		number: {
			value: 80,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: "#ff9e64",
		},
		shape: {
			type: "star",
			stroke: {
				width: 0,
				color: "#ff9e64",
			},
			polygon: {
				nb_sides: 7,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 200,
			color: "#ff9e64",
			opacity: 0.4,
			width: 2,
		},
		move: {
			enable: true,
			speed: 0.4,
			direction: "bottom",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
		},
	},
};

// ========================================

ReactDOM.render(<Document />, document.getElementById("root"));
