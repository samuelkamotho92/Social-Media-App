import express from "express";
import { createRelationship } from "../controlers/relationship.js";
const relationshipRouter = express.Router();
relationshipRouter.route("/").post(createRelationship);
export default relationshipRouter;
