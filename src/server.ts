import { app } from "./app";
import { env } from "./env";
import connectToDatabase from "./db/mongo";

connectToDatabase()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

