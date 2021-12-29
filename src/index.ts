import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {

  const userRepository = getRepository(User)

  // TODO try here
  const users = await userRepository.find()

  console.log(users);

}).catch(error => console.log(error));
