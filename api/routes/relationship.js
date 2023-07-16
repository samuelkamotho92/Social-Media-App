import express from "express";
import {
  createRelationship,
  getrelationships,
} from "../controlers/relationship.js";
const relationshipRouter = express.Router();
relationshipRouter.route("/").post(createRelationship);
relationshipRouter.route("/:id").get(getrelationships);
export default relationshipRouter;
