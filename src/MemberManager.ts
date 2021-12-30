import { User }       from "./entity/User";
import Membership     from "./entity/Membership";
import { Repository } from "typeorm";

export default class MemberManager {

  constructor(
    private readonly userRepository: Repository<User>,
    private readonly membershipRepository: Repository<Membership>
  ) {
  }

  async register(user: User, membership: Membership) {
    // ====> This is a Unit Of Work: Register a new user
    await this.userRepository.save(user)
    await this.membershipRepository.save(membership)
  }
}