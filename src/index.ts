import "reflect-metadata";
import { createConnection, getCustomRepository, getRepository } from "typeorm";
import UserRepository                                           from "./UserRepository";
import SearchByAgeCondition                                     from "./SearchByAgeCondition";
import SearchByNameCondition                                    from "./SearchByNameCondition";

createConnection().then(async connection => {
  const userRepository = getCustomRepository(UserRepository)

  const adults = await userRepository.search(new SearchByAgeCondition(30))
  const usersNamedLinh = await userRepository.search(new SearchByNameCondition('Linh'))

  console.log(usersNamedLinh);


}).catch(error => console.log(error));
