using System;

namespace singleton {
  class Program {
    static void Main (string[] args) {
      // getting the only instance
      Logger logger = Logger.GetInstance ();

      while (true) {
        // listening to keyboard events and logging them
        logger.Log (Console.ReadKey ());
      }
    }
  }
}