//open multitasking
const openSocialMediaProfiles = () => {
    const socialMediaUrls = [
        'https://twitter.com/',
        'https://www.instagram.com/',
        'https://web.whatsapp.com/'
    ];
  
    socialMediaUrls.forEach((url, index) => {
        setTimeout(() => {
            window.open(url, '_blank');
        }, index * 1000); // Change delay time as needed (milliseconds)
    });
  };
  
  // Function to open multiple tabs
  const openMultipleTabs = (urls) => {
    urls.forEach(url => {
        window.open(url, '_blank');
    });
  };
  
  //news api
// const apiKey = '605a995a13391b69ef9869846728dde2'; // Your API key
// const newsApiUrl = 'https://gnews.io/api/v4/top-headlines'; // Corrected API endpoint URL

// const fetchNews = async () => {
//   try {
//     const response = await fetch(`${newsApiUrl}?token=${apiKey}`);
//     const data = await response.json();
//     return data.articles;
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return [];
//   }
// };

async function fetchNews() {
  const apiKey = 'pub_397262fdcc894030d3b10656c4a0176d93b1a';
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
          return data.results.map(article => ({
              title: article.title,
              description: article.description
          }));
      } else {
          return [];
      }
  } catch (error) {
      console.error("Error fetching news:", error);
      return [];
  }
}


const getEmailInfo = () => {
    
    const inboxCount = 50; 
    const unreadCount = 10; 
    speak(`You have ${inboxCount} emails in your inbox, out of which ${unreadCount} are unread.`);
  };


  //google api featch info
   
  
  const openLinkedInProfile = () => {
    const linkedInProfileURL = "https://www.linkedin.com/in/sujit-gore/";
    const newTab = window.open(linkedInProfileURL, "_blank");
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        // Opening the profile failed
        console.error("Failed to open LinkedIn profile.");
        speak("Failed to open your LinkedIn profile.");
    } else {
        console.log("LinkedIn profile opened successfully.");
        speak("Opening your LinkedIn profile...");
    }
};


const openAndReadWikipedia = async (topic) => {
  try {
    const wikipediaUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(topic)}`;
    const response = await fetch(wikipediaUrl);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const contentElement = doc.getElementById('content');
    if (contentElement) {
      const paragraphs = Array.from(contentElement.querySelectorAll('p'));
      const articleText = paragraphs.map(p => p.textContent.trim()).join('. ');
      speak(`Opening Wikipedia page for ${topic}. Here is the summary. ${articleText}`);
    } else {
      speak(`Sorry, I couldn't find the Wikipedia page for ${topic}`);
    }
  } catch (error) {
    console.error('Error opening Wikipedia page:', error);
    speak("Sorry, I encountered an error while opening the Wikipedia page.");
  }
};
let imageResults = [];
let currentImageIndex = 0;

async function fetchImages(query) {
    const apiKey = '9HdZKadS2nKjC61q8RB0nIO4uzXGRHTk6gtfaANNTmjlDs4YwojzEHWp'; // Your Pexels API key
    const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=10`; // Increase per_page for more images

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': apiKey
            }
        });
        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
            imageResults = data.photos;
            currentImageIndex = 0; // Reset to the first image
            return data.photos;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}

const fetchBooks = async (searchTerm) => {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerm)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.docs; // Return the list of books
    } catch (error) {
        console.error('Error fetching books:', error);
        return [];
    }
};



// Function to embed and play Spotify music
// Function to embed and play Spotify music
function playSpotifyMusic() {
    speak("Playing music...");

    const playlistId = "7GNYM6fdBdSMfTYHIMQFyi"; // Your Spotify playlist ID

    // Check if an iframe already exists and remove it
    const existingIframe = document.querySelector("iframe[title='Spotify Embed: Recommendation Playlist']");
    if (existingIframe) {
        existingIframe.remove();
    }

    // Create and configure a new iframe for Spotify
    const iframe = document.createElement("iframe");
    iframe.setAttribute("title", "Spotify Embed: Recommendation Playlist");
    iframe.setAttribute(
      "src",
      `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0&autoplay=true`
    );
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("style", "min-height: 360px");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute(
      "allow",
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    );
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowtransparency", "true");

    // Append the iframe to the body
    document.body.appendChild(iframe);
}

// Function to remove the Spotify iframe (stop music)
function stopSpotifyMusic() {
    const iframe = document.querySelector("iframe[title='Spotify Embed: Recommendation Playlist']");
    if (iframe) {
        iframe.remove();
        console.log("Music stopped");
    } else {
        console.log("No music is currently playing");
    }
}






