export class WindowHelper {
  public static addEventListener = (...[event, callback]) => {
    window.addEventListener(event, callback);
  };

  public static handleKeyDown = (event, callback) => {
    let keyCode = null;

    if (window.event) {
      keyCode = event.keyCode;
    } else if (event.which) {
      keyCode = event.which;
    }

    switch (keyCode) {
      case 461:
        callback();
        break;
    }
  };

  public static handleBackKeyDown = (callback) => {
    WindowHelper.handleKeyDown(461, callback);
  };
}
