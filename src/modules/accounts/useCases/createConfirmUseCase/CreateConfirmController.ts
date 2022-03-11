import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateConfirmUseCase } from './CreateConfirmUseCase';

class CreateConfirmController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { isConfirmed } = request.body;
    const createConfirmUseCase = container.resolve(CreateConfirmUseCase);

    const confirmed = await createConfirmUseCase.execute({
      id,
      isConfirmed,
    });

    return response.status(201).json(confirmed);
  }
}
export { CreateConfirmController };
