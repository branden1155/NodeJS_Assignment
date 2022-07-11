const { boredService, boredServiceByType } = require("./boredServices");

//jest.mock('./boredServices');

describe("BoredAPI Service Tests", () => {
    //test being ran trought all activity tasks
    test('I should return the an object with all of the following ', async () => {
        const result = await boredService();
        if (result.data.key === "9366464"){
            expect(result.data.activity).toBe("Create and follow a savings plan")
            expect(result.data.activity).toBe("busywork")
            expect(result.data.participants).toBe(1)
            expect(result.data.price).toBe(0)
            expect(result.data.accessibility).toBe(0.2)
        }
    });
    //test being ran with id in the function
    test('I should return a certain object with a type of music', async () => {
        const result = await boredServiceByType("2715253");
        expect(result.data.type).toBe("music");
        expect(result.data.activity).toBe("Have a jam session with your friends");
        expect(result.data.accessibility).toBe(0.3);
        expect(result.data.participants).toBe(5);
    });
});

