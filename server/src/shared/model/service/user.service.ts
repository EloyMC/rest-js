import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        try {
            return await this.userRepository.find();
        } catch (err) {
            return err;
        }
    }

    async findById(id: number): Promise<User> {
        try {
            return await this.userRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    async insert(user: User): Promise<User> {
        const newUser = new User();
        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.userRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }

    async update(user: User, update: User): Promise<User> {
        const updatedUser = user;
        Object.keys(update).forEach((key) => {
            updatedUser[key] = update[key];
        });

        try {
            return await this.userRepository.save(updatedUser);
        } catch (err) {
            return err;
        }
    }

    async delete(id: number) {
        try {
            return await this.userRepository.delete(id);
        } catch (err) {
            return err;
        }
    }
}