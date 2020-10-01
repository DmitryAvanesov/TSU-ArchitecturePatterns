using System;

namespace singleton {
  class Logger {
    // private constructor, so you can't create a new instance
    private Logger () { }
    // instance, the one and only
    private static Logger _instance;

    // the method to get the only instance (and create it if there's no one)
    public static Logger GetInstance () {
      if (_instance == null) {
        _instance = new Logger ();
      }

      return _instance;
    }

    // the method to log data to console
    public void Log (ConsoleKeyInfo key) {
      Console.WriteLine (": You pressed {0}", key.KeyChar);
    }
  }
}