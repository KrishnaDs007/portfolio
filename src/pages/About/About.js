import Image from "../../utils/images";
import {
	FaDownload,
	FaFacebookSquare,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
	FaStackOverflow,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CV from "../../assets/Krishna_devashish_resume.pdf";

const About = () => {
	return (
		<section id='aboutSection' className='container about-container'>
			<div className='container__header'>About Me</div>
			<div className='about-container__details'>
				<div className='about-container__profile'>
					<img src={Image.ProfileFilledPic} alt='Krishn' />
				</div>
				<h1 className='about-container__details-name'>Krishn Devashish</h1>
				<div className='about-container__details-social'>
					<FaFacebookSquare />
					<FaInstagramSquare />
					<FaGithub />
					<FaStackOverflow />
					<FaXTwitter />
					<FaLinkedin />
				</div>
				<p className='about-container__details-basic'>
					I am Krishna Devashish, a Senior Software Developer specializing in UI/Frontend Development with over 6 years of experience in building scalable, high-performance web applications. My expertise lies in JavaScript, React, Redux, Webpack, jQuery, HTML, CSS, SCSS, and Bootstrap, with a strong focus on creating seamless, user-friendly interfaces.
					<br/>
					As a team leader and problem solver, I have successfully led UI teams, architected micro-frontend solutions, and optimized applications for better performance and scalability. I am passionate about writing clean, maintainable code, improving development workflows, and staying ahead with the latest frontend technologies.
					<br/>
					<br/>
					<b>What I Do</b>:
					<br/>
					✅ <b>Frontend Architecture</b> – Designing scalable UI solutions with modern frameworks.<br/>
					✅ <b>Performance Optimization</b> – Enhancing app efficiency with Webpack, caching strategies, and best coding practices.<br/>
					✅ <b>UI/UX Development</b> – Creating engaging user experiences with responsive, pixel-perfect designs.<br/>
					✅ <b>Team Leadership</b> – Mentoring developers and ensuring best practices in frontend development.<br/>
					✅ <b>Data Visualization</b> – Implementing dashboards and analytics using React-ChartJS2 and other libraries.<br/>
					<br/>
					<br/>
					With a track record of delivering high-quality, fast, and interactive web applications, I am always looking to innovate and push the boundaries of frontend development.
				</p>
				<a
					download='Krishn_Devashish_Resume.pdf'
					className='about-container__download-btn'
					target='_blank'
					rel='noreferrer'
					href={CV}
				>
					<FaDownload />
					Download resume
				</a>
			</div>
		</section>
	);
};

export default About;
