import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User }                            from "./entity/User";
import Post                                from "./entity/Post";

createConnection().then(async connection => {

  const userRepository = getRepository(User)
  const postRepository = getRepository(Post)

  // TODO try here

}).catch(error => console.log(error));
