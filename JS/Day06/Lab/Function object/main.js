function exactlyTwoParams(a, b) {
        if (arguments.length !== 2) {
          throw new Error("This function requires exactly 2 parameters.");
        }

        console.log("Success! You passed exactly two parameters:", a, b);
      }

      try {
        exactlyTwoParams(5);
      } catch (e) {
        console.error("Error:", e.message);
      }

      try {
        exactlyTwoParams(5, 10, 15);
      } catch (e) {
        console.error("Error:", e.message);
      }

      try {
        exactlyTwoParams(3, 7);
      } catch (e) {
        console.error("Error:", e.message);
      }

      function addNumbers() {
        if (arguments.length === 0) {
          throw new Error("You must pass at least one number.");
        }

        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
          var value = arguments[i];
          if (typeof value !== "number") {
            throw new Error(
              "All arguments must be numbers. Invalid value: " + value
            );
          }
          sum += value;
        }

        console.log("Sum is:", sum);
        return sum;
      }

      try {
        addNumbers();
      } catch (e) {
        console.error("Error:", e.message);
      }

      try {
        addNumbers(1, "string", 3);
      } catch (e) {
        console.error("Error:", e.message);
      }

      try {
        addNumbers(10, 20, 30, 40);
      } catch (e) {
        console.error("Error:", e.message);
      }