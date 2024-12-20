let isSpeaking = false;

const btn = document.querySelector(".talk");
const content = document.querySelector(".content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const playAudio = (audioUrl) => {
  if (isSpeaking) return; // Prevent multiple audio playbacks
  const audio = new Audio(audioUrl);
  audio.play();
  isSpeaking = true;
  audio.onended = () => {
    isSpeaking = false;
  };
};

const speak = async (text) => {
  if (isSpeaking) return; // Prevent overlapping speech
  const ttsApiUrl = `https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=${encodeURIComponent(text)}`;
  try {
    console.log('Fetching TTS data from URL:', ttsApiUrl);
    const response = await fetch(ttsApiUrl);
    if (!response.ok) {
      throw new Error('TTS service responded with an error');
    }
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    console.log('Playing audio from URL:', audioUrl);
    playAudio(audioUrl);
  } catch (error) {
    console.error('Error fetching TTS data:', error);
    speakFallback(text);
  }
};
const speakFallback = (text) => {
  if (isSpeaking) return; // Prevent overlapping speech
  console.log('Using fallback speech synthesis');
  const textToSpeak = new SpeechSynthesisUtterance(text);
  textToSpeak.rate = 1;
  textToSpeak.volume = 1;
  textToSpeak.pitch = 1;
  isSpeaking = true;
  textToSpeak.onend = () => {
    isSpeaking = false;
  };
  window.speechSynthesis.speak(textToSpeak);
};

const wishMe = () => {
  const hour = new Date().getHours();
  let greeting = "";
  if (hour >= 0 && hour < 12) {
    greeting = "Good Morning Sujit.";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon Sujit.";
  } else {
    greeting = "Good Evening Sujit.";
  }
  const prompt = "How can I assist you today, sir?";
  speak(`${greeting} ${prompt}`);
};

const remindToTakeBreak = () => {
  speak("It's been an hour since your last break. Time to take a short break.");
};

setTimeout(remindToTakeBreak, 3600000);
setInterval(remindToTakeBreak, 3600000);

recognition.onresult = (event) => {
  console.log('Recognition result:', event.results);
  const transcript = event.results[0][0].transcript.toLowerCase();
  content.textContent = transcript;
  takeCommand(transcript); // Ensure this function is defined and does not conflict with new functionality
};

recognition.onend = () => {
  console.log('Recognition ended, restarting...');
  recognition.start();
};

btn.addEventListener("click", () => {
  content.textContent = "Listening....";
  recognition.start();
});

// Ensure user interaction before playing any audio
window.addEventListener("click", () => {
  if (!isSpeaking) {
    speak("Initializing JARVIS..");
    wishMe();
  }
}, { once: true });

const getCovidStats = async (country) => {
  const apiUrl = `https://disease.sh/v3/covid-19/countries/${country}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cases) {
          const covidMessage = `In ${country}, there are ${data.cases} confirmed cases, ${data.deaths} deaths, and ${data.recovered} recoveries.`;
          displayAndSpeakResult(covidMessage);
      } else {
          displayAndSpeakResult(`Sorry, I couldn't fetch COVID-19 statistics for ${country}.`);
      }
  } catch (error) {
      console.error('Error fetching COVID-19 statistics:', error);
      displayAndSpeakResult("Sorry, I encountered an error while fetching the COVID-19 statistics.");
  }
};

