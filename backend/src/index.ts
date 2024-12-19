import express from "express"
import cors from "cors"
import path from "path"
import adminRoute from "./routes/admin"
import userRoute from "./routes/user"
import roleRoute from "./routes/roles"

const app  = express();

app.use("/*",cors());
app.use("/uploads", express.static(path.resolve("./uploads")));
app.use(express.json());
app.use("/api/v1/admin",adminRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/role", roleRoute)

app.listen(3000);