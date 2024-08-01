// 此文件暂时为空，可以在未来添加交互功能
console.log("欢迎来到许兵的个人网站！");

// 跳转功能的实现
document.getElementById('jump-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('url-input').value;
    if (url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }
        window.location.href = url;
    } else {
        alert('请输入一个有效的网址。');
    }
});
