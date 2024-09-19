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
        
        if (searchEngineDropdown.classList.contains('show')) {
            setTimeout(() => {
                const options = searchEngineDropdown.querySelectorAll('.engine-option');
                options.forEach((option, index) => {
                    option.style.transitionDelay = `${0.1 + index * 0.05}s`;
                });
            }, 0);
        } else {
            const options = searchEngineDropdown.querySelectorAll('.engine-option');
            options.forEach(option => {
                option.style.transitionDelay = '0s';
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

    // 点击页面其他���方时关闭下拉菜单
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
    const searchEngineDropdown = document.querySelector('.search-engine-dropdown');
    const chatInput = document.querySelector('.chat-input input');

    // 判断是否为移动设备
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 打开聊天窗口
    chatButton.addEventListener('click', () => {
        chatContainer.classList.add('open');
        chatButton.style.display = 'none';
        if (isMobile()) {
            document.body.classList.add('chat-open');
            searchEngineDropdown.classList.add('hide');
        }
    });

    // 关闭聊天窗口
    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('open');
        chatButton.style.display = 'block';
        if (isMobile()) {
            document.body.classList.remove('chat-open');
            searchEngineDropdown.classList.remove('hide');
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

    // 防止输入框获得焦点时页面放大
    chatInput.addEventListener('focus', function() {
        if (isMobile()) {
            // 临时调整 viewport
            const viewport = document.querySelector('meta[name=viewport]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
        }
    });

    chatInput.addEventListener('blur', function() {
        if (isMobile()) {
            // 恢复原始 viewport 设置
            const viewport = document.querySelector('meta[name=viewport]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
    });
});

// 控制底部信息栏的显示和隐藏
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    let lastScrollTop = 0;
    let isFooterVisible = true;

    function handleFooterVisibility() {
        if (window.innerWidth <= 768) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && isFooterVisible) {
                // 向下滚动，隐藏footer
                footer.style.transform = 'translateY(100%)';
                isFooterVisible = false;
            } else if (scrollTop < lastScrollTop && !isFooterVisible) {
                // 向上滚动，显示footer
                footer.style.transform = 'translateY(0)';
                isFooterVisible = true;
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        } else {
            // 在大屏幕上，始终显示footer
            footer.style.transform = 'translateY(0)';
            isFooterVisible = true;
        }
    }

    window.addEventListener('scroll', handleFooterVisibility);
    window.addEventListener('resize', handleFooterVisibility);

    // 初始状态下处理footer可见性
    handleFooterVisibility();
});
