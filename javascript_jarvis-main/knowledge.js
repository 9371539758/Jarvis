// Function to provide explanation for different topics
async function provideExplanation(topic) {
  let explanation = "";

  // Handle different topics
  switch (topic.toLowerCase()) {
    case "e=mc^2":
      explanation =
        "E=mc^2 is Einstein's famous equation from his theory of relativity. It states that energy (E) is equal to mass (m) times the speed of light squared (c^2). This equation shows that mass and energy are interchangeable.";
      break;
    case "newton's law":
      explanation =
        "Newton's laws of motion consist of three principles formulated by Sir Isaac Newton. The first law, known as the law of inertia, states that an object remains at rest or in uniform motion unless acted upon by an external force. The second law describes how the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. The third law states that for every action, there is an equal and opposite reaction.";
      break;
    case "big bang theory":
      explanation =
        "The Big Bang theory is the prevailing cosmological model explaining the origin and evolution of the universe. It suggests that the universe began as a hot, dense point around 13.8 billion years ago and has been expanding and cooling ever since. This theory accounts for the observed expansion of the universe, the cosmic microwave background radiation, and the abundance of light elements.";
      break;
    case "photosynthesis":
      explanation =
        "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy and carbon dioxide into chemical energy in the form of glucose. This process releases oxygen as a byproduct and is essential for sustaining life on Earth.";
      break;
    case "global warming":
      explanation =
        "Global warming refers to the long-term increase in Earth's average surface temperature due to human activities, such as the burning of fossil fuels and deforestation. This phenomenon leads to climate change, resulting in rising sea levels, extreme weather events, and disruptions to ecosystems.";
      break;
    case "dna":
      explanation =
        "DNA, or deoxyribonucleic acid, is a molecule that contains the genetic instructions for the development, functioning, growth, and reproduction of all known living organisms. It consists of two long strands forming a double helix structure and contains the genetic code necessary for the synthesis of proteins.";
      break;
    // Add more topics related to information technology
    case "artificial intelligence":
      explanation =
        "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, problem-solving, perception, and natural language understanding. AI technologies are widely used in various industries, including healthcare, finance, transportation, and entertainment.";
      break;
    case "blockchain":
      explanation =
        "Blockchain is a decentralized, distributed ledger technology that records transactions across multiple computers in a way that is secure, transparent, and tamper-resistant. It enables peer-to-peer transactions without the need for intermediaries and has applications in cryptocurrency, supply chain management, voting systems, and more.";
      break;
    case "cloud computing":
      explanation =
        "Cloud computing refers to the delivery of computing services, including servers, storage, databases, networking, software, and analytics, over the Internet (the cloud) to offer faster innovation, flexible resources, and economies of scale. It allows organizations to access computing resources on-demand, pay only for what they use, and scale their infrastructure as needed.";
      break;
    case "history":
      explanation =
        "History is the study of past events, particularly those relating to human affairs. It encompasses a wide range of topics, including political, social, economic, cultural, and military developments throughout time. Some significant historical events include the French Revolution, the American Civil War, World War II, the Renaissance, and the Industrial Revolution.";
      break;
    case "sport":
      explanation =
        "Sports are physical activities or games that involve skill, competition, and physical exertion. They can be individual or team-based and are enjoyed by people of all ages and backgrounds. Popular sports include football (soccer), basketball, cricket, tennis, golf, and athletics (track and field). Sports promote physical fitness, teamwork, discipline, and camaraderie among participants.";
      break;
    case "robot":
      explanation =
        "A robot is a machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer. Robots are used in various fields, including manufacturing, healthcare, agriculture, and space exploration, to perform tasks that are repetitive, dangerous, or require precision.";
      break;
    case "machine learning":
      explanation =
        "Machine learning is a subset of artificial intelligence that focuses on the development of algorithms and statistical models that enable computers to learn and improve from experience without being explicitly programmed. It encompasses techniques such as supervised learning, unsupervised learning, and reinforcement learning.";
      break;
    case "nasa":
      explanation =
        "NASA, or the National Aeronautics and Space Administration, is the United States government agency responsible for the nation's civilian space program and for aeronautics and aerospace research. NASA conducts space exploration missions, scientific research, and technological advancements aimed at expanding our understanding of the universe and improving life on Earth.";
      break;
    case "isro":
      explanation =
        "ISRO, or the Indian Space Research Organisation, is the space agency of the Government of India responsible for the country's space research and exploration programs. ISRO conducts satellite launches, planetary exploration, and space missions to support various applications, including communication, navigation, remote sensing, and scientific research.";
      break;
    case "space":
      explanation =
        "Space is the boundless three-dimensional extent in which objects and events occur and have relative position and direction. It includes the Earth's atmosphere and celestial bodies such as stars, planets, moons, asteroids, comets, and galaxies. Space exploration involves the study and exploration of outer space, including manned and unmanned missions to explore distant celestial objects.";
      break;
    case "science":
      explanation =
        "Science is the systematic study of the structure and behavior of the physical and natural world through observation and experimentation. It encompasses a wide range of disciplines, including physics, chemistry, biology, astronomy, geology, and environmental science. Science seeks to understand the underlying principles governing the universe and to make predictions based on empirical evidence.";
      break;
    // Case 1
    case "data mining":
      explanation =
        "Data mining is the process of discovering patterns, correlations, and insights from large datasets using various techniques, including machine learning, statistical analysis, and pattern recognition. It is used to extract valuable information from data and make informed decisions in business, healthcare, finance, and other domains.";
      break;

    // Case 2
    case "augmented reality (AR)":
      explanation =
        "Augmented reality (AR) is a technology that overlays digital information, such as images, videos, or 3D models, onto the real-world environment. AR enhances the user's perception of reality by integrating virtual elements with the physical world, typically viewed through smartphones, tablets, or AR glasses. It has applications in gaming, education, marketing, and industrial training.";
      break;

    // Case 3
    case "machine vision":
      explanation =
        "Machine vision is a technology that enables machines, such as computers or robots, to interpret and understand visual information from images or videos. It involves the use of cameras, sensors, and algorithms to analyze and process visual data, allowing machines to perceive their surroundings, identify objects, and make decisions based on visual input. Machine vision is used in manufacturing, robotics, healthcare, autonomous vehicles, and quality inspection.";
      break;

    // Case 4
    case "quantum computing":
      explanation =
        "Quantum computing is a revolutionary computing paradigm that uses quantum bits, or qubits, to perform computations based on the principles of quantum mechanics. Unlike classical computers, which use bits to represent either 0 or 1, qubits can represent both 0 and 1 simultaneously, allowing quantum computers to process vast amounts of data and solve complex problems much faster than classical computers. Quantum computing has the potential to revolutionize fields such as cryptography, drug discovery, optimization, and machine learning.";
      break;

    // Case 5
    case "edge computing":
      explanation =
        "Edge computing is a distributed computing paradigm that brings computation and data storage closer to the location where it is needed, such as the edge of the network or IoT devices, rather than relying on centralized data centers. Edge computing reduces latency, bandwidth usage, and reliance on cloud infrastructure by processing data locally, making it ideal for real-time applications, IoT deployments, and situations where network connectivity is limited or unreliable.";
      break;

    // Case 6
    case "quantum cryptography":
      explanation =
        "Quantum cryptography is a method of secure communication that uses principles of quantum mechanics to encrypt and decrypt messages. Unlike classical cryptographic techniques, which rely on mathematical algorithms, quantum cryptography utilizes the quantum properties of particles, such as superposition and entanglement, to ensure the security of transmitted data. Quantum cryptography offers provably secure communication channels, resistant to eavesdropping and decryption by quantum computers.";
      break;

    // Case 7
    case "fog computing":
      explanation =
        "Fog computing is a decentralized computing infrastructure that extends cloud computing capabilities to the edge of the network, closer to the data source. It involves the deployment of computing resources, such as storage, processing, and networking, in proximity to IoT devices or end-users, enabling low-latency data processing, real-time analytics, and improved efficiency. Fog computing complements cloud computing by offloading computational tasks and data storage to edge devices.";
      break;

    // Case 8
    case "neural network":
      explanation =
        "A neural network is a computational model inspired by the structure and functioning of the human brain's neural networks. It consists of interconnected nodes, or artificial neurons, organized in layers and capable of learning from data. Neural networks are trained on large datasets to recognize patterns, make predictions, and perform tasks such as image classification, speech recognition, and natural language processing.";
      break;

    // Case 9
    case "5G technology":
      explanation =
        "5G technology is the fifth generation of wireless communication technology that promises faster data speeds, lower latency, and greater network capacity compared to previous generations (4G LTE). It uses advanced radio technologies, such as millimeter-wave frequencies and massive MIMO (Multiple Input Multiple Output), to deliver high-bandwidth, low-latency connectivity for applications such as autonomous vehicles, remote surgery, virtual reality, and IoT.";
      break;

    // Case 10
    case "cyber-physical systems":
      explanation =
        "Cyber-physical systems (CPS) are integrated systems of computation, networking, and physical processes that interact with the physical world via sensors and actuators. CPS combine digital and physical components to monitor and control physical processes in real-time, enabling autonomous operation, predictive maintenance, and adaptive control in various domains, including manufacturing, transportation, healthcare, and smart cities.";
      break;

    // Case 11
    case "serverless computing":
      explanation =
        "Serverless computing, also known as Function as a Service (FaaS), is a cloud computing model where cloud providers manage the infrastructure required to run and scale applications, allowing developers to focus on writing code without worrying about servers or provisioning resources. In serverless architecture, applications are broken down into small, independent functions that are triggered by events and executed in ephemeral containers, providing scalability, cost-efficiency, and simplified deployment.";
      break;

    // Case 12
    case "containerization":
      explanation =
        "Containerization is a lightweight virtualization technology that encapsulates applications and their dependencies into portable, isolated containers, allowing them to run consistently across different computing environments, such as development, testing, and production. Containers share the host operating system's kernel, enabling faster startup times, efficient resource utilization, and seamless deployment of microservices-based architectures.";
      break;

    // Case 13
    case "microservices architecture":
      explanation =
        "Microservices architecture is an architectural style that structures applications as a collection of loosely coupled, independently deployable services, each responsible for a specific business function. Microservices communicate via lightweight protocols, such as HTTP or messaging queues, and can be developed, deployed, and scaled independently, enabling agility, scalability, and resilience in complex software systems.";
      break;

    // Case 14
    case "software-defined networking (SDN)":
      explanation =
        "Software-defined networking (SDN) is an approach to network management that abstracts and decouples the control plane from the data plane, allowing network administrators to programmatically control network behavior through software-based controllers. SDN centralizes network intelligence and provides a centralized view of the network, enabling automation, agility, and dynamic provisioning of network resources.";
      break;

    // Case 15
    case "natural language processing (NLP)":
      explanation =
        "Natural language processing (NLP) is a branch of artificial intelligence that enables computers to understand, interpret, and generate human language. NLP algorithms analyze and process text or speech data to extract meaning, sentiment, and intent, enabling applications such as language translation, chatbots, sentiment analysis, and voice recognition.";
      break;

    // Case 16
    case "data warehousing":
      explanation =
        "Data warehousing is the process of collecting, storing, and managing large volumes of structured and unstructured data from various sources to support business intelligence and decision-making. Data warehouses consolidate data from multiple sources into a single, centralized repository, where it can be analyzed, queried, and visualized to extract insights, trends, and patterns.";
      break;

    // Case 17
    case "cloud-native":
      explanation =
        "Cloud-native is an approach to building and running applications that fully exploit the advantages of cloud computing, such as scalability, agility, and elasticity. Cloud-native applications are designed as a collection of loosely coupled, independently deployable services, packaged in containers, and orchestrated by cloud-native platforms, such as Kubernetes. Cloud-native development practices enable faster delivery, continuous deployment, and resilience in modern software architectures.";
      break;

    // Case 18
    case "DevOps":
      explanation =
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and deliver high-quality software applications more quickly and efficiently. DevOps emphasizes collaboration, automation, continuous integration, and continuous delivery (CI/CD) to streamline software development, deployment, and monitoring processes.";
      break;

    // Case 19
    case "artificial general intelligence (AGI)":
      explanation =
        "Artificial general intelligence (AGI) is a theoretical form of artificial intelligence that possesses the ability to understand, learn, and apply knowledge across a wide range of tasks, similar to human intelligence. Unlike narrow AI systems, which are designed for specific tasks, AGI aims to achieve human-like cognitive capabilities, including reasoning, problem-solving, and creativity.";
      break;

    // Case 20
    case "deep learning":
      explanation =
        "Deep learning is a subset of machine learning that employs artificial neural networks with multiple layers (deep neural networks) to learn representations of data through hierarchical abstraction. Deep learning algorithms automatically discover patterns, features, and relationships in large datasets, enabling tasks such as image recognition, speech recognition, natural language processing, and autonomous driving.";
      break;

    // Case 21
    case "graph databases":
      explanation =
        "Graph databases are a type of NoSQL database that uses graph structures with nodes, edges, and properties to represent and store data, such as entities and relationships, in a flexible and efficient manner. Graph databases excel at managing highly interconnected data, such as social networks, recommendation engines, fraud detection, and network analysis, by enabling fast traversal and querying of complex relationships.";
      break;

    // default:
    //   // If no specific topic is matched, perform a Google search and return the first result
    //   const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    //     topic
    //   )}`;
    //   window.open(googleSearchUrl, "_blank");
    //   speak(
    //     "I'm sorry, I don't have information on that topic. Here's what I found on Google."
    //   );
    default:
      explanation = await getWikiInfo(topic);
      break;
      return;
  }

  // Append the explanation to the .chat-container
  const chatContainer = document.querySelector(".chat-container");
  const explanationElement = document.createElement("div");
  explanationElement.classList.add("message");
  explanationElement.textContent = explanation;
  chatContainer.appendChild(explanationElement);

  // Speak the explanation
  speak(explanation); // Assuming speak function is defined elsewhere
}
let currentModal = null; // To keep track of the current modal

