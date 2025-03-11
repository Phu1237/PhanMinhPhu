import express from "express";
import webRoute from "./routes/web";

class App {
  public app: express.Application;
  public port: number | string;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeControllers();
  }

  private initializeControllers() {
    this.app.use("/", webRoute);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
