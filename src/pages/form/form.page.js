import template from "./form.marko";
import schema from "./form.schema";

export default async (app, {}, next) => {
  
  // returns the login form page 
  app.get("/form", (request, reply) => {
    reply.marko(template, { session: request.session });
  });

  // handles the actual login
  //app.post("/form", schema, (request, reply) => {
  app.post("/form", {  attachValidation: true, schema }, (request, reply) => {

    if (request.validationError) {
      reply.code(400).send(request.validationError)
    }

    const { email, password } = request.body;
    
    if (typeof password === "string") {
        console.log("form accepted");
        reply.redirect("/");
    } else {
      reply.marko(template, { session: request.session });
    }

  });

};