function showImageInPopup(imageUrl) {
    // Remove existing modal if it exists
    if (currentModal) {
        document.body.removeChild(currentModal);
    }

    // Create modal container
    const modal = document.createElement('div');
    modal.style.display = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    modal.style.position = 'fixed';
    modal.style.overflow = 'auto';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.margin = '15% auto';
    modalContent.style.padding = '20px';
    modalContent.style.width = '500px';
    modalContent.style.height = '500px';
    modalContent.style.position = 'relative';
    modalContent.style.borderRadius = '15px'; // Rounded corners
    modalContent.style.background = 'rgba(255, 255, 255, 0.1)'; // Semi-transparent background
    modalContent.style.backdropFilter = 'blur(10px)'; // Glassmorphism effect
    modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Optional shadow for depth

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '28px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#fff'; // Light color for better contrast
    closeButton.style.fontWeight = 'bold';

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
        currentModal = null; // Reset currentModal
    });

    // Create next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.style.position = 'absolute';
    nextButton.style.bottom = '10px';
    nextButton.style.right = '10px';
    nextButton.style.fontSize = '16px';
    nextButton.style.cursor = 'pointer';
    nextButton.style.backgroundColor = '#fff'; // Background color
    nextButton.style.color = '#000'; // Text color
    nextButton.style.border = 'none'; // Remove border
    nextButton.style.borderRadius = '5px'; // Rounded corners for the button
    nextButton.style.padding = '10px 20px'; // Padding for the button

    nextButton.addEventListener('click', () => {
        if (imageResults.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % imageResults.length;
            const nextImageUrl = imageResults[currentImageIndex].src.medium;
            img.src = nextImageUrl;
        }
    });

    // Create image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';

    // Append elements to the modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(nextButton);
    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    currentModal = modal; // Set currentModal to the new modal
}

async function getWikiInfo(topic) {
  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.extract) {
      return data.extract;
    } else {
      return "Sorry, I couldn't find a Wikipedia summary for that topic.";
    }
  } catch (error) {
    return "There was an error retrieving information from Wikipedia.";
  }
}