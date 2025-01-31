import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        PrismaService, // Add PrismaService as a provider
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  // Example test for POST /users
it('should create a user', async () => {
  const mockUser = { email: 'test@ah.nl', categories: [8] };
  jest.spyOn(usersService, 'createUser').mockResolvedValue(mockUser as any);
  expect(await controller.createUser(mockUser)).toEqual(mockUser);
});
});

