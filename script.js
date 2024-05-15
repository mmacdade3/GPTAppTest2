function startGame() {
    document.querySelector('.welcome-screen').classList.add('hidden');
    document.querySelector('.game-screen').classList.remove('hidden');
    enableDragAndDrop();
}

function enableDragAndDrop() {
    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', product.id);
        });
    });

    document.querySelectorAll('.description').forEach(description => {
        description.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        description.addEventListener('drop', (event) => {
            const productId = event.dataTransfer.getData('text');
            matchProduct(description, document.getElementById(productId));
        });
    });
}

function matchProduct(descriptionElement, productElement) {
    if (descriptionElement.dataset.productId === productElement.id) {
        descriptionElement.classList.add('correct');
        descriptionElement.classList.remove('incorrect');
    } else {
        descriptionElement.classList.add('incorrect');
        descriptionElement.classList.remove('correct');
        setTimeout(() => {
            descriptionElement.classList.remove('incorrect');
        }, 1000);
    }
    updateProgress();
}

function updateProgress() {
    const total = document.querySelectorAll('.description').length;
    const correct = document.querySelectorAll('.correct').length;
    const percentage = Math.round((correct / total) * 100);
    document.getElementById('progress-percentage').textContent = percentage + '%';
}

