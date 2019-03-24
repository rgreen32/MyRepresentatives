import React, {Component} from 'react';

export default class Home extends Component{
    render(){

       return( <div>
         
    
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">My Representatives</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#home">home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#addons">Addons</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">about</a>
            </li>
			 <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team">Team</a>
            </li>
			
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>Find. Follow. Engage</strong>
            </h1>
            <hr></hr>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">Publishers & Developers Enable your users to find and give feedback too in just a few easy steps!</p>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#addons">Find Out More</a>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-primary" id="addons">
      <div class="container">
        <div class="row">
		<div class="col-lg-8 mx-auto text-center">       
			<h2 class="section-heading text-white">Three simple steps</h2>
         <div class="col-lg-8 mx-auto text-left">         
            <hr class="light my-4"/>
            {/* <p class="text-faded mb-4"> */}
			<ol>
			<li class="section-heading text-white">Insert a MyRepresentatives button on your site.</li>
			<li class="section-heading text-white">Link to (MyRepresentatives URL).</li>
			<li class="section-heading text-white">Celebrate because you're done</li>
			</ol>
		<div class="col-lg-8 mx-auto text-center">        
			<br/>
			<img src="images/MyRepsbutton.jpeg" alt="MyRepsButton"/>
			<img src="images/MyRepssquarebutton.jpeg" alt="MyRepsButton" height= "60px" width="60px"/>
			
			<br/>
		<p  class="section-heading text-white">Or enter your address below to find and give feedback to your elected officials:</p> 
		<br/>
		<br/>
		<input type="text" name="address" value="address"/><br/>

		<br/><br/>
        <a class="btn btn-primary btn-lg" href="#">Submit &raquo;</a>
		
		
		

			<a class="btn btn-light btn-xl js-scroll-trigger" href="#about.html">More About My rep</a>
          </div>
        </div>
      </div> 
      </div>
      </div>
    </section>
	
	
	
	
	
	
	<section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">About My Represenatives</h2>
			<p> Connecting constituents with their representatives and providing civic-engagement 
			tools to news and advocacy organizations for free</p>
            <hr class="my-4"/>
			
			
     
	 <h2>Our Mission</h2><br/>
      <p> We’re a team of volunteers dedicated to making the democratic process more democratic.
		We’re focused on making it easy for:
		<br/>Constituents to find and give feedback to their elected officials. Instead of having to search on Google to find a site to give feedback, our goal is to be wherever you are.<br/>
		<br/>Publishers to not just enrage their audiences about injustices, but to provide civic-engagement tools so your users can take action.<br/>
		<br/>Civic advocacy organizations to empower their members to reach out to their legislators to speak out on issues of concern.<br/>
	</p> 
      

          </div>
        </div>
      </div>
    </section>
	
	



<section class="bg-primary" id="team">
      <div class="container">
        <div class="row">
		  <div class="col-lg-8 mx-auto text-left">
            <h1 class="section-heading text-white"> Meet the Team </h1>



<div class="container">
<br/><br/>
<div class="slideshow-container">

<div class="mySlides text-white">
<h3>Joey Brown</h3>
  <q>Senior developer, architect and devops dude.</q>
</div>

<div class="mySlides text-white">
<h3> Ray Green</h3>
  <q>Lead Developer and 2018 Code Crew graduate.</q>
</div>

<div class="mySlides text-white">
<h3> Kshara Bass </h3>
  <q>Lead Designer and 2018 University of Memphis graudate currently working as a data analyst while pursuing her passion to combine programming, 
  analystics and design skills to develop online and mobile experiences that beautifully solve people's problems</q>
</div>

<div class="mySlides text-white">
<h3> Christine Lee </h3>
  <q>Developer and analytics guru. In the process of completing her master's degree 
  in Information Techonology from the univerity of memphis.</q>
</div>

<div class="mySlides text-white">
<h3> Felix Aguilar </h3>
  <q>Air Force vetern, technical writer and visual dsigner, responsible for developing the My Represenative logo.</q>
</div>

<div class="mySlides text-white">
<h3> Sernen Mireles </h3>
  <q>UX design mentor , sharing her many years of UX expertise with the team.</q>
</div>

<div class="mySlides text-white">
<h3> Ryan Wold </h3>
  <q>Founder Hurisdictional and advisor, providing insight into the Google API, civic data and other insights as needed.</q>
</div>

<div class="mySlides text-white">
<h3> Kevin Mireles </h3>
  <q>Gen X slacker and product manager.</q>
</div>




<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>

<div class="dot-container">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 
  <span class="dot" onclick="currentSlide(5)"></span> 
  <span class="dot" onclick="currentSlide(6)"></span> 
  <span class="dot" onclick="currentSlide(7)"></span> 
  <span class="dot" onclick="currentSlide(8)"></span>   
  
</div>
</div>
</div>
</div>
</div>
</section>






	  
	  
	  
	  
	  
	

 
 


    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading">Contact us!</h2>
            <hr class="my-4"/>
            <p class="mb-5">Feel free to contact us and we'll get back to you.</p>
				<i class="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
				<p>
				<a href="mailto:your-email@your-domain.com">Email@MyRepresentatives.com</a>
				</p>
			
        </div>
      </div>
      </div>
    </section>
	
	

	
	
	
	

    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; My Representatives 2019</p>
      </div>
      
    </footer>
	
	

  </div>)
    }
}