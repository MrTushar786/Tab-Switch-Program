const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const head = document.getElementById('head');
const text = document.getElementById('text');

nav1.addEventListener('click', () => {
    head.innerHTML = "First tab content";
    text.innerHTML = `The Amazon Rainforest, often referred to as the "lungs of the Earth," spans over 6.7 million square kilometers and houses an unparalleled biodiversity. Home to millions of species of plants, animals, and indigenous communities, the rainforest plays a crucial role in regulating the global climate by absorbing and storing massive amounts of carbon dioxide. Unfortunately, the Amazon faces threats from deforestation, driven by logging, agriculture, and urbanization. Conservation efforts are vital to preserve this invaluable ecosystem, protect endangered species, and maintain the delicate balance of our planet's ecology.`;
    nav1.style.background = "";
    nav2.style.background = "";
    nav3.style.background = "";
    nav1.style.background = "White";
});

nav2.addEventListener('click', () => {
    head.innerHTML = "Second tab content";
    text.innerHTML = `Artificial intelligence (AI) is revolutionizing industries and daily life. From virtual assistants to advanced machine learning algorithms, AI is reshaping how we work and interact. One notable application is in healthcare, where AI aids in diagnostics, personalized treatment plans, and drug discovery. The ability of AI to analyze vast datasets quickly enhances medical research and improves patient outcomes. As AI continues to evolve, ethical considerations, privacy concerns, and the need for responsible development become crucial aspects of its integration into society. Its benefits are maximized while minimizing potential risks and challenges.`;
    nav1.style.background = "";
    nav2.style.background = "";
    nav3.style.background = "";
    nav2.style.background = "White";
})

nav3.addEventListener('click', () => {
    head.innerHTML = "Third tab content";
    text.innerHTML = `Renewable energy sources are pivotal in addressing the global energy challenge and mitigating climate change. Solar power, in particular, harnesses the sun's energy to generate electricity with minimal environmental impact. Photovoltaic cells convert sunlight into electrical energy, offering a clean and sustainable alternative to fossil fuels. As technology advances, solar panels become more efficient and cost-effective, making widespread adoption feasible. Transitioning to renewable energy not only reduces carbon emissions but also enhances energy security and promotes a sustainable future for generations to come.`;
    nav1.style.background = "";
    nav2.style.background = "";
    nav3.style.background = "";
    nav3.style.background = "White";
});
