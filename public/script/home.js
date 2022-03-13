function aa() {
  fetch("/expired_items_check")
    .then((response) => response.json())
    .then((data) => check(data));
}
aa();
function check(data) {
  if (data.length > 0) {
    function showNotification() {
      const notification = new Notification("new message", {
        // body: "hi priyansh",
        body: "The items in your fridge are about to get expired",
      });
      notification.onclick = (e) => {
        window.location.href = "/edit_items";
      };
    }
    console.log(Notification.permission);
    if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  }
}
