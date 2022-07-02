//Onload function
function loadContent(){
	getImages(); //Modal of Images of posts when clicked
	getWorkDetails(); //Work Details in About Tab
	getLocationDetails(); //Location Details in About Tab
	getSkillDetails(); //Skills in About Tab
	getInfoTabDetails(); //Projects Tab Details
	getContactTabDetails(); //Contacts Tab
	getConnectionDetails(); //Kept after Contacts Tab to fetch social connections details
	getTipsTabDetails(); //React Tips Tab
	setInterval(checkPosition,500); //For animation of skills
	window.location.href="#profileName";
}

//For animation of skills and goToTop Button
function checkPosition(){
	//Skills Details
	var skills=document.getElementsByClassName("skillLine");
	if(document.getElementById("skillDetails").offsetTop<window.pageYOffset+window.innerHeight){
		for(var a=0;a<skills.length;a++){
			skills[a].style.display="flex";
		}
	}else{
		for(var a=0;a<skills.length;a++){
			skills[a].style.display="none";
		}
	}
	//Go to Top Button	
	var goUpButton=document.getElementById("goUpButton").classList;
	(window.pageYOffset>500) ? goUpButton.remove("nodisplay") : goUpButton.add("nodisplay");
}

//All images of posts as modal
function getImages(){
	let projectImages=[];
	let projectsDetails=JSON.parse(projects);
	//Add profilePic and profileCover Pic to the end of other posts
	projectsDetails.push({"name":"profile", "contentID":"profilePic"},{"name":"profileCover", "contentID":"profileCover"});
	projectsDetails.map((item,id) => {
		projectImages=projectImages+'<div id="'+item.name+'PicModal" class="outsideModal" onclick="hideImage()">'+
	    '<img class="imageModal" src="images/'+item.name+'Pic.png">'+
	  '</div>';
	});
	document.getElementById("bigImages").innerHTML=projectImages;
}
function showImage(image){
	document.getElementById(image+"Modal").style.display="block";
}
function hideImage(){
	var modals=document.getElementsByClassName("outsideModal");
	for(var i=0;i<modals.length;i++){
	  modals[i].style.display="none";
	}
}

//Toggle tabs and its content
function openTabs(tabName, evt) {
	window.location.href="#profileName";
	var i, tabcontent, tabsNav;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tabsNav = document.getElementsByClassName("profileNavsubDiv");
	for (i = 0; i < tabsNav.length; i++) {
	  tabsNav[i].classList.remove("currentTabNav");
	}
	document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName+"Nav").classList.add("currentTabNav");
}

//Like and comment button
function postAction(id,type){
	if(document.getElementById(id+type+"ButtonText").innerHTML==type){
		document.getElementById(id+type+"Button").classList.add('likedButton');
		document.getElementById(id+type+"ButtonText").innerHTML=="Like" ? document.getElementById(id+type+"ButtonText").innerHTML=type+"d" : document.getElementById(id+type+"ButtonText").innerHTML=type+"ed";
	}else{
		document.getElementById(id+type+"Button").classList.remove('likedButton');
		if(type=="Like"){document.getElementById(id+type+"ButtonText").innerHTML="Like";}
		else if(type=="Comment"){document.getElementById(id+type+"ButtonText").innerHTML="Comment";}
	}
}

//Skills in About Tab
function getSkillDetails(){
	var skillMap=[];
	var skillsDetails=JSON.parse(skills);
	skillsDetails.map((item,id) => {
		skillMap=skillMap+'<div class="aboutLine skillLine">'+
	        '<img title="'+item.title+'" class="subIcon" src="images/'+item.icon+'.png" alt="icon">'+
	        '<div>'+
	          '<div class="workPeriod">'+item.name+'<span class="smallDot"></span>'+item.review+'</div>'+
	          '<progress title="'+item.score+'%" value="'+item.score+'" max="100">'+
	        '</div>'+
	    '</div>';
	});
	document.getElementById("skillDetails").innerHTML=skillMap;
}

//Connection icons in Contact Tab
function getConnectionDetails(){
	var connectionMap=[];
	var connectionsDetails=JSON.parse(connections);
	connectionsDetails.map((item,id) => {
		connectionMap=connectionMap+
		'<a target="_blank" title="'+item.title+' | Nikhil Shakohi" href="'+item.link+'"><img class="subIcon animateIcon" src="images/'+item.title+'Icon.png" alt="icon"></a>';
	});
	document.getElementById("connectionDetails").innerHTML=connectionMap;
	document.getElementById("connectionDetailsInContact").innerHTML=connectionMap;
}

