// module for landingPage view

angular.module('bootCamp.map', [
  // add any factory dependencies here

])

// if there are factory dependencies, add function it depends on as a function argument
.controller('MapController', function($scope, $firebase, $firebaseObject) {
  console.log("inside MapController---------------");
  var ref = new Firebase("https://bondfire2.firebaseio.com");
  var aData='yizzle';

$scope.getData = function() {
  console.log('hi');
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    aData=snapshot.val();
  })
}
$scope.getData();
	 setTimeout(function(){ $(function() {

    var testimonials = ["<b>'We recently hired a bootcamp grad at SolarCity, best decision we've ever made'</b> - Ilan Musk (CEO Tesla)", "<b>'Since 2013, we've constantly recruited bootcamp alum. They create a hardworking atmosphere that makes me love coming to work everyday'</b> - Mark Zuckerberg (CEO Facebook)", "<b>'I met 2 of the most intelligent people I've ever known while at Telegraph Academy...3 months later we have a million-dollar business'</b> - Eric Eng(CEO bullcrap.com)", "<b>'My first job was at a company that had already hired alumni of another school, afterwards I was told they put in a good word'</b> - Bosa Saposki (Software Engineer Twitter)"];
    console.log('aData', aData);

    var alpha = ['a', 'b', 'c', 'd'];

    // console.log(testimonials.length);
    $('h1').append(testimonials[Math.floor(Math.random() * testimonials.length)]);

    function randomQuote() {
      $('h1').empty();
      $('h1').hide().append(testimonials[Math.floor(Math.random() * testimonials.length)]).fadeIn('slow');
    }


    setInterval(randomQuote, 8000);

    $(".mapcontainer").mapael({
      map: {
        name: "usa_states",
        defaultPlot: {
          size: 40,
          eventHandlers: {
            mouseover: function(e, id, mapElem, textElem, elemOptions) {
              if (typeof elemOptions.myText != 'undefined') {
                $('.myText span').html(elemOptions.myText).css({
                  display: 'none'
                }).fadeIn('slow');
              }
            }
          }
        }
      },
      plots: {
        'ny': {
          latitude: 40.717079,
          longitude: -74.00116,
          tooltip: {
            content: "New York : 32 Boot Camps"
          },
          myText: "<img src='Map/photos/newyork/ga.png'><img src ='Map/photos/newyork/byteacademy.png'><img src ='Map/photos/newyork/dsl.jpg'><img src ='Map/photos/newyork/flatironschool.png'><img src ='Map/photos/newyork/fullstack.png'><img src ='Map/photos/newyork/makeschool.png'>"
        },
        'atl': {
          latitude: 33.7489954,
          longitude: -84.3879824,
          tooltip: {
            content: "Atlanta : 6 Boot Camps"
          },
          myText: "<img src ='Map/photos/atl/atlantacode.jpeg'><img src ='Map/photos/atl/codeu.png'><img src ='Map/photos/atl/cribb.png'><img src ='Map/photos/atl/tts.png'><img src ='Map/photos/atl/lampcamp.png'><img src ='Map/photos/atl/theironyard.png'> "
        },
        'sf': {
          latitude: 37.792032,
          longitude: -122.394613,
          tooltip: {
            content: "San Francisco : 38 Boot Camps, 4 registered grads"
          },
          myText: "<img src ='Map/photos/sf/appac.png'><img src ='Map/photos/sf/codinghouse.png'><img src ='Map/photos/sf/galvanize.png'><img src ='Map/photos/sf/hack-reactor-logo.png'><img src ='Map/photos/sf/learntechlabs.jpg'><img src ='Map/photos/sf/tga.jpg'>"
        },
        'au': {
          latitude: 30.267153,
          longitude: -97.7430608,
          tooltip: {
            content: "Austin : 14 Boot Camps"
          },
          myText: "<img src ='Map/photos/austin/aca.jpeg'><img src ='Map/photos/austin/codercamps.png'><img src ='Map/photos/austin/codeup-logo.png'><img src ='Map/photos/austin/galvanize.png'><img src ='Map/photos/austin/makersquare.png'><img src ='Map/photos/austin/scale.png'>"
        },
        'la': {
          latitude: 34.025052,
          longitude: -118.192006,
          tooltip: {
            content: "Los Angeles : 13 Boot Camps"
          },
          myText: "<img src ='Map/photos/la/angelhack.jpg'><img src ='Map/photos/la/codesmith.png'><img src ='Map/photos/la/learning-fuze-20logo-202-compressor.png'><img src ='Map/photos/la/orangecounty.png'><img src ='Map/photos/la/notch8.png'><img src ='Map/photos/la/makersquare-logo.png'>"
        },
        'dallas': {
          latitude: 32.784881,
          longitude: -96.808244,
          tooltip: {
            content: "Dallas : 12 Boot Camps"
          },
          myText: "<img src ='Map/photos/dallas/codingdojo.png'><img src ='Map/photos/dallas/dev-mountain-logo.png'><img src ='Map/photos/dallas/guild.png'>"
        },
        'miami': {
          latitude: 25.789125,
          longitude: -80.205674,
          tooltip: {
            content: "Miami : 6 Boot Camps"
          },
          myText: "<img src ='Map/photos/mia/ironhack.png'><img src ='Map/photos/mia/thinkful.png'><img src ='Map/photos/mia/wyncode.jpg'>"
        },
        'chi': {
          latitude: 41.8781136,
          longitude: -87.6297982,
          tooltip: {
            content: "Chicago : 14 Boot Camps, 1 Registered Grad"
          },
          myText: "<img src ='Map/photos/chicago/aclc.png'><img src ='Map/photos/chicago/code-fellows.png'><img src ='Map/photos/chicago/codechicagologo.png'><img src ='Map/photos/chicago/codingtemple.png'><img src ='Map/photos/chicago/mobilemakersa.png'><img src ='Map/photos/chicago/starterleague.jpeg'>"
        },
        'port': {
          latitude: 45.5230622,
          longitude: -122.6764816,
          tooltip: {
            content: "Portland : 19 Boot Camps"
          },
          myText: "<img src ='Map/photos/portland/epicodus-logo.png'><img src ='Map/photos/portland/guild.png'><img src ='Map/photos/portland/portland-code-school-logo.png'>"
        },
        'indy': {
          latitude: 39.768403,
          longitude: -86.158068,
          tooltip: {
            content: "Indianapolis : 2 Boot Camps"
          },
          myText: "<img src ='Map/photos/indy/1150.png'><img src ='Map/photos/indy/the-iron-yard.png'>"
        },
        'bost': {
          latitude: 42.3600825,
          longitude: -71.0588801,
          tooltip: {
            content: "Boston : 19 Boot Camps"
          },
          myText: "<img src ='Map/photos/boston/apprentice.png'><img src ='Map/photos/boston/koru.png'><img src ='Map/photos/boston/launch-academy-logo.jpg'><img src ='Map/photos/boston/startup.png'><img src ='Map/photos/boston/agi.png'>"
        },
        'seattle': {
          latitude: 47.599571,
          longitude: -122.319426,
          tooltip: {
            content: "Seattle : 12 Boot Camps"
          },
          myText: "<img src ='Map/photos/seattle/ada-logo.png'><img src ='Map/photos/seattle/codebuild.png'><img src ='Map/photos/seattle/codecore.jpg'><img src ='Map/photos/seattle/datascience.jpg'><img src ='Map/photos/seattle/lighthouse.png'>"
        }
      }
    });
  });
},1000);
})
