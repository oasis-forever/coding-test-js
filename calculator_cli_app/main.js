import {
  Application
} from "./src/application";

const app = new Application(process.argv.slice(2))
app.run()
