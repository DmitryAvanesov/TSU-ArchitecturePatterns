using System;

namespace singleton {
  // So, here's my singleton class for logging pressed keys
  // In general, it's pretty basic, but I used lazy instance initialization for 2 reasons:
  // 1) It takes less computing resources, cause the logger is created
  // right after the 1st GetInstance() call, not during the compilation
  // 2) It's thread-safe, so multiple threads can work with this logger
  class Logger {
    // private constructor, so you can't create a new instance
    private Logger () { }
    // instance, the one and only
    private static Logger _instance;

    // the method to get the only instance (and create it if there's no one)
    public static Logger GetInstance () {
      if (_instance == null) {
        Lazy<Logger> lazy = new Lazy<Logger> (() => new Logger ());
        _instance = lazy.Value;
      }

      return _instance;
    }

    // the method to log data to console
    public void Log (ConsoleKeyInfo key) {
      Console.WriteLine (": You pressed {0}", key.KeyChar);
    }
  }
}
