import env from "dotenv"
env.config()
import app from "./src/app.js"
import { sequelize } from "./src/config/db.js";
const port = process.env.PORT


sequelize.sync()
    .then(() => {
        console.log("Database Conneted");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => console.log(err));