//Work Details in About Tab
function getWorkDetails(){
	var workMap=[];
	var worksDetails=JSON.parse(works);
	worksDetails.map((item,id) => {
		workMap=workMap+
		'<div class="aboutHeading">'+item.type+'</div>'+
          '<div class="aboutLine moveUp workDetails">'+
            '<img class="'+item.class+'" src="images/'+item.icon+'.png">'+
            '<div>'+
              item.designation+
              '<div class="workPeriod">'+item.period+'</div>'+
            '</div>'+
          '</div>';
	});
	document.getElementById("workDetails").innerHTML=workMap;
}

//Location Details in About Tab
function getLocationDetails(){
	var locationMap=[];
	var locationsDetails=JSON.parse(locations);
	locationsDetails.map((item,id) => {
		locationMap=locationMap+
		'<div class="aboutLine moveUp locationDetails">'+
	        '<img class="subIcon" src="images/'+item.icon+'.png">'+
	        '<div>'+
	          item.city+
	          '<div class="workPeriod">'+item.period+'</div>'+
	        '</div>'+
	    '</div>';
	});
	document.getElementById("locationDetails").innerHTML=locationMap;
}

//Project Details
function getInfoTabDetails(){
	var projectsMap=[];
	var projectsDetails=JSON.parse(projects);
	projectsDetails.map((item,id) => {
		projectsMap=projectsMap+
		'<div class="indtabcontent moveUp">'+
			  '<div class="aboutLine">'+
				    '<img class="subIcon postIcon" src="images/profilePic.png">'+
				    '<div class="postHeading"> #'+id+' '+
				      item.heading+
				      '<div class="smallWorkPeriod">'+item.date+'</div>'+
			    '</div>'+
			  '</div>'+
			  '<div>'+
			      item.content+
			      '<br><br><img class="postImage" src="images/'+item.name+'Pic.png" onclick="showImage(\''+item.name+'Pic\')" alt="Project Picture">'+
			      '<div class="postRefActionButtonsDiv"><div class="postRefLanguages">Languages used: <span class="langauagesUsed">'+item.languages+'</span></div><div class="postRefActionButton"><a class="postRefActionButtonA" href="'+item.link+'" target="_blank">Visit Website</a><a class="postRefActionButtonB" href="'+item.githubLink+'" target="_blank">GitHub Code</a></div></div>'+
			      '<div class="actionBar">'+
				        '<div class="likeButton" id="'+item.contentID+'LikeButton" onclick="postAction(\''+item.contentID+'\',\'Like\')">'+
				          '<img id="likeIcon" class="actionIcon" src="images/likeIcon.png"><span id="'+item.contentID+'LikeButtonText" class="actionText">Like</span>'+
				        '</div>'+
				        '<div class="commentButton" id="'+item.contentID+'CommentButton" onclick="postAction(\''+item.contentID+'\',\'Comment\')">'+
				          '<img id="commentIcon" class="actionIcon" src="images/commentIcon.png"><span id="'+item.contentID+'CommentButtonText" class="actionText">Comment</span>'+
				        '</div>'+
			      '</div>'+
			  '</div>'+
		'</div>';
	});
	document.getElementById("infoTabDetails").innerHTML=projectsMap;
}

//Contacts Tab
function getContactTabDetails(){
	var	contactDiv='<div class="indtabcontent moveUp">'+
        '<div class="aboutLine">'+
            '<img class="subIcon postIcon" src="images/profilePic.png">'+
            '<div class="postHeading">'+
                'Stay in Touch'+
              '<div class="smallWorkPeriod">02 Jun 2018 at 03:14</div>'+
            '</div>'+
          '</div>'+
        '<div>'+
            'This site was is created just out of my interest.. <br><br> You can reach out for me for any queries / suggestions / anything via:'+
            '<br><br><div class="aboutLine">'+
            '<div id="connectionDetailsInContact"></div>'+
          '</div>'+
          '<br>or post them directly through this form: <br><br>'+
          '<form action="mailto:nikhilshakohi@gmail.com" method="post" enctype="text/plain" >'+
				'<input class="inputBox" type="text" name="name" placeholder="Name" required><br>'+
				'<input class="inputBox" type="email" name="email" placeholder="Email" required><br>'+
				'<textarea class="inputBox inputTextarea" cols="30" type="text" name="comment" placeholder="What\'s on your mind?"></textarea> <br>'+
				'<input class="inputBox sendButton" type="submit" value="Send">'+
			'</form>'+
        '</div>'+
        '<div class="actionBar">'+
              '<div class="likeButton" id="contacts1LikeButton" onclick="postAction(\'contacts1\',\'Like\')">'+
                '<img id="likeIcon" class="actionIcon" src="images/likeIcon.png"><span id="contacts1LikeButtonText" class="actionText">Like</span>'+
              '</div>'+
              '<div class="commentButton" id="contacts1CommentButton" onclick="postAction(\'contacts1\',\'Comment\')">'+
                '<img id="commentIcon" class="actionIcon" src="images/commentIcon.png"><span id="contacts1CommentButtonText" class="actionText">Comment</span>'+
              '</div>'+
            '</div>'+
      '</div>';
	document.getElementById("contactsTabDetails").innerHTML=contactDiv;
}

