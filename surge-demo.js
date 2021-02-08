$notification.post('title', 'subtitle', 'This is Baidu')

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});
