* {
    box-sizing: border-box;
  }
   
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-image: url('bu_background.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
  }
   
  .navbar {
    background-color: #ffffff;
    color: #fff;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
   
  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #c50000; /* 添加这行 */
  }
   
  .main-logo {
    font-size: 24px; /* 或您希望的大小 */
    font-weight: bold;
    color: #c50000; /* 添加这行 */
  }

  .sub-logo {
    font-size: 14px; /* 较小的字号 */
    margin-top: -5px; /* 调整与上方文字的间距 */
    color: #c50000; /* 添加这行 */
  }
   
  .navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
   
  .navbar li {
    position: relative;
    margin-right: 15px;
  }
   
  .navbar li a {
    color: #000000;
    text-decoration: none;
    padding: 10px;
  }
   
  .navbar li a:hover {
    color: #c50000;
  }
   
  .search-box {
    position: relative;
  }
   
  .search-box input {
    width: 200px;
    height: 30px;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    background-color: #eff6f8;
  }
   
  .buttons {
    display: flex;
  }
   
  .buttons button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
   
  .login {
    color: #232c53;
    background-color: #fff;
  }
   
  .register {
    color: #fff;
    background-color: #232c53;
    border-radius: 10px;
  }
  /* 添加响应式设计的样式 */
@media screen and (max-width: 768px) {
    .navbar {
      position: relative;
      padding: 10px 10px;
    }
   
    /* 在小屏幕上隐藏导航栏和搜索框等 */
    .navbar ul,
    .search-box,
    .buttons {
      display: none;
    }
   
    /* 显示汉堡式图标 */
    .navbar .menu-icon {
      display: block;
      position: relative;
      width: 30px;
      height: 20px;
      cursor: pointer;
    }
   
    .navbar .menu-icon span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: #232c53;
      border-radius: 4px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }
   
    .navbar .menu-icon span:nth-child(1) {
      top: 0px;
    }
   
    .navbar .menu-icon span:nth-child(2),
    .navbar .menu-icon span:nth-child(3) {
      top: 10px;
    }
   
    .navbar .menu-icon span:nth-child(4) {
      top: 20px;
    }
   
    /* 菜单展开时的样式 */
    .navbar.open .menu-icon span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
   
    .navbar.open .menu-icon span:nth-child(2) {
      transform: rotate(45deg);
    }
   
    .navbar.open .menu-icon span:nth-child(3) {
      transform: rotate(-45deg);
    }
   
    .navbar.open .menu-icon span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
   
    /* 展开菜单时的导航栏样式 */
    .navbar.open ul {
      display: flex;
      flex-direction: column;
    }
   
    .navbar.open .search-box,
    .navbar.open .buttons {
      display: block;
    }
   
    .search-box,
    .buttons {
      display: block;
    }
   
    #navbarMenu {
      width: 100%;
      flex-direction: column;
      gap: 10px;
      padding: 10px 0;
      background-color: #ffffff;
      border-radius: 10px;
      position: absolute;
      left: 0;
      bottom: -200px;
      text-align: center;
    }
   
    #navbarMenu li a {
      font-size: 20px;
    }
  }

.central-search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    text-align: center;
}

.central-search h1 {
    color: #c50000;
    margin-bottom: 20px;
}

.search-container {
    display: flex;
    max-width: 600px;
    width: 90%;
}

.search-container input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #c50000;
    border-right: none;
    border-radius: 5px 0 0 5px;
}

.search-container button {
    padding: 10px 20px;
    background-color: #c50000;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

.search-container button:hover {
    background-color: #a40000;
}

/* 为了确保文字可读性，我们可以添加一个半透明的遮罩 */
body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7); /* 白色半透明遮罩 */
    z-index: -1;
}

/* 调整其他元素样式以适应新背景 */
.navbar, .central-search, .link-sections {
    background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.link-section {
    background-color: rgba(255, 255, 255, 0.9); /* 稍微更不透明 */
}

/* 可能需要调整文字颜色以增加对比度 */
body, .navbar a, .link-section a {
    color: #333;
}

h1, h2, .navbar .logo {
    color: #c50000; /* 保持红色主题 */
}

.link-sections {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    padding: 0 20px;
}

.link-section {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    width: 30%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.link-section h2 {
    color: #c50000;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.link-section ul {
    list-style-type: none;
    padding: 0;
}

.link-section li {
    margin-bottom: 10px;
}

.link-section a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
}

.link-section a:hover {
    color: #c50000;
}

@media (max-width: 768px) {
    .link-sections {
        flex-direction: column;
        align-items: center;
    }

    .link-section {
        width: 80%;
        margin-bottom: 20px;
    }
}
