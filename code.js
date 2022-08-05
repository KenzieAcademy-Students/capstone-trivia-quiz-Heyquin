// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!

let mainBox = document.querySelector(`#Main_Box`);
let scoreB = document.querySelector(`#Score_Box`);
let loserB = document.querySelector(`#Loser_Box`);
let questionB = document.querySelector(`#Question_Box`);
questionB.innerHTML = ``;

let currentAnswer;
let currentQuestion;

let counterNumber = 0;
let loser = "Sorry :)";


fetch("https://jservice.io/api/random")
    .then(response => response.json())
    .then(categoryIdData => {
        console.log(categoryIdData)
       let idNumber = categoryIdData[0].category_id

        fetch(`https://jservice.io/api/clues?category=${idNumber}`)
            .then(newResponse => newResponse.json())
            .then(gameData =>{
               showData(gameData)
            
            })
    })

function showData(gameData) {
    console.log(gameData.length)
    function getIndex() {
        return Math.floor(Math.random()* gameData.length);
      }
    let index = getIndex();
    let usedIndexes = []
        usedIndexes.push(index)
        let newArray = []
        newArray += index
        console.log(newArray)
        console.log(usedIndexes)
  
    currentAnswer = gameData[index].answer.toLowerCase();
    console.log(currentAnswer);
    currentQuestion = gameData[index].question;
    console.log(currentQuestion);

    const questionB = document.querySelector(`#Question_Box`);
    questionB.innerHTML = `${currentQuestion}`;
    let form = document.querySelector("#Form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let input = document.querySelector(`#answer_input`).value;
        let answerBox = input.toLowerCase();

        if (index < gameData.length) {
        index = getIndex();
        console.log(index)
        
        if (answerBox === currentAnswer) {
            counter += 1;
            scoreB.innerHTML = `Congrats! Score: ${counter}`;
            console.log(true);
            currentAnswer = gameData[index].answer.toLowerCase();
            currentQuestion = gameData[index].question;
            questionB.innerHTML = `${currentQuestion}`;
            console.log(currentAnswer);
         } else if (currentQuestion === currentQuestion) {
            counter +=1;
            scoreB.innerHTML = `${loser} Score: ${counter}`;
            setInterval(function () {
                location.reload();
                }, 4000);
        } else {
            counter = 0;
            mainBox.innerHTML = `<p>${loser}<br>Score: ${counter}</br></p>`;
            console.log(false);
            setInterval(function () {
            location.reload();
            }, 4000);
        }
        }
    });
}

//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertTrue;
//import static org.junit.jupiter.api.Assertions.fail;

//import okhttp3.mockwebserver.MockResponse;
//import okhttp3.mockwebserver.MockWebServer;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;

//import java.io.IOException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.util.List;

//public class CustomHttpClientTest {
//private MockWebServer mockWebServer;

//private static String GET_CLUES_RESPONSE;
//private static final String INPUT_FILE = "clues.json";
//private static String URL_ALL = "api/clues";

//@BeforeEach
//void init() throws IOException {
this.mockWebServer = new MockWebServer();
this.mockWebServer.start();

//Path filePath = Path.of(INPUT_FILE);
GET_CLUES_RESPONSE = Files.readString(filePath);

//}

//@Test
//public void canSendGET() {
//try{
this.mockWebServer.enqueue(new MockResponse()
.addHeader("Content-Type", "application/json")
.setBody(GET_CLUES_RESPONSE)
.setResponseCode(200));

//CustomHttpClient restClient = new CustomHttpClient();

//String result = restClient.sendGET(this.mockWebServer.url(URL_ALL).toString());

assertEquals(GET_CLUES_RESPONSE, result);
//}
//catch (Exception e){
//fail(e.getMessage());
//}
//}
//}

//Clues.Json

//{
//"clues": [
//{
//"id": 1,
//"answer": "sheep",
//"question": "Let's all flock to read Psalm 95, in which humans are compared to these animals",
//"value": 200,
//"categoryId": 1,
//"gameId": 1,
//"invalidCount": 0,
//"category": {
//"id": 1,
//"title": "THE OLD TESTAMENT",
//"canon": true
//},
//"game": {
//"aired": "2004-09-06",
//"canon": true
//},
//"canon": true
//},
//{
//"id": 2,
//"answer": "Sean Combs",
//"question": "The rap on him is he's sometimes \"Puffy\"",
//"value": 200,
//"categoryId": 2,
//"gameId": 1,
//"invalidCount": 0,
//"category": {
//"id": 2,
//"title": "SEAN SONG",
//"canon": true
//},
//"game": {
//"aired": "2004-09-06",
//"canon": true
//},
//"canon": true
//},
//{
//"id": 3,
//"answer": "Los Angeles",
//"question": "In the 1980s this city passed Chicago as the USA's second most populous",
//"value": 200,
//"categoryId": 3,
//"gameId": 1,
//"invalidCount": 0,
//"category": {
//"id": 3,
//"title": "CITY WALK",
//"canon": true
//},
//"game": {
//"aired": "2004-09-06",
//"canon": true
//},
//"canon": true
//},
//{
//"id": 4,
//"answer": "Chicken of the Sea",
//"question": "\"Ask any mermaid you happen to see, 'What's the best tuna?'\", this brand",
//"value": 200,
//"categoryId": 4,
//"gameId": 1,
//"invalidCount": 0,
//"category": {
//"id": 4,
//"title": "SLOGANEERING",
//"canon": true
//},
//"game": {
//"aired": "2004-09-06",
//"canon": true
//},
//"canon": true
//},
//{
//"id": 5,
//"answer": "magazines",
//"question": "Many people have become familiar with \"Shape\", \"Ski\" & \"Savoy\", which are these, in doctors' waiting rooms",
//"value": 200,
//"categoryId": 5,
//"gameId": 1,
//"invalidCount": 0,
//"category": {
//"id": 5,
//"title": "ROOM",
//"canon": true
///},
//"game": {
//"aired": "2004-09-06",
//"canon": true
//},
//"canon": true
//}
//]
//}

//build.gradle

//plugins {
  //  id 'application'
  //  id 'idea'
//}

//repositories {
    //mavenCentral()
//}

//dependencies {
    // Use JUnit test framework.
    ////testImplementation(platform('org.junit:junit-bom:5.8.0'))
    //testImplementation('org.junit.jupiter:junit-jupiter')
    //testImplementation 'com.squareup.okhttp3:mockwebserver:4.9.3'

  //  implementation 'com.fasterxml.jackson.core:jackson-databind:2.13.0'
//}

//test {
    //useJUnitPlatform()
    //testLogging {
  //      events "passed", "skipped", "failed"
   // }//
///