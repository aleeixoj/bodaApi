import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateConfirmUseCase } from './CreateConfirmUseCase';

class CreateConfirmController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { access_code } = request.params;
    const { data } = request.body;

    const createConfirmUseCase = container.resolve(CreateConfirmUseCase);

    const confirmed = await createConfirmUseCase.execute({
      access_code,
      data,
    });

    return response.status(201).json({ data: confirmed, message: 'sucess' });
  }
}
export { CreateConfirmController };
