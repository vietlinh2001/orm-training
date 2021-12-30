import "reflect-metadata";
import { createConnection, getCustomRepository, getRepository } from "typeorm";
import UserRepository                                           from "./UserRepository";
import { User }                                                 from "./entity/User";
import Name                                                     from "./entity/Name";
import Membership, { MembershipPlan }                           from "./entity/Membership";
import MemberManager                                            from "./MemberManager";

createConnection().then(async connection => {
  const membershipRepository = getRepository(Membership)
  const userRepository = getCustomRepository(UserRepository)
  const memberManager = new MemberManager(userRepository, membershipRepository)



  const user = new User()
  user.name = new Name('Linh', 'Dinh')
  user.dateOfBirth = new Date('2001/05/25')
  user.description = 'Fucking ugly'

  const membership = new Membership()
  membership.plan = MembershipPlan.GOLD
  membership.owner = user
  membership.purchaseDate = new Date()


  await memberManager.register(user, membership)


}).catch(error => console.log(error));
