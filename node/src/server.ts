import { http } from "../src/http";
import "./websocket/client";
import "./websocket/admin";

const port = process.env.PORT;

http.listen(port, () => console.log(`Server is running on port ${port}`));