//React Tips Tab
function getTipsTabDetails(){
	var tipsMap=[];
	var tipsDetails=JSON.parse(reactTips);
	var tipsMenu=[];
	tipsDetails.map((item,id) => {tipsMenu=tipsMenu+(id!=0 ? '<a href="#tipNo'+id+'" class="pageLink">#'+id+' '+item.heading+'</a><br>' : '');});
	tipsDetails.map((item,id) => {
		if(id==0){var contactMeText = '<br>If there are any queries or mistakes or suggestions for these, you can <span class="pageLink" onclick="openTabs(\'contactstab\',event)">contact me</span><br>Menu of the below topics:<br>'+tipsMenu;}
		else{var contactMeText='';}
		var newID=id+1;
		tipsMap=tipsMap+
		'<div class="indtabcontent moveUp">'+
			  '<div class="aboutLine">'+
				    '<img class="subIcon postIcon" src="images/'+item.icon+'.png">'+
				    '<div class="postHeading"> #'+id+' '+
				      item.heading+
				      '<div class="smallWorkPeriod">'+item.date+'</div>'+
			    '</div>'+
			  '</div>'+
			  '<div>'+
			      item.content+contactMeText+
			      '<div id="tipNo'+newID+'" class="actionBar">'+
				        '<div class="likeButton" id="'+item.contentID+'LikeButton" onclick="postAction(\''+item.contentID+'\',\'Like\')">'+
				          '<img id="likeIcon" class="actionIcon" src="images/likeIcon.png"><span id="'+item.contentID+'LikeButtonText" class="actionText">Like</span>'+
				        '</div>'+
				        '<div class="commentButton" id="'+item.contentID+'CommentButton" onclick="postAction(\''+item.contentID+'\',\'Comment\')">'+
				          '<img id="commentIcon" class="actionIcon" src="images/commentIcon.png"><span id="'+item.contentID+'CommentButtonText" class="actionText">Comment</span>'+
				        '</div>'+
			      '</div>'+
			  '</div>'+
		'</div>';
	});
	document.getElementById("tipsTabDetails").innerHTML=tipsMap;
}

//Toggle Dark and Light modes
function toggleMode(){
	var r=document.documentElement.style;
	if(document.getElementById("mode").innerHTML=="dark"){//Toggle to light mode
		document.getElementById("mode").innerHTML="light";
		document.getElementById("headerMode").innerHTML="&#9790;";
		r.setProperty('--headerModeC','rgb(255, 255, 255)');
		r.setProperty('--headerModeBC','rgb(36, 37, 38)');
		r.setProperty('--headerBC','rgb(255, 255, 255)');
		r.setProperty('--bodyC','rgb(24, 25, 26)');
		r.setProperty('--bodyBC','rgb(240, 242, 245)');
		r.setProperty('--profileHeaderBI','linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.7), rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(0,0,0,1))');
		r.setProperty('--profileNavC','rgb(100, 100, 100)');
		r.setProperty('--profileNavBC','rgb(230, 230, 230)');
		r.setProperty('--indtabcontentBC','rgb(255, 255, 255)');
		r.setProperty('--likedButtonC','rgb(0, 0, 0)');
		r.setProperty('--likedButtonBC','rgba(0, 70, 250, 0.4)');
		r.setProperty('--inputC','rgba(0,0,0,1)');
		r.setProperty('--inputBC','rgba(240,242,245,1)');
		r.setProperty('--inputPC','rgba(0, 0, 0, 0.7)');
		
	}else{//Toggle to dark mode
		document.getElementById("mode").innerHTML="dark";
		document.getElementById("headerMode").innerHTML="&#9788;";
		r.setProperty('--headerModeC','rgb(36, 37, 38)');
		r.setProperty('--headerModeBC','rgb(255, 255, 255)');
		r.setProperty('--headerBC','rgb(36, 37, 38)');
		r.setProperty('--bodyC','rgb(255, 255, 255)');
		r.setProperty('--bodyBC','rgb(24, 25, 26)');
		r.setProperty('--profileHeaderBI','linear-gradient(to top, rgba(36,37,38,1), rgba(36,37,38,0.7), rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(0,0,0,1))');
		r.setProperty('--profileNavC','rgb(176, 179, 184)');
		r.setProperty('--profileNavBC','rgb(58, 59, 60)');
		r.setProperty('--indtabcontentBC','rgb(36, 37, 38)');
		r.setProperty('--likedButtonC','rgb(45, 135, 255)');
		r.setProperty('--likedButtonBC','rgba(0, 70, 250, 0.2)');
		r.setProperty('--inputC','rgba(255,255,255,1)');
		r.setProperty('--inputBC','rgba(75,76,77,1)');
		r.setProperty('--inputPC','rgba(255, 255, 255, 0.7)');

	}
}
