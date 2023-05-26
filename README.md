# Garbage Collection Monitoring with Node.js and New Relic Native Metrics

This is a simple Node.js project designed to illustrate the usage of the `@newrelic/native-metrics` module. The module provides tools to monitor and analyze garbage collection (GC) in Node.js applications and track the performance of applications.

## Project Structure

The project contains the following key files:

1. `package.json`: The project's metadata and dependencies, including the `@newrelic/native-metrics` and New Relic's Node.js agent modules.
2. `server.js`: The main server file that sets up an Express.js application with a single endpoint.
3. `newrelic.js`: New Relic configuration file that contains the settings for monitoring the application.
4. `Dockerfile`: Instructions for Docker to build an image of the application.
5. `docker-compose.yml`: Allows for running the application as a Docker service.

## Understanding the Code

In `server.js`, we use Express.js to set up a server that listens on port 3000. There is one endpoint, `/heavy-operation`, which simulates a heavy operation that generates a lot of garbage data that needs to be collected by the Node.js garbage collector.

We use the New Relic Node.js agent to monitor the application, and the `@newrelic/native-metrics` module is used to get detailed metrics about the Node.js runtime, including garbage collection statistics.

In the `server.js` file, we include the `newrelic` and `@newrelic/native-metrics` modules at the top of the file. This is crucial because it allows these modules to monitor the entire lifespan of the application, starting from the very first tick of the Node.js event loop.

The `newrelic` module is the main Node.js agent for New Relic's monitoring service. It must be required before any other module in your code (except `@newrelic/native-metrics`) for it to properly instrument your application.

On the other hand, the `@newrelic/native-metrics` module provides an API for accessing metrics about the runtime, including garbage collection statistics. By requiring this module at the start of your server file, it can track these metrics for the entirety of your application's runtime.


## Setting Up and Running the Application

First, clone this repository and navigate to the project directory.

Ensure Docker is installed and running on your system.

To build and start the application:

```bash
docker-compose up --build
```

This will create a Docker container running the application and expose it on port 3000.

You can then access the `/heavy-operation` endpoint by navigating to `http://localhost:3000/heavy-operation` in your browser. This will trigger the heavy operation and generate the garbage data.

## Viewing the Metrics

To view the metrics from `@newrelic/native-metrics`, you need to have a [New Relic account](https://newrelic.com/signup), and you need to replace the `license_key` field in `newrelic.js` with your New Relic license key.

The New Relic agent will send the metrics data to New Relic's servers, where you can analyze it using New Relic's web interface.

## Running with New Relic Native Metrics Preloaded

You can also run the application with the `@newrelic/native-metrics` module preloaded by setting the `NODE_OPTIONS` environment variable. You can add a script in `package.json` for this purpose:

```json
"scripts": {
  "dev": "NODE_OPTIONS='-r @newrelic/native-metrics' node server.js",
  "start": "node server.js"
}
```

Now, running `npm run dev` will start the application with the `@newrelic/native-metrics` module preloaded.

## Conclusion

This application serves as an example of how to use the `@newrelic/native-metrics` module to monitor and analyze garbage collection in a Node.js application. It is not intended to be used in a production environment as-is. Remember to securely handle your New Relic license key and other sensitive information when deploying a real-world application.
