let headers = $request.headers;
delete headers['If-None-Match'];
console.log('2025.03.20-qx-spotify刪除請求頭')
$done({headers});
