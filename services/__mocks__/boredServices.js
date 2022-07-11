//setting mock service without type of activity
const boredService = async () => {
    console.log("Mocked Activitys");
    return Promise.resolve({
        data: [{
  "activity": "Improve your touch typing",
  "type": "busywork",
  "participants": 1,
  "price": 0,
  "link": "https://en.wikipedia.org/wiki/Touch_typing",
  "key": "2526437",
  "accessibility": 0.8
},
{
  "activity": "Go to a concert with local artists with some friends",
  "type": "social",
  "participants": 3,
  "price": 0.4,
  "link": "",
  "key": "2211716",
  "accessibility": 0.3
},
{
  "activity": "Give your pet ten minutes of focused attention",
  "type": "relaxation",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "9937387",
  "accessibility": 0
},
{
  "activity": "Create and follow a savings plan",
  "type": "busywork",
  "participants": 1,
  "price": 0,
  "link": "",
  "key": "9366464",
  "accessibility": 0.2
},
{
  "activity": "Host a movie marathon with some friends",
  "type": "social",
  "participants": 3,
  "price": 0.1,
  "link": "",
  "key": "5914292",
  "accessibility": 0
}]
        
    })
};

//setting mock service for type of activity
const boredServiceByType = async (id) => {
    console.log("Mocked Activitys with Types");
    return Promise.resolve({
        data: {
  "activity": "Have a jam session with your friends",
  "type": "music",
  "participants": 5,
  "price": 0.1,
  "link": "",
  "key": "2715253",
  "accessibility": 0.3
}   
    });
};

//exporting modules
module.exports = {boredService, boredServiceByType};