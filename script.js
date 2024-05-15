// script.js
function startGame() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'flex';
    setupGame();
}

function setupGame() {
    const products = [
        { name: 'Catalog', description: 'Provide consumer, business and enterprise customers with rich, innovative offerings by bundling connectivity with your own advanced digital services, and combining them with the best your partners have to offer.' },
        { name: 'AI & Data Platform', description: 'Collect & monetize data from any source and scale to produce business-ready data and harness the power of embedded AI across the enterprise. This single, modular end-to-end platform manages and automates your operations and network – while delivering a superior customer experience.' },
        { name: 'HomeOS', description: 'Improve the home connectivity experience and profoundly reduce the cost of care.' },
        { name: 'Charging', description: 'Monetize the network by launching new experiences and offers rapidly, bridging the monetization of 4G and 5G.' },
        { name: 'Bill Experience', description: 'Enhance your customer’s billing experience with personalized bill design making it easy for your customers in any sector to view and pay the bills in an easy, transparent way.' },
    ];
    const productsContainer = document.getElementById('products');
    const descriptionsContainer = document.getElementById('descriptions');

    products.forEach(product => {
        const dragItem = document.createElement('div');
        dragItem.textContent = product.name;
        dragItem.classList.add('draggable');
        dragItem.draggable = true;
        dragItem.ondragstart = (event) => {
            event.dataTransfer.setData("text/plain", product.description);
        };
        productsContainer.appendChild(dragItem);

        const dropArea = document.createElement('div');
        dropArea.classList.add('droppable');
        dropArea.textContent = product.description;
        dropArea.ondragover = (event) => {
            event.preventDefault();
        };
        dropArea.ondrop = (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData("text/plain");
            if (data === dropArea.textContent) {
                dropArea.style.backgroundColor = 'green'; // Correct
            } else {
                dropArea.style.backgroundColor = 'red'; // Incorrect
                setTimeout(() => { dropArea.style.backgroundColor = '#555'; }, 2000); // Reset color after 2 seconds
            }
        };
        descriptionsContainer.appendChild(dropArea);
    });
}
