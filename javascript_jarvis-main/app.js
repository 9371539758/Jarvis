const takeCommand = async (message) => {
  const isJarvisCommand = message.toLowerCase().startsWith("jarvis");

  if (isJarvisCommand) {
    message = message.substr(6).trim();
  }
  //   if (isSpeaking) {
  //     return; // If Jarvis is speaking, don't process new commands
  // }

  if (message.includes("stop")) {
    if (isSpeaking) {
      window.speechSynthesis.cancel(); // Stop speech synthesis
      isSpeaking = false;
    } else {
      speak("Not currently speaking.");
    }
  }
  else if (message.includes("website") || message.includes("open our website")) {
    window.open("http://127.0.0.1:3002/index.html", "_blank");
    speak("Sir, our website is working well and functions properly.");
} else if (message.includes("hi") || message.includes("hello")) {
  const greetings = [
      "Hello! How can I assist you today?",
      "Hey there! Ready to conquer the world, one task at a time?",
      "Hi! I promise I won't bite—I'm just a friendly program!",
      "Hello! If I had a dollar for every time someone said hi, I’d be rich!",
      "Hi! Did you hear about the computer that took a break? It needed a byte!",
      "Hello! I’m here to help—just don’t ask me to do your laundry!",
      "Hey! I may not have feelings, but I’m all ears... or, well, code!"
  ];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  speak(randomGreeting);
}


    else if (message.includes("open my all social media profile")) {
      openSocialMediaProfiles();
      speak("Opening all your social media profiles...");
    
  } else if (message.includes("open")) {
    const websiteName = message.split("open ")[1].trim(); // Extract the website name
    const websiteURL = `https://www.${websiteName}.com`; // Construct the URL
    window.open(websiteURL, "_blank"); // Open the website
    speak(`Opening ${websiteName}...`); // Speak the action
    speak("Task completed, boss."); // Speak the completion message
  }else if (message.includes("open my LinkedIn profile")) {
    openLinkedInProfile();
    speak("Opening your LinkedIn profile...");
  } else if (message.includes("search")) {
    let searchTerm = message.split("search")[1].trim();
    window.open(`https://google.com/search?q=${searchTerm}`, "_blank");
    speak(`Searching for ${searchTerm}...`);
  
  }
 else if (
    message.includes("play music") ||
    message.includes("start music")
  ) {
    playSpotifyMusic(); // Play Spotify music
  } else if (message.includes("stop music")) {
    stopSpotifyMusic(); // Stop Spotify music
  } else if (message.includes("check my python project")) {
    window.open(
      "https://replit.com/@SujitGore/treasure-island-end-1",
      "_blank"
    );
    speak("Opening your Python project...");
  } else if (
    message.includes("productive mode") ||
    message.includes("google developer")
  ) {
    window.open("https://aistudio.google.com/app/prompts/new_chat", "_blank");
    speak("Opening the Google Developer website for you...");
    speak("Task completed, boss.");
  } else if (message.includes("define")) {
    const word = message.split("define ")[1].trim(); // Extract the word to define
    const definition = await fetchWordDefinition(word);
    speak(definition);
  } else if (
    message.includes("today's tasks") ||
    message.includes("any task") ||
    message.includes("task")
  ) {
    const tasks = [
      "Finish coding the new feature for the website",
      "Prepare presentation slides for the team meeting",
      "Call the client to discuss project updates",
      "Complete the report for the quarterly review",
      "Attend the project planning session at 10:00 AM",
      "Review and respond to emails from stakeholders",
      "Go for a 30-minute walk during lunch break",
      "Research new technologies for upcoming project",
      "Submit expense reports for reimbursement",
      "Schedule a follow-up meeting with the marketing team",
      "Read the latest industry articles for professional development",
    ];

    const randomTasks = tasks.sort(() => Math.random() - 0.5).slice(0, 3); // Select 3 random tasks

    const tasksString = randomTasks.join(". "); // Join tasks into a single string

    speak("Your tasks for today are: " + tasksString);
    // Send an alert
    alert("Here are your tasks for today:\n" + tasksString);
  } else if (message.includes("add task")) {
    // Extract the task from the message
    let task = message.split("add task")[1].trim();
    addTask(task);
    speak("Task added to your to do list, boss.");
  } else if (message.includes("display list")) {
    displayTasks();
  } else if (message.includes("set a timer for")) {
    let time = message.split("set a timer for")[1].trim();
    setTimeout(() => {
      speak("Time's up!");
    }, time * 60000); // Convert time to milliseconds
    speak(`Setting a timer for ${time} minutes...`);
  } else if (message.includes("check my linkedin")) {
    window.open("https://www.linkedin.com/in/sujit-gore/", "_blank");
    speak("Opening your LinkedIn profile.");
  } else if (message.includes("schedule my day")) {
    scheduleTasks();
  } else if (message.includes("display my tasks")) {
    displayTasks();
  } else if (message.includes("any update from github")) {
    checkGitHubUpdates("https://github.com/9371539758");
  } else if (message.toLowerCase().includes("tell me cube of")) {
    const number = parseInt(message.replace("tell me cube of", "").trim());
    const cube = Math.pow(number, 3);
    speak(`The cube of ${number} is ${cube}.`);
  } else if (message.toLowerCase().includes("tell me square of")) {
    const number = parseInt(message.replace("tell me square of", "").trim());
    const square = Math.pow(number, 2);
    speak(`The square of ${number} is ${square}.`);
  } else if (
    message.includes("drive car") ||
    message.includes("selfdrive") ||
    message.includes("auto car mode") ||
    message.includes("alpha")
  ) {
    window.open("https://radufromfinland.com/projects/virtualworld/", "_blank");
    speak(
      "Welcome to the Automatic Drive website. I'm here to assist you in exploring our range of services for automated driving."
    );
    speak("Jarvis selfdrive, autodrive options are available.");
  } else if (message.includes("covid stats in")) {
    const country = message.split("covid stats in")[1].trim();
    getCovidStats(country);
  } else if (message.includes("explain me")) {
    const query = message.replace("explain me", "").trim();
    provideExplanation(query);
  } else if (
    message.includes("can you explain") ||
    message.includes("give me details on") ||
    message.includes("give me insights on") ||
    message.includes("explain me")
  ) {
    let query = message
      .replace("can you explain", "")
      .replace("give me details on", "")
      .replace("give me insights on", "")
      .replace("explain me", "")
      .trim();
    provideExplanation(query);
  } else if (message.includes("define")) {
    let term = message.split("define")[1].trim();
    const definitions = {
      algorithm:
        "A process or set of rules to be followed in calculations or other problem-solving operations.",
      theorem:
        "A general proposition not self-evident but proved by a chain of reasoning; a truth established by means of accepted truths.",
      hypothesis:
        "A supposition or proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
    };
    if (definitions.hasOwnProperty(term)) {
      speak(`The definition of ${term} is: ${definitions[term]}`);
    } else {
      speak(`Sorry, I don't have a definition for ${term}`);
    }
  } else if (message.includes("read")) {
    const bookName = message.split("read ")[1].trim(); // Extract the book name
    const books = await fetchBooks(bookName);
    if (books.length > 0) {
      const firstBook = books[0];
      speak(
        `I found the book "${firstBook.title}" by ${
          firstBook.author_name
            ? firstBook.author_name.join(", ")
            : "unknown author"
        }.`
      );
    } else {
      speak("Sorry, I couldn't find any books with that title.");
    }
  } else if (message.includes("calculate")) {
    let expression = message.split("calculate")[1].trim();
    try {
      const result = eval(expression);
      speak(`The result of ${expression} is ${result}`);
    } catch (error) {
      speak("Sorry, I couldn't calculate that.");
    }
  } else if (message.includes("tell me a story")) {
    const stories = [
      "I am losing my interest in human beings; in the significance of their lives and their actions. Some one has said it is better to study one man than ten books. I want neither books nor men; they make me suffer. Can one of them talk to me like the night – the Summer night? Like the stars or the caressing wind?  The night came slowly, softly, as I lay out there under the maple tree. It came creeping, creeping stealthily out of the valley, thinking I did not notice. And the outlines of trees and foliage nearby blended in one black mass and the night came stealing out from them, too, and from the east and west, until the only light was in the sky, filtering through the maple leaves and a star looking down through every cranny. The night is solemn and it means mystery.  Human shapes flitted by like intangible things. Some stole up like little mice to peep at me. I did not mind. My whole being was abandoned to the soothing and penetrating charm of the night.",
      "Long ago, there lived a wise old wizard...",
    ];

    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    speak(randomStory);
    // } else if (
    //   message.includes("what is") ||
    //   message.includes("who is") ||
    //   message.includes("what are")
    // ) {
    //   const searchResults = await searchGoogle(message);
    //   if (searchResults.length > 0) {
    //     const firstResult = searchResults[0];
    //     displayResult(`${firstResult.title}: ${firstResult.snippet}`);
    //   } else {
    //     displayResult(
    //       `Sorry, I couldn't find any relevant information for ${message}`
    //     );
    //   }
    //   speak(`This is what I found on Wikipedia regarding ${message}`);
  } //else if (
  //   message.includes("what is") ||
  //   message.includes("who is") ||
  //   message.includes("what are")
  // ) {
  //   const searchTerm = message.replace(/(what is|who is|what are)/i, "").trim();
  //   const wikiData = await fetchWikipediaSummary(searchTerm);
  //   // displayResult(wikiData);
  //   speak(
  //     `This is what I found on Wikipedia regarding ${searchTerm}: ${wikiData}`
  //   );
  // }
 // Function to display and speak the result
//  else if (
//   message.includes("what is") ||
//   message.includes("who is") ||
//   message.includes("what are")
// ) {
//   const searchTerm = message.replace(/(what is|who is|what are)/i, "").trim();
//   const wikiData = await fetchWikipediaSummary(searchTerm);
  
//   // const result = `This is what I found on Wikipedia regarding ${searchTerm}: ${wikiData}`;

 
//   // Use the displayResult function to display and speak the result
//   displayResult(result);
//   speak(`${wikiData}`);
  
// }
else if (
  message.includes("what is") ||
  message.includes("who is") ||
  message.includes("what are")
) {
  const searchTerm = message.replace(/(what is|who is|what are)/i, "").trim();
  const wikiData = await fetchWikipediaSummary(searchTerm);
  
  // Create the result string for display
  const result = `This is what I found on Wikipedia regarding ${searchTerm}: ${wikiData}`;
  
  // Use the displayResult function to display the result
  displayResult(result);
  
  // Use the speak function to read out the result
  speak(result);
}



  
  else if (
    message.includes("spacex missions") ||
    message.includes("spacex mission")
  ) {
    const missionsUrl = "https://api.spacexdata.com/v3/missions";

    fetch(missionsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const mission = data[0];
          const missionDetails = `The first mission is ${mission.mission_name}. ${mission.description}`;
          speak(missionDetails);
        } else {
          speak("Sorry, I couldn't retrieve mission information.");
        }
      })
      .catch((error) => {
        console.error("Error fetching SpaceX data:", error);
        speak("Sorry, I couldn't retrieve mission information.");
      });
  } else if (message.includes("wikipedia")) {
    const topic = message.replace("wikipedia", "").trim();
    openAndReadWikipedia(topic);
  } else if (message.includes("tell me about")) {
    const query = message.replace("tell me about", "").trim();
    const searchResults = await searchGoogle(query);
    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      const summary = summarizeResult(firstResult.snippet);
      displayResult(summary);
    } else {
      displayResult(
        `Sorry, I couldn't find any relevant information for ${query}`
      );
    }
  } else if (message.includes("time")) {
    speak(
      new Date().toLocaleString(undefined, {
        hour: "numeric",
        minute: "numeric",
      })
    );
  } else if (message.includes("date")) {
    speak(
      new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
    );
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    speak("Opening Calculator");
  } else if (message.includes("check my instagram")) {
    window.open("https://www.instagram.com/sujit__gore_222/", "_blank");
    speak("Opening your Instagram profile.");
  } else if (message.includes("who are you")) {
    speak(
      "Sir, I am Jarvis, a voice assistant made for browsers using JavaScript by one of the enthusiastic devs on the planet. I can do anything that can be done from a browser."
    );
  }
  else if (message.includes("who is your creator") || message.includes("who created you") || message.includes("who is behind you")) {
    speak(
     "My creator is Sujit, a dedicated developer with a vision to build innovative solutions. Thanks to his expertise, I'm here to assist you! He has meticulously crafted every part of me to ensure I can meet your needs and make your tasks easier."

    );
}

  else if (message.includes("tell me about")) {
    const query = message.replace("tell me about", "").trim();
    const summary = await generateSummary(query);

    if (summary) {
      displayResult(`Summary: ${summary}`);
    } else {
      displayResult(`Sorry, I couldn't generate a summary for ${query}.`);
    }
  } else if (message.includes("email")) {
    getEmailInfo();
  } else if (message.includes("today news") || message.includes("news")) {
    const articles = await fetchNews();
    if (articles.length > 0) {
      articles.forEach((article) => {
        speak(`${article.title}: ${article.description}`);
      });
    } else {
      speak("Sorry, I couldn't retrieve the news at the moment.");
    }
  } else if (message.includes("show me")) {
    let query = message.split("show me")[1].trim();
    const images = await fetchImages(query);
    if (images.length > 0) {
      const imageUrl = images[0].src.medium; // Display the first image
      showImageInPopup(imageUrl);
    } else {
      speak("Sorry, I couldn't find any images for that query.");
    }
  } else if (message.includes("calendar") || message.includes("events")) {
    // Assuming you have a way to fetch calendar events
    const events = [
      "Meeting with team at 10 AM",
      "Lunch with friend at 1 PM",
      "Project deadline at 5 PM",
    ];
    speak(`Here are your events for today: ${events.join(", ")}.`);
  } else if (message.includes("scroll up")) {
    scrollUp();
  } else if (message.includes("scroll down")) {
    scrollDown();
  } else if (message.includes("zoom in")) {
    zoomIn();
  } else if (message.includes("zoom out")) {
    zoomOut();
  } else if (message.includes("article about")) {
    const query = message.split("article about")[1].trim();
    const url = `https://example.com/search?q=${encodeURIComponent(query)}`; // Replace with actual article URL logic
    displayArticle(url);
  } else if (message.includes("play song on youtube")) {
    // Extracting the song query after the command
    const songQuery = message.replace("play song on youtube", "").trim();
    const apiKey = "AIzaSyBXYYN9WHAooZqdE09QkIhT9ob0oJBmEWI";
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${songQuery}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        window.open(
          `https://www.youtube.com/watch?v=${videoId}&autoplay=1`,
          "_blank"
        );
        speak(`Playing ${songQuery} on YouTube`);
      } else {
        speak(`Sorry, I couldn't find the song "${songQuery}" on YouTube.`);
      }
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
      speak("Sorry, I encountered an error while fetching YouTube data.");
    }
  }

  //   else {
  //     window.open(
  //       `https://www.google.com/search?q=${message.replace(/\s+/g, "+")}`,
  //       "_blank"
  //     );
  //     speak(`I found some information for ${message} on Google`);
  //   }
  // };
  else {
    handleHumorousResponses(message);
  }
};
// const displayResult = (result) => {
//   const resultElement = document.createElement("p");
//   resultElement.textContent = result;
//   const chatContainer = document.querySelector(".chat-container");
//   if (chatContainer) {
//     chatContainer.appendChild(resultElement);
//   } else {
//     console.error("Chat container not found in the DOM.");
//   }
//   speak(result); // This line will make Jarvis speak out the result

