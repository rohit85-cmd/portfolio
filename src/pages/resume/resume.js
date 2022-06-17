import React from 'react'
import "./resume.css"

const Resume = () => {
	return (
		<div className="r">
			<h1>Resume</h1>
			<div className="r-wrapper">

				<div className="r-left">
					<div className="r-bg">
						<h2 className="r-title">Education
						</h2>
						<div className="r-desc">
							<h3 className="r-year">2019 - Present</h3>
							<p className="r-name">Walchand College Of Engineering, Sangli</p>
							<p className="r-info">Information Technology - 8.52 CGPA</p> 

							<h3 className="r-year">2018 - 2019</h3>
							<p className="r-name">Yeshwant Mahavidyalaya, Nanded</p>
							<p className="r-info">HSC - 84%</p>

							<h3 className="r-year">2016 - 2017</h3>
							<p className="r-name">Hutatma Pansare Highschool, Dharmabad</p>
							<p className="r-info">SSC - 90.20%</p>
						</div>
					</div>

					<div className="r-bg">
						<h2 className="r-title">Position of Responsibility
						</h2>
						<div className="r-desc">
							<h3 className="r-year">June 2021 - Present</h3>
							<b>Web Developer at</b>
							<p className="r-name">Student's Association of Information Technology</p>
							<p className="r-info"><li>Developed and maintaining website of the club.</li> </p>
							<p className="r-info"><li>Delivered the technical sessions in the club.</li></p>
						</div>
					</div>
				</div>


				<div className="r-right">
					<div className="r-bg">
						<h2 className="r-title">Professional Skillset
						</h2>
						<div className="r-desc">
							<h3 className="r-skill">Programming Langauges</h3>
							<p className="r-info">&emsp;&emsp;&emsp;&emsp;C, C++, Java, Python</p><br />

							<h3 className="r-skill">Web Development</h3>
							<p className="r-info">&emsp;&emsp;&emsp;&emsp;HTML, CSS, JavaScript, React.js</p><br />

							<h3 className="r-skill">Databases</h3>
							<p className="r-info">&emsp;&emsp;&emsp;&emsp;MySQL, Firebase</p><br />
						</div>
					</div>

					<div className="r-bg">
						<h2 className="r-title">Languages
						</h2>
						<div className="r-desc">
							<h3 className="r-language">Languages Known</h3>
							<p className="r-info">
								<li>Hindi</li>
								<li>English</li>
								<li>Marathi</li>
								<li>Telugu</li>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume
