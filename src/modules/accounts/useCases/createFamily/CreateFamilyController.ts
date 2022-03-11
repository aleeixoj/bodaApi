import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateFamilyUseCase } from './CreateFamilyUseCase';

interface IRequest {
  name: string;
  access_code: string;
  users: string[];
}

class CreateFamilyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, access_code, users }: IRequest = request.body;
    const createFamilyUseCase = container.resolve(CreateFamilyUseCase);

    const createFamily = await createFamilyUseCase.execute({
      name,
      access_code,
    });

    return response.status(201).json(createFamily);
  }
}
export { CreateFamilyController };
