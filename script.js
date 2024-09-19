// 为菜单图标添加点击事件，实现导航栏的开关功能
document.getElementById('menuIcon').addEventListener('click', function () {  
    var navbar = document.getElementById('nav');  
    navbar.classList.toggle('open');  
});

// 当DOM内容加载完成后执行以下功能
document.addEventListener('DOMContentLoaded', function() {
    const searchEngineButton = document.getElementById('searchEngineButton');
    const searchEngineDropdown = document.getElementById('searchEngineDropdown');
    const searchForm = document.getElementById('searchForm');
    const currentEngineIcon = document.getElementById('currentEngineIcon');

    // 为搜索引擎按钮添加点击事件，控制下拉菜单的显示和隐藏
    searchEngineButton.addEventListener('click', function(event) {
        event.stopPropagation();
        searchEngineDropdown.classList.toggle('show');
        
        // 如果下拉菜单显示，添加动画效果
        if (searchEngineDropdown.classList.contains('show')) {
            setTimeout(() => {
                const options = searchEngineDropdown.querySelectorAll('.engine-option');
                options.forEach((option, index) => {
                    setTimeout(() => {
                        option.style.opacity = '1';
                        option.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 50);
        } else {
            // 如果下拉菜单隐藏，重置样式
            const options = searchEngineDropdown.querySelectorAll('.engine-option');
            options.forEach(option => {
                option.style.opacity = '0';
                option.style.transform = 'translateY(-20px)';
            });
        }
    });

    // 为每个搜索引擎选项添加点击事件
    document.querySelectorAll('.engine-option').forEach(option => {
        option.addEventListener('click', function(event) {
            event.stopPropagation();
            const engine = this.getAttribute('data-engine');
            const action = this.getAttribute('data-action');
            const icon = this.querySelector('img').src;

            // 更新搜索表单的action和图标
            searchForm.action = action;
            currentEngineIcon.src = icon;
            searchEngineDropdown.classList.remove('show');

            // 根据选择的搜索引擎更新搜索参数名称
            const searchInput = searchForm.querySelector('input[type="text"]');
            if (engine === 'google') {
                searchInput.name = 'q';
            } else if (engine === 'baidu') {
                searchInput.name = 'wd';
            } else if (engine === 'yahoo') {
                searchInput.name = 'p';
            }
        });
    });

    // 点击页面其他地方时关闭下拉菜单
    document.addEventListener('click', function(event) {
        if (!searchEngineDropdown.contains(event.target) && !searchEngineButton.contains(event.target)) {
            searchEngineDropdown.classList.remove('show');
        }
    });
});

// 当DOM内容加载完成后执行AI聊天相关功能
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // 判断是否为移动设备
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 打开聊天窗口
    chatButton.addEventListener('click', () => {
        chatContainer.classList.add('open');
        chatButton.style.display = 'none';
        if (isMobile()) {
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }
    });

    // 关闭聊天窗口
    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('open');
        chatButton.style.display = 'block';
        if (isMobile()) {
            document.body.style.overflow = ''; // 恢复背景滚动
        }
    });

    // 发送消息事件
    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    // 发送用户消息的函数
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessageToChat('用户', message);
            userInput.value = '';
            callAIAPI(message);
        }
    }

    // 将消息添加到聊天窗口
    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === '用户' ? 'user-message' : 'ai-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 调用AI API的函数
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

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;
            addMessageToChat('AI', aiResponse);
        } catch (error) {
            console.error('Error:', error);
            addMessageToChat('AI', 'Sorry, I encountered an error. Please try again later.');
        }
    }
});
