import express from "express";
import { createStory, getStory } from "../controlers/stories.js";
const storyRouter = express.Router();
storyRouter.route("/").get(getStory).post(createStory);
export default storyRouter;
