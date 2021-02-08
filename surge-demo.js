#!name=demo
#!desc=this is a demo
#!system=mac

[Script]
demoScript = type=http-request,pattern=^https://baidu.com script-path=http-request.js,max-size=16384,debug=true
