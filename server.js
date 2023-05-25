require("newrelic");
require("@newrelic/native-metrics");

const express = require("express");
const app = express();

// Endpoint that triggers garbage collection
app.get("/heavy-operation", (req, res) => {
  // Perform heavy operation
  // This could be a CPU-intensive task or a memory-consuming operation
  // that generates a lot of garbage that needs to be collected by the garbage collector

  // Simulating a heavy operation with a loop
  for (let i = 0; i < 10000000; i++) {
    // Creating objects to generate garbage
    const temp = {};
    temp["key" + i] = "value" + i;
  }

  // Send response
  res.send("Heavy operation completed");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
