(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/Resume.55390b4c.pdf"},30:function(e,t,a){e.exports=a(53)},35:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),i=(a(35),a(7)),l=a(8),s=a(11),d=a(9),m=a(10),u=a(4),h=a(12),v=a(55),p=a(57),f=a(56),g=(a(38),a(24)),b=a.n(g),E=(a(39),a(6)),N=(a(17),a(42),{display:"block"}),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={style_props:null,children:null,current_slide:null,slide_count:null},a.moveToNextSlide=a.moveToNextSlide.bind(Object(u.a)(Object(u.a)(a))),a.moveToPreviousSlide=a.moveToPreviousSlide.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{style:N,className:"Slide"})});this.setState({children:e,current_slide:0,slide_count:r.a.Children.count(e)})}},{key:"moveToPreviousSlide",value:function(){0!=this.state.current_slide?this.state.current_slide>=1&&(console.log("setting"),this.setState(function(e){return{current_slide:e.current_slide-1}})):console.log("return")}},{key:"moveToNextSlide",value:function(){this.state.current_slide!=this.state.slide_count-1&&this.setState(function(e){return{current_slide:e.current_slide+1}})}},{key:"renderSlide",value:function(){var e=this.state.current_slide;return r.a.Children.map(this.state.children,function(t,a){if(e==a)return t})}},{key:"renderNavigatorNextButton",value:function(){return r.a.createElement("button",{className:"btn",onClick:this.moveToNextSlide},r.a.createElement("i",{className:"icon icon-arrow-right"}))}},{key:"renderNavigatorPreviousButton",value:function(){return r.a.createElement("button",{className:"btn",onClick:this.moveToPreviousSlide},r.a.createElement("i",{className:"icon icon-arrow-left"}))}},{key:"renderRegular",value:function(){return this.state.children}},{key:"render",value:function(){return 1==this.props.config.buttons?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"slides-container"},r.a.createElement("div",null,this.renderNavigatorPreviousButton()),r.a.createElement("div",null,this.renderSlide()),r.a.createElement("div",null,this.renderNavigatorNextButton()))):0==this.props.config.carousel?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"slides-container"},this.renderRegular())):void 0}}]),t}(n.Component),k=a(25),y=a.n(k),w=(a(44),{getRepos:function(e){return y.a.get("https://api.github.com/users/gene-radcliffe/repos").set("Authorization","Bearer ".concat("ced0674a7d2ba6dec2f5305aafe3b70b357735bd")).set("Accept","application/json").then(function(e){return e.body})}});function _(){var e=Object(h.a)(["\ncolor:black;\nfont-family: 'Rajdhani', sans-serif;\n"]);return _=function(){return e},e}var x=E.a.h2(_()),R={buttons:!1,carousel:!1},z=["GloveBox","Analog-Clock","MicrobloggingAPI","RadImageResizerApp","RubyBlackJack","work-portfolio-react"];var O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={repos:[],isLoading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"loadGitHubRepos",value:function(){var e=this;console.log("hi"),w.getRepos().then(function(t){return e.setState({repos:t,isLoading:!1})})}},{key:"getAllowedRepos",value:function(e){e.filter(function(e){var t=z.map(function(a){e.name==a&&(t=e)});return t})}},{key:"render",value:function(){var e=this.state;e.repos;return 0==e.isLoading?r.a.createElement("div",null,r.a.createElement("p",{className:"loading loading-lg h1 "},"Loading Github Repos")):r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,"Projects"),r.a.createElement(j,{config:R},r.a.createElement("div",null,r.a.createElement("div",{className:"card project-card"},r.a.createElement("div",{className:"class-header project-card_header"},r.a.createElement("div",{className:"card-title h3"},"GloveBox"),r.a.createElement("div",{className:"card-subtitle text-gray"},"Technologies: Ruby on Rails, Javascript, Onsen CSS & AWS S3")),r.a.createElement("div",{className:"card-body project-card_body"},"Glovebox provides users with a practical and efficient way of keeping track of vehicle maintenance. Declutter your glovebox and still keep the records that can increase your car's resale value!"),r.a.createElement("div",{className:"card-image project-card_image"},r.a.createElement("img",{src:"https://s3.amazonaws.com/generadcliffe/images/glovebox.png"})),r.a.createElement("div",{className:"card-footer project-card_footer"},r.a.createElement("a",{href:"http://glovebox.tools",className:"btn btn-primary project-link"},"Live Site"),r.a.createElement("a",{href:"https://gene-radcliffe.github.io/GloveBox/",className:"btn btn-primary project-link"},"Github")))),r.a.createElement("div",null,r.a.createElement("div",{className:"card project-card"},r.a.createElement("div",{className:"class-header project-card_header"},r.a.createElement("div",{className:"card-title h3"},"ImageResizerTool"),r.a.createElement("div",{className:"card-subtitle text-gray"},"Technologies: Java")),r.a.createElement("div",{className:"card-body project-card_body"},"ImageResizerTool is a Java based image resizer and date stamp utility. The tool can resize images into three sizes, and the tool can read exif data embedded in the images to stamp it over the image file."),r.a.createElement("div",{className:"card-image project-card_image"},r.a.createElement("img",{src:"https://s3.amazonaws.com/generadcliffe/images/imageresizertool.png"})),r.a.createElement("div",{className:"card-footer project-card_footer"},r.a.createElement("a",{href:"https://github.com/gene-radcliffe/ImageResizerApp",className:"btn btn-primary project-link"},"Github")))),r.a.createElement("div",null,r.a.createElement("div",{className:"card project-card"},r.a.createElement("div",{className:"class-header project-card_header"},r.a.createElement("div",{className:"card-title h3"},"QuizBase"),r.a.createElement("div",{className:"card-subtitle text-gray"},"Technologies: React, Javascript, Ruby on Rails, REST API ")),r.a.createElement("div",{className:"card-body project-card_body"},"QuizBase is a group Project I made at Momentum in collaboraion with other developers. QuizBase is a quiz testing site that challenge users of their basic knowledge in Javascript or Ruby. We leverage React to develop our front-end quiz interface, while we used Ruby on Rails to develop our Rest API's. These endpoints provides the front-end access to quiz data and an endpoin to process the users quiz.  "),r.a.createElement("div",{className:"card-image project-card_image"},r.a.createElement("img",{src:"https://s3.amazonaws.com/generadcliffe/images/quizbase.png"})),r.a.createElement("div",{className:"card-footer project-card_footer"},r.a.createElement("a",{href:"https://quizbase-radcliffe.firebaseapp.com/login",className:"btn btn-primary project-link"},"Live Site"))))))}}]),t}(n.Component),S=a(14),T=a(27),B=a(22),P=a(15);function C(){var e=Object(h.a)(["\n    \n    background: rgba(8,3,42,0.09);\n"]);return C=function(){return e},e}function A(){var e=Object(h.a)(["\n    color:white;\n    font-family: 'Rajdhani', sans-serif;\n    display: block;\n"]);return A=function(){return e},e}function I(){var e=Object(h.a)(["\n  \n    \n    &:link, &:visited{\n    \n        color: white;\n        text-decoration: none;\n        background-color: rgba(47, 97, 162,0.7);\n        padding: 0.5rem;\n    }\n    &:hover{\n        text-decoration: none;\n        background-color: rgba(47, 97, 162,1);\n        color: white;\n    }\n"]);return I=function(){return e},e}S.b.add(T.a,B.b,B.a);var G=Object(E.a)(v.a)(I());function J(){function e(){var e=document.getElementById("project").offsetTop;window.scrollBy({top:e,left:0,behavior:"smooth"})}return r.a.createElement("div",{className:"home-index"},r.a.createElement("div",{className:"hero-header"},r.a.createElement(L,{className:"hero-box col-12"},r.a.createElement(q,{className:" hero-box_name text-center"},"gene radcliffe"),r.a.createElement(q,{className:"hero-box_text text-center",style:D},"software developer"),r.a.createElement("div",{className:"hero-social"},r.a.createElement(W,{size:"2x"})),r.a.createElement("div",{className:"site-links_container"},r.a.createElement(G,{className:"site-links",to:"/resume"},"Resume"),r.a.createElement(G,{className:"site-links",onClick:e,to:"/"},"Projects"))),r.a.createElement("div",{className:"arrow"}," ",r.a.createElement(P.a,{onClick:e,size:"lg",icon:"chevron-down"}))),r.a.createElement("div",{id:"project",className:"projects"},r.a.createElement(O,null)))}var q=E.a.span(A()),L=E.a.div(C()),D={fontSize:"24px"},W=function(e){var t=e.size;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"social-icon_link col-4",href:"https://github.com/gene-radcliffe"},r.a.createElement(P.a,{className:"social-icons",size:t,icon:["fab","github"]})),r.a.createElement("a",{className:"social-icon_link col-4",href:"https://www.linkedin.com/in/gene-radcliffe-50203b13/"}," ",r.a.createElement(P.a,{className:"social-icons",size:t,icon:["fab","linkedin"]})),r.a.createElement("a",{className:"social-icon_link col-4",href:"mailto:g_radcliffe82@hotmail.com",target:"_top"}," ",r.a.createElement(P.a,{className:"social-icons",size:t,icon:["fa","envelope"]})))},F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).scrollToProject=a.scrollToProject.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"scrollToProject",value:function(){console.log("hi")}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{id:"index"},r.a.createElement(f.a,{exact:!0,path:"/",component:J}),r.a.createElement(f.a,{path:"/resume",component:this.renderResume})))}},{key:"renderResume",value:function(){var e=window.innerWidth,t=window.innerHeight;return r.a.createElement("embed",{src:b.a,width:e,height:t})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.ebf7c6a8.chunk.js.map