import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindConfirmedsUseCase } from './FindConfirmedsUseCase';

class FindConfirmedsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findConfirmedsUseCase = container.resolve(FindConfirmedsUseCase);
    const confirmeds = await findConfirmedsUseCase.execute();

    return response
      .status(200)
      .json({ data: confirmeds, count: confirmeds.length });
  }
}
export { FindConfirmedsController };
