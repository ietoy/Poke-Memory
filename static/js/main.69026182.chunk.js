(this.webpackJsonppokememory=this.webpackJsonppokememory||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"charizard","img":"https://i.insider.com/57910997dd0895a56e8b4572?width=1000&format=jpeg&auto=webp"},{"id":2,"name":"gengar","img":"https://i.insider.com/57910997dd0895a56e8b45ca?width=1000&format=jpeg&auto=webp"},{"id":3,"name":"arcanine","img":"https://i.insider.com/57910997dd0895a56e8b45a7?width=1000&format=jpeg&auto=webp"},{"id":4,"name":"bulbasaur","img":"https://i.insider.com/57910997dd0895a56e8b456d?width=1000&format=jpeg&auto=webp"},{"id":5,"name":"blaziken","img":"https://i.insider.com/5d0bc24ce3ecba58d75a6797?width=1000&format=jpeg&auto=webp"},{"id":6,"name":"umbreon","img":"https://i.insider.com/5d0bc24ce3ecba040f4ec125?width=1000&format=jpeg&auto=webp"},{"id":7,"name":"lucario","img":"https://i.insider.com/5d0bc24ce3ecba0383189f56?width=1000&format=jpeg&auto=webp"},{"id":8,"name":"gardevoir","img":"https://i.insider.com/5d0bc24cb587c6681c735e8a?width=1000&format=jpeg&auto=webp"},{"id":9,"name":"eevee","img":"https://i.insider.com/57910997dd0895a56e8b45f1?width=1000&format=jpeg&auto=webp"},{"id":10,"name":"dragonite","img":"https://i.insider.com/57910997dd0895a56e8b4601?width=700&format=jpeg&auto=webp"},{"id":11,"name":"absol","img":"https://i.insider.com/5d0bc24ce3ecba034047b4db?width=1000&format=jpeg&auto=webp"},{"id":12,"name":"typhlosion","img":"https://i.insider.com/5d0bc24c97ad76657e738953?width=1000&format=jpeg&auto=webp"}]')},,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),i=a.n(o),c=(a(15),a(7)),m=a(3),s=a(4),d=a(8),l=a(5),p=a(9);a(16);var u=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper container"},r.a.createElement("div",{className:"left"},e.bannerText),r.a.createElement("div",{className:"right"},"Your Score: ",e.curScore," | Top Score: ",e.topScore)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card-panel teal center-align"},r.a.createElement("span",{className:"white-text"},r.a.createElement("h1",null,"Poke-Memory!"),"Click on a Pokemon to earn points, but don't click on any more than once!"))))};var h=function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container"},"Poke-Memory!"))))};var b=function(e){return r.a.createElement("div",{className:"wrapper container row"},e.children)};var g=function(e){return r.a.createElement("div",{className:"col s12 m6 l3",id:e.name},r.a.createElement("img",{className:"responsive-img z-depth-2 hoverable",src:e.img,alt:e.name,onClick:function(){return e.handleClick(e.id)}}))},f=a(6),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={bannerText:"Click a Pokemon to Start!",topScore:0,curScore:0,pokemon:f,clickedPkmn:[]},a.pokeShuffle=function(e){for(var t,n=e.length-1;n>0;n--){t=Math.floor(Math.random()*(n+1));var r=e[n];e[n]=e[t],e[t]=r}a.setState({pokemon:e})},a.handleClick=function(e){if(a.state.clickedPkmn.includes(e))a.state.curScore>a.state.topScore&&a.setState({topScore:a.state.curScore}),a.setState({bannerText:"Oh no! You clicked that one already! Try again?"}),a.setState({clickedPkmn:[]}),a.setState({curScore:0});else{a.setState({bannerText:"You guessed correctly! Keep going!"}),a.setState({clickedPkmn:[].concat(Object(c.a)(a.state.clickedPkmn),[e])});var t=a.state.curScore+1;a.setState({curScore:t})}a.pokeShuffle(a.state.pokemon)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u,{bannerText:this.state.bannerText,curScore:this.state.curScore,topScore:this.state.topScore}),r.a.createElement(b,null,this.state.pokemon.map((function(t){return r.a.createElement(g,{id:t.id,key:t.id,name:t.name,img:t.img,handleClick:e.handleClick})}))),r.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.69026182.chunk.js.map