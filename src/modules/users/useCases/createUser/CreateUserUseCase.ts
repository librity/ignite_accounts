import  '../../../../types';

import { User } from 'modules/users/model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const emailTaken = this.usersRepository.findByEmail(email);

    if (emailTaken) throw new Error('Email taken by another user');

    if (email.isEmpty()) throw new Error("Email can't be blank");
    if (name.isEmpty()) throw new Error("Name can't be blank");

    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
