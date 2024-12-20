const scrollUp = () => {
    window.scrollBy(0, -200); // Scroll up by 100 pixels
  };

  // Function to scroll down by a specified number of pixels
  const scrollDown = () => {
    window.scrollBy(0, 300); // Scroll down by 100 pixels
  };
  const fetchWordDefinition = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Word not found');
        }
        const data = await response.json();
        
        // Extracting the definition
        const definitions = data[0].meanings[0].definitions.map(def => def.definition);
        
        return definitions.length > 0 
            ? `Definitions of ${word}: ${definitions.join(', ')}`
            : `No definitions found for ${word}.`;
        
    } catch (error) {
        console.error('Error fetching word definition:', error);
        return "Sorry, I couldn't fetch the definition at the moment.";
    }
};
// Function to zoom in
const zoomIn = () => {
  document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) + 0.1;
  speak("Zooming in...");
};

// Function to zoom out
const zoomOut = () => {
  document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) - 0.1;
  speak("Zooming out...");
};
