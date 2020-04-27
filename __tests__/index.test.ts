import request from "supertest";
import { app } from "../src/app-server";

describe("get endpoint testing", () => {
    
    it("get index", async () => {
        expect.assertions(1);
        const response = await request(app).get("/");
        expect(response.status).toEqual(200);
    }, 500);

    it("get index", async () => {
        expect.assertions(1);
        const response = await request(app).get("/example");
        expect(response.status).toEqual(200);
    }, 500);
})