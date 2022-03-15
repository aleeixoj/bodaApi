import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateFamilyUserUseCase } from './CreateFamilyUserUseCase';

class CreateFamilyUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { family_id, users_id } = request.body;
    const createFamilyUserUseCase = container.resolve(CreateFamilyUserUseCase);

    const familyUser = await createFamilyUserUseCase.execute({
      family_id,
      users_id,
    });

    return response.status(201).send();
  }
}
export { CreateFamilyUserController };
