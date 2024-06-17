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
