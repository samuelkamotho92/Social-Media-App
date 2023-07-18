import express from "express";
import {
  createRelationship,
  getrelationships,
  deleteRelationships,
} from "../controlers/relationship.js";
const relationshipRouter = express.Router();
relationshipRouter.route("/").post(createRelationship);
relationshipRouter.route("/:id").get(getrelationships);
relationshipRouter.route("/unfollow").post(deleteRelationships);
export default relationshipRouter;
