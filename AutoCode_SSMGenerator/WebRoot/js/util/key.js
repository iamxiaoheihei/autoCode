function envelopkey(){//屏蔽键值
     if(event.keyCode==65&&event.ctrlKey)return true;//ctrl+a
else if(event.keyCode==90&&event.ctrlKey)return true;//ctrl+z
else if(event.keyCode==88&&event.ctrlKey)return true;//ctrl+x
else if(event.keyCode==86&&event.ctrlKey)return true;//ctrl+v
else if(event.keyCode==67&&event.ctrlKey)return true;//ctrl+c
//封闭ctrl+任意键
else if(event.keyCode&&event.ctrlKey)return false;   
//完全封闭alt键
else if(event.altKey){window.event.returnValue=false;}
//完全封闭shift键
else if(event.shiftKey)window.event.returnValue=false;
//Esc键关闭窗口
else if(event.keyCode==27){if(confirm("确定要退出并关闭系统吗？")){window.parent.parent.close();}else{window.event.returnValue=false;}}  
//F12 键查看原代码
else if(event.keyCode==123){window.location='view-source:'+window.location.href;}
//禁止使用F5键
else if(event.keyCode==116){alert('为保证系统安全，禁止使用F5键！');window.parent.parent.close();}
//禁止使用F11键
else if(event.keyCode==122){alert('为保证系统安全，禁止使用F11键！');window.parent.parent.close();}
else return true;}
if (document.all){document.onkeydown=envelopkey;}