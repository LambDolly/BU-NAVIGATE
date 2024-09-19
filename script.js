document.getElementById('menuIcon').addEventListener('click', function () {  
    var navbar = document.getElementById('nav');  
    navbar.classList.toggle('open');  
});

document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    chatButton.addEventListener('click', () => {
        chatContainer.classList.add('open');
    });

    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('open');
    });

    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat('用户', message);
            userInput.value = '';
            callAIAPI(message);
        }
    }

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === '用户' ? 'user-message' : 'ai-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function callAIAPI(message) {
        const apiKey = 'sk-86e9efb0f95845258136d000c1c66ab5';
        const apiUrl = 'https://api.deepseek.com/v1/chat/completions';
        const model = 'deepseek-coder';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [{ role: 'user', content: message }]
                })
            });

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                const aiResponse = data.choices[0].message.content;
                addMessageToChat('AI', aiResponse);
            } else {
                throw new Error('无效的API响应');
            }
        } catch (error) {
            console.error('Error:', error);
            addMessageToChat('AI', '抱歉,出现了一些问题。请稍后再试。');
        }
    }
});
