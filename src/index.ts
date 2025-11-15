import app from "./app";
import { env } from "./config/env";
import connectDB from "./lib/db";
const PORT = env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
