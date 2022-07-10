import React from 'react';

export default function About() {
  return (
    <div>
     {/* <!DOCTYPE html> */}
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    {/* <link rel="stylesheet" href="./assets/css/style.css"> */}
    <title>KhaiSpace</title> 
    
</head>

<body>
 
<header>
    <h1 href="/">Khai Truong</h1>
 
    <nav> 
        <ul>
            <li>
                <a href="#about-me">About me</a>
            </li>
            <li>
                <a href="#project">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact me</a>
            </li>
        </ul>
    </nav>
</header>

<section class="hero">
    <h3>Welcome to my space</h3>
</section>


<section id="about-me" class="about-me ">

   
        <div class="flex-row">
            <h2 class="section-title">About me</h2>
        </div>
<div class="about-con">

    <div class="port-img">
        {/* <img src="./assets/imges/khai.jpg" alt="Khai porfile picture"> */}
    </div>

    <div class="about-me-info">
        <p> Hello, my name is Khai Truong, I am learning to be a Web developer/ Full stack who can design and develop a clean and well layed out website from
            starch. I enjoy the process of making sites look aesthetically pleasing to the eye yet functional. I have a background in the arts such as 
            painting and photography which allows me to be creative and visualize a design that is captive to the human eye. Feel free to contact me for more info or just general questions.
        </p>     
    </div>
</div>
</section>


<section class="skill-icon">
    <div>
    <ul>
        {/* <li><img src="./assets/imges/html-icon.png" alt="html icon" > </li> */}
        {/* <li><img src="./assets/imges/css-icon.png" alt="CSS icon"> </li> */}
    </ul>
    </div>
</section>

<section id="project" class="project">
    
    <section class="section-title">
        <div class="flex-row">
            <h2>Projects</h2>
        </div>
     </section>
    



    <div class="container">
        <div class="box-big">
            <a href="https://therabbithole-blog.herokuapp.com/" >Tech Blog full stack</a>
        </div>

        <div class="box1">
            <a href="https://devnah4.github.io/Movieogs/" >Movie/book search /Web app with Api</a>
        </div>

        <div class="box1">
            <a href="https://teatyped.github.io/run-buddy/" target="blank">Mobile Responsive Website</a>
        </div>

        <div class="box1">
            <a href="https://teatyped.github.io/horiseon-inc/" target="blank">Info Lading Page</a>
        </div>

    </div>
   


</section>



<section id="contact" class="contact">

    <section class="section-title">
        <div class="flex-row">
            <h2>Contact me</h2>
        </div>
    </section>

    <div class="contact-form">
        <form>
            <label for contact-name>Your Name</label>
            <input type="text" id="contact-name" placeholder="Your Name" />

            <label for="contact-messages">Message</label>
            <textarea id="contact-message" placeholder="Message"></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
</section>


<footer>
    <h4> &copy;2022 Khai Truong</h4>
</footer>
</body>
</html>
    </div>
  )
}