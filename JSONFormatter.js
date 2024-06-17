// 初始时隐藏所有工具部分，只显示第一个
document.addEventListener('DOMContentLoaded', function() {
    var toolSections = document.querySelectorAll('.tool-section');
    toolSections.forEach(function(section) {
        section.style.display = 'none';
    });
    toolSections[0].style.display = 'block'; // 显示第一个工具部分
});

// 切换工具显示的函数
function showTool(toolId) {
    var toolSections = document.querySelectorAll('.tool-section');
    toolSections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(toolId).style.display = 'block';
}

// 为每个工具按钮添加事件监听器
var toolButtons = document.querySelectorAll('#categories a');
toolButtons.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止链接的默认行为
        var toolId = this.getAttribute('href').substring(1); // 获取href属性中的ID
        showTool(toolId);
    });
});

function formatJSON() {
    var input = document.getElementById('json-input').value;
    try {
        var formattedJson = JSON.stringify(JSON.parse(input), null, 4);
        document.getElementById('json-output').value = formattedJson;
    } catch (e) {
        alert('请输入有效的JSON字符串');
    }
}


function extractSubtitleContent() {
    var input = document.getElementById('json-input-extractor').value;
    try {
        var jsonData = JSON.parse(input);
        var bodyContent = jsonData.body || []; // 获取 body 数组
        var contentArray = bodyContent.map(item => item.content); // 提取 content 字段
        var result = contentArray.join('\n'); // 使用换行符连接内容
        document.getElementById('content-output-extractor').value = result; // 显示结果
    } catch (e) {
        alert('请输入有效的JSON字符串');
    }
}