//   // Call function to speak a random sentence after displaying the result
//   speakRandomSentence();
// };

const speakRandomSentence = () => {
  const randomSentences = [
    // "Ready for the next task. What's next on the agenda?",
    "Awaiting further instructions. What's our next move?",
    "What would you like me to do next?",
    // Add more random sentences as needed
  ];
  const randomIndex = Math.floor(Math.random() * randomSentences.length);
  const randomSentence = randomSentences[randomIndex];
  speak(randomSentence);
};

// // const summarizeResult = (text) => {
// //   return text.split(" ").slice(0, 100).join(" ");
// // };

// const displayAndSpeakResult = (text) => {
//   displayResult(text);
//   speak(text);
// };

const apiKey = "AIzaSyBXYYN9WHAooZqdE09QkIhT9ob0oJBmEWI";
const searchEngineId = "65f85818995554457"; //  Search Engine ID
const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=`;

async function searchGoogle(query) {
  try {
    const response = await fetch(apiUrl + encodeURIComponent(query));
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items.map((item) => ({
        title: item.title,
        snippet: item.snippet,
        link: item.link,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
}
const getAnswer = (query) => {
  const question = query.toLowerCase();
  const entry = jarvisQuestions.find((q) => question.includes(q.question));
  return entry ? entry.answer : "Sorry, I don't have an answer for that.";
};

const fetchWikipediaSummary = async (query) => {
  try {
    const response = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();

    if (data && data.extract) {
      const summary = data.extract;
      displayResult(summary); // Display the summary on the webpage
      speak(summary); // Speak the summary
      return summary;
    } else {
      const noInfoMessage = "No information available.";
      displayResult(noInfoMessage); // Display the no information message
      speak(noInfoMessage); // Speak the no information message
      return noInfoMessage;
    }
  } catch (error) {
    console.error("Error fetching Wikipedia summary:", error);
    const errorMessage =
      "Sorry, there was an error retrieving the information.";
    displayResult(errorMessage); // Display the error message
    speak(errorMessage); // Speak the error message
    return errorMessage;
  }
};
// const displayResult = (result) => {
//   // Create a new paragraph element for the result
//   const resultElement = document.createElement("p");
//   resultElement.textContent = result;

//   // Find the chat container in the DOM
//   const chatContainer = document.querySelector(".chat-container");

//   if (chatContainer) {
//     // Append the result element to the chat container
//     chatContainer.appendChild(resultElement);
//   } else {
//     console.error("Chat container not found in the DOM.");
//   }

//   // Make Jarvis speak the result
//   speak(result);

//   // Call the function to speak a random sentence after displaying the result
//   speakRandomSentence();
// };
// Function to display and speak the result
const displayResult = (result) => {
  const resultElement = document.createElement("p");
  resultElement.textContent = result;
  
  const chatContainer = document.querySelector(".chat-container .message");
  if (chatContainer) {
    chatContainer.appendChild(resultElement);
  } else {
    console.error("Message container not found in the DOM.");
  }
  
  speak(result); // This line will make Jarvis speak out the result
  
  // Call function to speak a random sentence after displaying the result
  speakRandomSentence();
};