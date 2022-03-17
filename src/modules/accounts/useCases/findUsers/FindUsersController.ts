import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUsersUseCase } from './FindUsersUseCase';

class FindUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findUsersUseCase = container.resolve(FindUsersUseCase);
    const users = await findUsersUseCase.execute();

    return response.status(201).json({ data: users, count: users.length });
  }
}
export { FindUsersController };
